// function to save all checkboxes
(function() {
    var boxes = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        if (box.hasAttribute("store")) {
            setupBox(box);
        }
    }

    function setupBox(box) {
        var storageId = box.getAttribute("store");
        var oldVal    = localStorage.getItem(storageId);
        box.checked = oldVal === "true" ? true : false;

        box.addEventListener("change", function() {
            localStorage.setItem(storageId, this.checked);
        });
    }
  })();

 // reset
  function clearClick(){
  	localStorage.clear();
  }
