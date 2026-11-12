document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function() {
        const productName = this.querySelector('span').innerText;
        
        // Jika yang diklik adalah Tri atau Pulsa, arahkan ke pulsa.html
        if (productName === 'Tri' || productName === 'Pulsa') {
            window.location.href = 'pulsa.html';
        } else {
            alert(`Anda memilih: ${productName}\nFitur transaksi akan segera dibuka.`);
        }
    });
});