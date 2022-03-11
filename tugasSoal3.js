const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  const num = (element) => {
    return typeof element == "number";
  };
  const validasi = (isi) => {
    return isi >= nilaiAwal && isi <= nilaiAkhir;
  };
  if (
    typeof nilaiAwal != "number" ||
    typeof nilaiAkhir != "number" ||
    Array.isArray(dataArray) != true
  ) {
    console.log("parameter harus sesuai");
  } else if (nilaiAkhir < nilaiAwal) {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  } else if (dataArray.length != dataArray.filter(num).length) {
    console.log("Element dalam array bukan angka");
  } else if (dataArray.length < 6) {
    console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  } else if (dataArray.filter(validasi).length == []) {
    console.log("Nilai tidak ditemukan");
  } else {
    console.log(
      dataArray.filter(validasi).sort((a, b) => {
        return a - b;
      })
    );
  }
};
seleksiNilai(15, 20, [11, 12, 13, 16, 17, 18]);
