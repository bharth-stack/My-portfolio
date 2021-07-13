let ke = 0;
const active = document.querySelectorAll(".key");
active.forEach((key) => {
  key.addEventListener("click", playNote(key));
});
function playNote(keys) {
  keys.addEventListener("click", () => {
    check(keys);
    ke = keys;
    keys.classList.add("actives");
  });
}
function check() {
  if (ke !== 0) {
    remo(ke);
  }
}
function remo(ke) {
  ke.classList.remove("actives");
}
