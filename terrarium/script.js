// Apply dragElement to all plant elements
for (let i = 1; i <= 14; i++) {
  dragElement(document.getElementById('plant' + i));
}

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onpointerdown = function (e) {
    e.preventDefault();
    // Get the initial mouse cursor position
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Set up the event handlers for dragging and dropping
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  };

  function elementDrag(e) {
    e.preventDefault();
    // Calculate new cursor position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // Move the element
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
