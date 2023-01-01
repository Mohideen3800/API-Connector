chrome.runtime.sendMessage({
  action: "getData",
  urls: ["https://api.example.com/endpoint1", "https://api.example.com/endpoint2"]
}, function(response) {
  console.log(response.data);
});

chrome.runtime.sendMessage({
  action: "scheduleTask",
  task: {...},
  interval: 3600
});
