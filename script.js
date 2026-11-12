// === 1. LOGIKA TAB MENU (Isi Ulang, Bayar Tagihan, Hiburan) ===
function switchTab(tabId) {
    // Sembunyikan semua konten product-card
    const contents = document.querySelectorAll('.product-card');
    contents.forEach(content => {
        content.classList.add('hidden');
    });

    // Tampilkan konten yang dipilih
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
        activeContent.classList.remove('hidden');
    }

    // Ubah status tombol (hapus class active dari semua tombol)
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Tambahkan class active ke tombol yang sedang diklik
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// === 2. EFEK KLIK PADA PRODUK (Grid Item) ===
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function() {
        const productName = this.querySelector('span').innerText;
        // Notifikasi saat produk diklik (bisa diganti dengan logika routing nanti)
        alert(`Anda memilih: ${productName}\nFitur transaksi akan segera dibuka.`);
    });
});

// === 3. EFEK KLIK TOMBOL TOP UP ===
const btnTopup = document.querySelector('.btn-topup');
if (btnTopup) {
    btnTopup.addEventListener('click', function() {
        alert('Membuka halaman Top Up Stok Agen...');
    });
}

// === 4. FITUR ZOOM GAMBAR QRIS (TAMBAHAN BARU) ===
// Fitur ini berguna agar pelanggan bisa klik gambar QRIS dan memperbesarnya agar mudah discan
const qrisImg = document.querySelector('.qris-img');

if (qrisImg) {
    qrisImg.addEventListener('click', function() {
        // Cek apakah gambar sudah dalam mode zoom
        if (this.classList.contains('zoom')) {
            // Jika sudah, kembalikan ke ukuran normal
            this.classList.remove('zoom');
            this.style.cursor = 'zoom-in';
        } else {
            // Jika belum, perbesar gambar
            this.classList.add('zoom');
            this.style.cursor = 'zoom-out';
        }
    });
}