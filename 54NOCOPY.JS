// PREVENT CONTEXT MENU FROM OPENING
  document.addEventListener("contextmenu", function(evt){
    evt.preventDefault();
  }, false);

  // PREVENT CLIPBOARD COPYING
  document.addEventListener("copy", function(evt){
    // Change the copied text if you want
    evt.clipboardData.setData("text/plain", "Copying is not allowed on this webpage");

    // Prevent the default copy action
    evt.preventDefault();
  }, false);