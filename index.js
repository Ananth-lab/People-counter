countEl = document.getElementById("count");
divImage = document.getElementsByClassName("image"); 
let count = 0;
function increament() {
  count = count + 1;
  countEl.innerText = count;
}
function decreament() {
  if (count == 0) {
    countEl.innerText = "No one is in the room";
  } else {
    count = count - 1;
    countEl.innerText = count;
  }
}
