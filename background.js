const menuItemId = "twitch-pip"

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: menuItemId,
    title: "Request picture-in-picture"
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === menuItemId) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, "requestPictureInPicture");
    });
  }
})