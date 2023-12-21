// Belajar DOM
// document.title = "Arkanul Adelis";
// const body = document.body;
// body.append("Hallo Arkan");

// const h1 = document.createElement("h1");
// h1.textContent = " <marquee>Hallo Arkan </marquee>";
// const namaSaya = document.createElement("p");
// namaSaya.innerHTML = " <marquee> Hallo Alsarawi </marquee>";
// const namaKamu = document.createElement("h2");
// namaKamu.innerText = "<marquee>Hallo Anjim </marquee>";
// body.append(h1);
// body.append(namaSaya);
// body.append(namaKamu);

//style langsung di javascript

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.style.backgroundColor = "black";
btn1.style.color = "white";
btn1.style.padding = "5px 15px 5px 15px";
btn1.style.borderRadius = "10px";
btn1.style.border = "none";
btn1.style.marginLeft = "10px";

function gantiWarna() {
  alert("kamu click saya");
}
gantiWarna();
