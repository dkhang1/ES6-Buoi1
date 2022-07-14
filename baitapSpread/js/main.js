// let hoverText = () => {
//   let content = document.querySelector(".heading").innerHTML;
//   let chars = [...content];
//   for (let i = 0; i < chars.length; i++) {
//     let text = chars[i];
//     let span = document.createElement("span");
//     span.innerHTML = text;
//     document.querySelector(".heading").appendChild(span);
//   }
//   document.querySelector(".heading").innerHTML = "";
// };

let hoverText = () => {
  let content = document.querySelector(".heading").innerHTML;
  let chars = [...content];
  let html = "";
  for (let i = 0; i < chars.length; i++) {
    html += `
    <span>${chars[i]}</span>`;
  }
  document.querySelector(".heading").innerHTML = html;
};
window.onload = function () {
  hoverText();
};
