const tombolSapa = document.getElementById('sapaButton');

if (tombolSapa) {
  tombolSapa.addEventListener('click', function() {
    alert('Terimaksih telah mengunjungi website saya!');
  });
} else {
  console.error('Elemen dengan ID "sapaButton" tidak ditemukan.');
}
