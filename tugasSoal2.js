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
  const hasil = name.filter((nama) => {
    return nama.toLowerCase().includes(cari.toLowerCase());
  });
  return cb(hasil, batas);
};
const callback = (hasil, batas) => {
  console.log(hasil.slice(0, batas));
};
searchName("an", 3, callback);
