countEl = document.getElementById("count");
prevEntries = document.getElementById("entries")
let entry = "";
let count = 0;
function increament() {
  count += 1;
  countEl.innerText = count;
}
function decreament() {
  if (count == 0) {
    countEl.innerText = "No one is in the room";
  } else {
    count -= 1;
    countEl.innerText = count;
  }
}
function save(){
    entry =entry + "+" +  count;
    prevEntries.innerText = "previous entries =" + entry;
}