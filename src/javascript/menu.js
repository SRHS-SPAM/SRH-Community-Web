const bar = document.getElementById("bar").addEventListener("click", floatBar);
const bar2 = document
  .getElementById("menubar_f")
  .addEventListener("click", floatBar);

function floatBar() {
  let con = document.getElementById("menubar_f");
  if (con.style.display == "none") {
    con.style.display = "flex";
  } else {
    con.style.display = "none";
  }
}
