// concat()
// menggabungkan 2 array atau lebih
// const buah = ["mangga", "apel", "manggis", "durian"];
// const sayur = ["wortel", "terong", "bayam", "sledri"];
// const hewani = ["telur", "susu", "daging sapi", "daging ayam"];
// console.log(buah.concat(sayur)); //untuk menggabungkan 2 array
// console.log(buah.concat(sayur, hewani)); //untuk menggabungkan 3 array atau lebih. penambahan dengan koma

// include()
// jika nilai secara spesifik ditemukan maka akan keluar true
// jika nilai tidak ditemukan maka akan keluar false
// const buah = ["mangga", "apel", "manggis", "durian"];
// console.log(buah.includes("mangga"));

// toString()
// mengubah array ke string dengan pemisah koma
// tidak mengubah array asli
// const sayur = ["wortel", "terong", "bayam", "sledri"];
// console.log(sayur.toString());

// splice()
// menghapus element array lama
// menambahkan element baru kedalam array lama
// const sayur = ["wortel", "terong", "bayam", "sledri"];
// sayur.splice(1, 0, "cabai", "kol");
// console.log(sayur);

// filter()
// untuk membuat array baru yang sudah melewati validasi atau test
// const buah = ["manGGa", "apel", "manggis", "durian"];
// const cari = (para) => {
//   const hasil = buah.filter((nilai) => {
//     return nilai.toLowerCase().includes(para.toLowerCase());
//   });
//   return hasil;
// };
// console.log(cari("ma"));

// pop()
// untuk menghapus element array terakhir
// menampilkan element array terakhir
// const sayur = ["wortel", "terong", "bayam", "sledri"];
// sayur.pop();// menghapus
// console.log(sayur);
// console.log(sayur.pop())//menampilkan

// isArray()
// untuk menentukan variabel itu array atau bukan
// jika array akan keluar true jika tidak akan keluar false
// const hewani = ["telur", "susu", "daging sapi", "daging ayam"];
// console.log(Array.isArray(hewani)); // array
// const hewani2 = "telur,susu,daging sapi,daging ayam";
// console.log(Array.isArray(hewani2)); // bukan array

// slice()
// mengambil element sesuai parameter dalam array
// const buah = ["mangga", "apel", "manggis", "durian", "rambutan", "duku"];
// const hasil = buah.slice(3, 4);
// console.log(hasil);

// find()
// mangambil element pertama yang melewati validasi
// const angka = [1, 2, 3, 4, 5, 6];
// console.log(
//   angka.find((cari) => {
//     return cari >= 2;
//   })
// );
