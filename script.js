// === FITUR PENCARIAN PRODUK PULSA ===
function filterProduk() {
    // Ambil nilai dari input pencarian
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    
    // Ambil semua item produk
    let items = document.querySelectorAll('.product-item');

    // Looping semua produk untuk disembunyikan/ditampilkan
    items.forEach(item => {
        let text = item.querySelector('h4').innerText.toLowerCase();
        let price = item.querySelector('.price').innerText.toLowerCase();
        
        // Jika teks judul atau harga cocok dengan pencarian
        if (text.includes(filter) || price.includes(filter)) {
            item.style.display = 'block'; // Tampilkan
        } else {
            item.style.display = 'none'; // Sembunyikan
        }
    });
}

// === KLIK PRODUK PULSA (MENAMPILKAN ALERT) ===
// Pastikan script ini hanya berjalan jika elemen .product-item ada di halaman
if (document.querySelectorAll('.product-item').length > 0) {
    document.querySelectorAll('.product-item').forEach(item => {
        item.addEventListener('click', function() {
            const productName = this.querySelector('h4').innerText;
            const price = this.querySelector('.price').innerText;
            const nomorHp = document.getElementById('nomorHp').value;

            if(!nomorHp) {
                alert("Silakan masukkan nomor HP terlebih dahulu!");
                return;
            }

            alert(`Konfirmasi Pembelian:\n\nProduk: ${productName}\nHarga: Rp ${price}\nNomor Tujuan: ${nomorHp}`);
            // Di sini Anda bisa menambahkan logika untuk lanjut ke halaman pembayaran
        });
    });
}