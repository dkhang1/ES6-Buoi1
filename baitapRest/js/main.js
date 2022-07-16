let calcGPA = (...mark) => {
  let GPA = 0;
  for (let i = 0; i < mark.length; i++) {
    GPA += mark[i] / mark.length;
  }
  return GPA;
};

// Điểm trung bình khối lớp 1
document.querySelector("#btnKhoi1").onclick = () => {
  let diemToan = document.getElementById("inpToan").value;
  let diemHoa = document.getElementById("inpHoa").value;
  let diemLy = document.getElementById("inpLy").value;
  if (
    diemToan < 0 ||
    diemToan > 10 ||
    diemHoa < 0 ||
    diemHoa > 10 ||
    diemLy < 0 ||
    diemLy > 10
  ) {
    alert("Điểm phải từ 0 - 10");
  } else {
    document.querySelector("#tbKhoi1").innerHTML = calcGPA(
      diemToan,
      diemHoa,
      diemLy
    ).toFixed(2);
  }
};
// Điểm trung bình khối lớp 2
document.querySelector("#btnKhoi2").onclick = () => {
  let diemVan = document.getElementById("inpVan").value;
  let diemSu = document.getElementById("inpSu").value;
  let diemDia = document.getElementById("inpDia").value;
  let diemEnglish = document.getElementById("inpEnglish").value;
  if (
    diemVan < 0 ||
    diemVan > 10 ||
    diemDia < 0 ||
    diemDia > 0 ||
    diemSu < 0 ||
    diemSu > 10 ||
    diemEnglish < 0 ||
    diemEnglish > 10
  ) {
    alert("Điểm phải từ 0 - 10");
  } else
    document.querySelector("#tbKhoi2").innerHTML = calcGPA(
      diemVan,
      diemSu,
      diemDia,
      diemEnglish
    ).toFixed(2);
};
// cách khác
// let calcGPA = (mark) => {
//   let GPA = 0;
//   for (let i = 0; i < mark.length; i++) {
//     GPA += mark[i] / mark.length;
//   }
//   return GPA;
// };

// document.querySelector("#btnKhoi1").onclick = () => {
//   let arrInput = document.querySelectorAll("#science input");
//   let mark = [];
//   for (let input of arrInput) {
//     let value = +input.value;
//     console.log(value);
//     if (value < 0 || value > 10 || value = "" ) {
//       alert("Điểm phải từ 0 - 10");
//     } else {
//       mark.push(value);
//     }
//     console.log(mark);
//   }
//   document.querySelector("#tbKhoi1").innerHTML = calcGPA(mark).toFixed(2);
// };
