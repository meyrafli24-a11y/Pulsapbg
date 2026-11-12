// Jalankan kode setelah HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. FITUR PENCARIAN PRODUK
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            let filter = this.value.toLowerCase();
            let items = document.querySelectorAll('.product-item');

            items.forEach(item => {
                let text = item.querySelector('h4').innerText.toLowerCase();
                let price = item.querySelector('.price').innerText.toLowerCase();
                
                if (text.includes(filter) || price.includes(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // 2. FITUR KLIK PRODUK
    const items = document.querySelectorAll('.product-item');
    if (items.length > 0) {
        items.forEach(item => {
            item.addEventListener('click', function() {
                const productName = this.querySelector('h4').innerText;
                const price = this.querySelector('.price').innerText;
                const nomorHp = document.getElementById('nomorHp').value;

                // Validasi Nomor HP
                if(!nomorHp || nomorHp.length < 9) {
                    alert("Silakan masukkan nomor HP yang valid terlebih dahulu!");
                    return;
                }

                // Tampilkan Konfirmasi
                const konfirmasi = confirm(`Konfirmasi Pembelian:\n\nProduk: ${productName}\nHarga: Rp ${price}\nNomor Tujuan: ${nomorHp}\n\nLanjutkan?`);
                
                if (konfirmasi) {
                    alert("Transaksi berhasil diproses!");
                    // Di sini Anda bisa menambahkan logika untuk menyimpan data atau pindah halaman
                }
            });
        });
    }
});