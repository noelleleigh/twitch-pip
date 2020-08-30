chrome.runtime.onMessage.addListener((request) => {
    if (request === "requestPictureInPicture") {
      document.querySelector('video').requestPictureInPicture()
    }
  }
);