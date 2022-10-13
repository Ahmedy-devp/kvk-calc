const form = document.querySelector("#form");
const box = document.querySelector("#box");
const data = {};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  data.power = parseInt(this.elements.power.value);
  data.t4Kills = parseInt(this.elements.t4Kills.value);
  data.t5Kills = parseInt(this.elements.t5Kills.value);
  data.t4Deaths = parseInt(this.elements.t4Deaths.value);
  data.t5Deaths = parseInt(this.elements.t5Deaths.value);
  box.innerHTML = `<h2 class="p-5">Your Score: ${calculation()}</h2>`;
});

const calculation = () => {
  let myResult;
  if (data.power < 50000000) {
    myResult =
      data.t4Kills * 2 +
      data.t5Kills * 4 +
      data.t4Deaths * 36 +
      data.t5Deaths * 32;
  } else if (data.power >= 50000000 && data.power <= 64000000) {
    myResult =
      data.t4Kills * 1 +
      data.t5Kills * 2 +
      data.t4Deaths * 20 +
      data.t5Deaths * 40;
  } else if (data.power >= 65000000 && data.power <= 74000000) {
    myResult =
      data.t4Kills * 0.75 +
      data.t5Kills * 1.5 +
      data.t4Deaths * 12 +
      data.t5Deaths * 24;
  } else if (data.power >= 75000000 && data.power <= 89000000) {
    myResult =
      data.t4Kills * 0.5 +
      data.t5Kills * 1 +
      data.t4Deaths * 8 +
      data.t5Deaths * 16;
  } else if (data.power >= 90000000) {
    myResult =
      data.t4Kills * 0.38 +
      data.t5Kills * 0.75 +
      data.t4Deaths * 6 +
      data.t5Deaths * 12;
  }
  return myResult;
};
