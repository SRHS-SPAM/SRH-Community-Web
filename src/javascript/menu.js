const bar = document.getElementById("bar").addEventListener("click", floatBar);
const bar2 = document
  .getElementById("menubar_f")
  .addEventListener("click", floatBar);

function floatBar() {
  let dis = document.getElementById("menubar_f");
  if (dis.style.display == "none") {
    dis.style.display = "flex";
  } else {
    dis.style.display = "none";
  }
}
