const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];
const searchName = (cari, batas, cb) => {
  if (typeof cari != "string" || cari == "") {
    console.log("parameter cari harus string dan tidak boleh string kosong");
  } else if (typeof batas != "number") {
    console.log("parameter batas harus number");
  } else if (batas <= 0) {
    console.log("parameter batas harus lebih besar dari 0");
  } else {
    const hasil = name.filter((nama) => {
      return nama.toLowerCase().includes(cari.toLowerCase());
    });
    return cb(hasil, batas);
  }
};
const callback = (hasil, batas) => {
  if (hasil.slice(0, batas).length == 0) {
    console.log("hasil tidak ditemukan");
  } else {
    console.log(hasil.slice(0, batas));
  }
};
searchName("1", 1, callback);
