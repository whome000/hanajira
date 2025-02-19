

// A generic onclick callback function.
chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
      sel = info.selectionText;
      newURL = "https://jira.tools.sap/browse/" + sel;
      console.log(newURL);
      chrome.tabs.create({ url: newURL });
}
chrome.runtime.onInstalled.addListener(function () {
  // Create one test item for each context type.
  let contexts = [
    'selection'
  ];
  for (let i = 0; i < contexts.length; i++) {
    let context = contexts[i];
    let title = "Open HANA jira";
    chrome.contextMenus.create({
      title: title,
      contexts: [context],
      id: context
    });
  }
});
