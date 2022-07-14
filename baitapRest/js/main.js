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
  document.querySelector("#tbKhoi1").innerHTML = calcGPA(
    diemToan,
    diemHoa,
    diemLy
  ).toFixed(2);
};
// Điểm trung bình khối lớp 2
document.querySelector("#btnKhoi2").onclick = () => {
  let diemVan = document.getElementById("inpVan").value;
  let diemSu = document.getElementById("inpSu").value;
  let diemDia = document.getElementById("inpDia").value;
  let diemEnglish = document.getElementById("inpEnglish").value;
  document.querySelector("#tbKhoi2").innerHTML = calcGPA(
    diemVan,
    diemSu,
    diemDia,
    diemEnglish
  ).toFixed(2);
};
