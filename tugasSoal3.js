const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  const num = (element) => {
    const hasil = typeof element == "number";
    return hasil;
  };
  const newData = dataArray.filter((isi) => {
    return isi >= nilaiAwal && isi <= nilaiAkhir;
  });
  if (
    typeof nilaiAwal != "number" ||
    typeof nilaiAkhir != "number" ||
    Array.isArray(dataArray) == false
  ) {
    console.log("parameter harus sesuai");
  } else if (nilaiAkhir < nilaiAwal) {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  } else if (dataArray.length != dataArray.filter(num).length) {
    console.log("Element dalam array bukan angka");
  } else if (dataArray.length < 6) {
    console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  } else if (newData.length == []) {
    console.log("Nilai tidak ditemukan");
  } else {
    console.log(
      newData.sort((a, b) => {
        return a - b;
      })
    );
  }
};
seleksiNilai(15, 20, [0, 19, 18, 12, 16, 22]);
