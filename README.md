<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estimasi Produksi</title>
    <script>
        function estimasiProduksi() {
            // Target produksi
            const targetBesekBesar = 10;
            const targetBesekKecil = 10;

            // Asumsi produksi besek kecil dari satu besek besar
            const besekKecilPerBesekBesar = 2;

            // Estimasi produksi besek besar
            const jumlahBesekBesar = targetBesekBesar;

            // Estimasi produksi besek kecil
            const jumlahBesekKecil = targetBesekKecil * besekKecilPerBesekBesar;

            // Output hasil estimasi
            document.getElementById('hasilEstimasi').innerHTML = `
                <div>
                    <p>Dalam 1 jam, estimasi produksi:</p>
                    <ul>
                        <li>Besek Besar: ${jumlahBesekBesar} buah</li>
                        <img src="besek_besar.jpg" alt="Besek Besar" width="200">
                        <li>Besek Kecil: ${jumlahBesekKecil} buah</li>
                        <img src="besek_kecil.jpg" alt="Besek Kecil" width="200">
                    </ul>
                </div>
            `;
        }
    </script>
</head>
<body>
    <h2>Estimasi Produksi Besek</h2>
    <button onclick="estimasiProduksi()">Hitung Estimasi</button>
    <div id="hasilEstimasi"></div>

</section>
<script src="main.js"></script>
<button onclick="goBack()">Kembali</button>

<script>
    function goBack() {
        window.history.back();
    }
</script>

</body>
</html>
