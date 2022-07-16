// Thêm nút màu
const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

let renderBtn = () => {
  let html = "";
  for (let i = 0; i < colorList.length; i++) {
    let color = colorList[i];
    if (color === "pallet") {
      html += `
        <button onclick = "changeColor('${color}')" class = "color-button ${color} active"></button>
        `;
    } else {
      html += `
        <button onclick = "changeColor('${color}')" class = "color-button ${color} "></button>
    `;
    }
  }
  document.getElementById("colorContainer").innerHTML = html;
};
//  gắn active
let activeBtn = () => {
  let btn = document.querySelectorAll("#colorContainer .color-button");
  btn.forEach((item) => {
    item.addEventListener("click", () => {
      //
      let activeClass = document.querySelector(".active");
      activeClass.className = activeClass.className.replace("active", "");
      item.className += "active";
    });
  });
};
window.changeColor = (color) => {
  let btnClasslist = document.querySelectorAll(".color-button").classList;
  if (btnClasslist.contains("active")) {
    document.querySelector("#house").classList.add(color);
  } else {
    document.querySelector("#house").classList.remove(color);
  }
};

window.onload = function () {
  renderBtn();
  activeBtn();
};
