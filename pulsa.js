// Ambil parameter dari URL (misal: pulsa.html?provider=axis)
const urlParams = new URLSearchParams(window.location.search);
const providerAktif = urlParams.get('provider') || 'pulsa'; // Default ke 'pulsa' jika kosong

// ==========================================
// DATABASE HARGA SEMUA PROVIDER
// ==========================================
// Anda tinggal menambah/mengurangi daftar di dalam kurung siku [ ] untuk setiap provider
const databasePulsa = {
    "pulsa": [
        { nama: "Pulsa Telkomsel 10.000", harga: "11.500" },
        { nama: "Pulsa Indosat 10.000", harga: "11.000" },
        { nama: "Pulsa XL 10.000", harga: "10.800" },
        { nama: "Pulsa Tri 10.000", harga: "10.335" },
        { nama: "Pulsa Axis 10.000", harga: "10.915" },
        { nama: "Pulsa Smartfren 10.000", harga: "10.500" }
    ],
    "telkomsel": [
        { nama: "Telkomsel 5.000", harga: "6.200" },
        { nama: "Telkomsel 10.000", harga: "11.500" },
        { nama: "Telkomsel 15.000", harga: "16.000" },
        { nama: "Telkomsel 20.000", harga: "20.500" },
        { nama: "Telkomsel 50.000", harga: "49.500" },
        { nama: "Telkomsel 100.000", harga: "98.000" }
    ],
    "indosat": [
        { nama: "Pulsa Indosat Promo 5.000", harga: "6.725" },
        { nama: "Pulsa Indosat 5.000", harga: "6.767" },
        { nama: "Pulsa Indosat Promo 10.000", harga: "11.725" },
        { nama: "Pulsa Indosat 10.000", harga: "11.888" },
        { nama: "Pulsa Indosat 15.000", harga: "15.745" },
        { nama: "Pulsa Indosat 20.000", harga: "20.950" },
        { nama: "Pulsa Indosat 25.000", harga: "25.325" },
        { nama: "Pulsa Indosat 50.000", harga: "48.904" },
        { nama: "Pulsa Indosat 100.000", harga: "97.000" }
    ],
    "xl": [
        { nama: "Pulsa XL 5.000", harga: "5.800" },
        { nama: "Pulsa XL 10.000", harga: "10.800" },
        { nama: "Pulsa XL 15.000", harga: "15.500" },
        { nama: "Pulsa XL 25.000", harga: "24.800" },
        { nama: "Pulsa XL 50.000", harga: "49.000" },
        { nama: "Pulsa XL 100.000", harga: "97.500" }
    ],
    "axis": [
        { nama: "Pulsa Axis Promo 5.000", harga: "5.905" },
        { nama: "Pulsa Axis 5.000", harga: "5.925" },
        { nama: "Pulsa Axis Promo 10.000", harga: "10.895" },
        { nama: "Pulsa Axis 10.000", harga: "10.915" },
        { nama: "Pulsa Axis Promo 15.000", harga: "15.028" },
        { nama: "Pulsa Axis 15.000", harga: "15.090" },
        { nama: "Pulsa Axis 25.000", harga: "25.050" },
        { nama: "Pulsa Axis 50.000", harga: "50.185" },
        { nama: "Pulsa Axis 100.000", harga: "99.950" }
    ],
    "tri": [
        { nama: "Pulsa Tri 5.000", harga: "5.200" },
        { nama: "Pulsa Tri Promo 5.000", harga: "5.228" },
        { nama: "Pulsa Tri Promo 10.000", harga: "10.042" },
        { nama: "Pulsa Tri 10.000", harga: "10.335" },
        { nama: "Pulsa Tri 15.000", harga: "14.750" },
        { nama: "Pulsa Tri 20.000", harga: "19.950" },
        { nama: "Pulsa Tri 25.000", harga: "24.745" },
        { nama: "Pulsa Tri 50.000", harga: "49.350" },
        { nama: "Pulsa Tri 100.000", harga: "99.000" }
    ],
    "smartfren": [
        { nama: "Pulsa Smartfren 5.000", harga: "5.500" },
        { nama: "Pulsa Smartfren 10.000", harga: "10.500" },
        { nama: "Pulsa Smartfren 20.000", harga: "20.000" },
        { nama: "Pulsa Smartfren 50.000", harga: "49.000" },
        { nama: "Pulsa Smartfren 100.000", harga: "97.000" }
    ],
    "byu": [
        { nama: "Pulsa by.U 5.000", harga: "5.100" },
        { nama: "Pulsa by.U 10.000", harga: "10.100" },
        { nama: "Pulsa by.U 20.000", harga: "20.100" },
        { nama: "Pulsa by.U 50.000", harga: "50.100" }
    ]
};

// ==========================================
// FUNGSI TAMPILKAN PRODUK
// ==========================================
const produkGrid = document.getElementById('produkGrid');

function tampilkanProduk(providerName) {
    produkGrid.innerHTML = ""; // Bersihkan grid
    
    // Ubah Judul dan Tab sesuai nama provider
    const namaTampil = providerName === 'pulsa' ? 'Pulsa' : providerName.charAt(0).toUpperCase() + providerName.slice(1);
    document.getElementById('judulProvider').innerText = namaTampil;
    document.getElementById('tabNamaProvider').innerText = namaTampil;

    // Ambil data dari database
    let data = databasePulsa[providerName];

    // Jika data provider belum ada di database, tampilkan pesan
    if (!data) {
        produkGrid.innerHTML = `<p style="grid-column: span 2; text-align: center; color: #888; padding: 20px;">Data harga untuk provider ini belum tersedia.</p>`;
        return;
    }

    // Looping data dan buat kartu produk
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'product-item';
        div.innerHTML = `
            <h4>${item.nama}</h4>
            <p class="price">${item.harga}</p>
        `;
        
        div.addEventListener('click', function() {
            prosesPembelian(item.nama, item.harga);
        });

        produkGrid.appendChild(div);
    });
}

// ==========================================
// FUNGSI PENCARIAN
// ==========================================
window.filterProduk = function() {
    let filter = document.getElementById('searchInput').value.toLowerCase();
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
}

// ==========================================
// FUNGSI PEMBELIAN
// ==========================================
function prosesPembelian(namaProduk, hargaProduk) {
    const nomorHp = document.getElementById('nomorHp').value;

    if(!nomorHp || nomorHp.length < 9) {
        alert("Silakan masukkan nomor HP yang valid terlebih dahulu!");
        document.getElementById('nomorHp').focus();
        return;
    }

    const konfirmasi = confirm(`Konfirmasi Pembelian:\n\nProduk: ${namaProduk}\nHarga: Rp ${hargaProduk}\nNomor Tujuan: ${nomorHp}\n\nLanjutkan?`);
    
    if (konfirmasi) {
        alert("Transaksi berhasil diproses!");
    }
}

// ==========================================
// JALANKAN SAAT HALAMAN DIBUKA
// ==========================================
tampilkanProduk(providerAktif);