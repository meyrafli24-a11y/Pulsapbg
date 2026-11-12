document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Fitur Tab Menu (Isi Ulang, Bayar, Hiburan)
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Sembunyikan semua card
                document.querySelectorAll('.product-card').forEach(card => card.classList.add('hidden'));
                // Hapus class active dari semua tombol
                tabBtns.forEach(b => b.classList.remove('active'));
                
                // Tampilkan yang diklik
                this.classList.add('active');
                const targetId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
                document.getElementById(targetId).classList.remove('hidden');
            });
        });
    }

    // 2. Fitur Klik Menu Grid (Pulsa, Kuota, dll)
    const gridItems = document.querySelectorAll('.grid-item');
    if (gridItems.length > 0) {
        gridItems.forEach(item => {
            item.addEventListener('click', function() {
                const productName = this.querySelector('span').innerText;
                
                // JIKA YANG DIKLIK ADALAH PULSA ATAU TRI, ARAHKAN KE HALAMAN PULSA
                if (productName === 'Pulsa' || productName === 'Tri' || productName === 'Pulsa Ekonomis') {
                    window.location.href = 'pulsa.html';
                } else {
                    alert(`Anda memilih: ${productName}\nFitur transaksi akan segera dibuka.`);
                }
            });
        });
    }

    // 3. Fitur Klik Tombol Top Up
    const btnTopup = document.querySelector('.btn-topup');
    if (btnTopup) {
        btnTopup.addEventListener('click', function() {
            alert('Membuka halaman Top Up Stok Agen...');
        });
    }
});