function openOrderForm(judul, harga) {
  document.getElementById('judul').value = judul;
  document.getElementById('harga').value = harga;
  document.getElementById('orderForm').style.display = 'block';
  document.getElementById('pesanStatus').innerText = '';
}

function closeOrderForm() {
  document.getElementById('orderForm').style.display = 'none';
  document.getElementById('nama').value = '';
  document.getElementById('jam').value = '';
}

function submitOrder(event) {
  event.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const judul = document.getElementById('judul').value.trim();
  const harga = document.getElementById('harga').value.trim();
  const jam = document.getElementById('jam').value;

  if (!nama || !judul || !harga || !jam) {
    document.getElementById('pesanStatus').innerText = '⚠️ Semua data harus diisi.';
    return;
  }

  document.getElementById('pesanStatus').innerText = '✅ Pesanan sedang diproses...';

  setTimeout(() => {
    alert(`Terima kasih, ${nama}! Tiket untuk "${judul}" jam ${jam} telah dipesan.`);
    closeOrderForm();
  }, 2000);
}
