chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'content.js'
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "getData") {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api-connector.example.com/getData", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        sendResponse({data: xhr.responseText});
      }
    }
    xhr.send(JSON.stringify({urls: request.urls}));
    return true; // Required to use sendResponse asynchronously
  } else if (request.action == "scheduleTask") {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api-connector.example.com/scheduleTask", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({task: request.task, interval: request.interval}));
  }
});
