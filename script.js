//IF, ELSE IF, NESTED IF
let jenis = "komik";
if (jenis == "komik") {
  console.log("Buku ini berjenis komik");
}

let total = 250000;
if (total > 250000) {
  console.log("Selamat Anda mendapatkan Diskon 20%");
} else {
  console.log("Mohon Maaf Anda belum mendapatkan diskon");
}

let jk = "Laki-Laki";
let umur = 17;
if (jk == "Laki-Laki") {
  if (umur >= 17) {
    console.log("Anda berjenis kelamin laki-laki dan sudah memiliki ktp");
  } else {
    console.log("Anda berjenis kelamin laki-laki tetapi belum memiliki ktp");
  }
} else {
  console.log("Jenis Kelamin anda bukan Laki-Laki");
}

// SWITCH CASE
const p = 5;
switch (p) {
  case 1:
    console.log("Harga Sepatu : 100000");
  case 2:
    console.log("Harga Sepatu : 200000");
  case 3:
    console.log("Harga Sepatu : 300000");
    break;
  default:
    console.log("Harga sepatu tidak ditemukan");
    break;
}

// FOR STATEMENT
for (let v = 0; v <= 5; v++) {
  console.log("Anak Ke -", v);
}

//WHILE, DO WHILE
let confirm = "y";
while (confirm === "y") {
  console.log("lanjut");
  confirm = prompt("Anda Ingin Lanjut?");
}

let i = 1;
do{
    console.log("Bilangan Ganjil :" + " " + i);
  i += 2;
} while (i < 10);

//FUNCTION
function kubus(s) {
    volume = s * s * s;
    console.log("Volume Kubus yang memiliki sisi 10 adalah " + volume);
}
kubus(10)