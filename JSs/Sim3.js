function myMove1() {
  var elem = document.getElementById("object1");
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos - "px";
      elem.style.left = pos + "px";
    }
  }
}

function myMove2() {
  var elem = document.getElementById("object2");
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos - "px";
    }
  }
}
function myMove3() {
  var elem = document.getElementById("object3");
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
