function changeCapital(e) {
  console.log(e.target.value);
  var caplist = {
    India: "New Delhi",
    Europe: "???",
    America: "Washington",
    Australia: "Canberra",
    Canada: "Ottowa"
  };
  document.querySelector(".country-name").innerHTML = e.target.value;
  document.querySelector("#capital").innerHTML = caplist[e.target.value];
}

document
  .querySelector("#country-select")
  .addEventListener("change", changeCapital);
