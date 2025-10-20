const tombolSapa = document.getElementById('sapaButton');

if (tombolSapa) {
  tombolSapa.addEventListener('click', function() {
    alert('Tombol sapa telah diklik!');
  });
} else {
  console.error('Elemen dengan ID "sapaButton" tidak ditemukan.');
}
