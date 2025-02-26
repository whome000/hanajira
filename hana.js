

// A generic onclick callback function.
chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
      sel = info.selectionText;
      switch (info.menuItemId) {
            case 'jira':
                  newURL = "https://jira.tools.sap/browse/" + sel;
                  console.log(newURL);
                  chrome.tabs.create({ url: newURL });
                  break;
            case 'bugzilla':
                  newURL = "https://hdbits.wdf.sap.corp/bugzilla/show_bug.cgi?id=" + sel;
                  console.log(newURL);
                  chrome.tabs.create({ url: newURL });
                  break;
      }
}
chrome.runtime.onInstalled.addListener(function () {

    let title = "Open HANA jira";
    chrome.contextMenus.create({
      title: title,
      contexts: 'selection',
      id: 'jira'
    });
    let title = "Open Bugzilla";
    chrome.contextMenus.create({
      title: title,
      contexts: 'selection',
      id: 'bugzilla'
    });      
  }
});
