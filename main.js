// main.js
document.addEventListener('DOMContentLoaded', function () {
    // Cek apakah pengguna sudah login
    var isUserLoggedIn = false; // Ganti dengan logika login yang sesuai

    // Dapatkan elemen-elemen menu
    var mainMenu = document.getElementById('main-menu');
    var userMenu = document.getElementById('user-menu');

    // Tampilkan atau sembunyikan menu berdasarkan status login
    if (isUserLoggedIn) {
        mainMenu.style.display = 'none';
        userMenu.style.display = 'block';
    } else {
        mainMenu.style.display = 'block';
        userMenu.style.display = 'none';
    }
});

// Fungsi untuk memproses login (ganti dengan logika login yang sesuai)
function performLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Gantilah dengan logika otentikasi yang sesuai, misalnya AJAX ke backend
    // Simpan status login di sesi atau cookie jika login berhasil
    // Tampilkan atau sembunyikan menu berdasarkan status login
    var isLoginSuccessful = true; // Ganti dengan logika login yang sesuai
    if (isLoginSuccessful) {
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('user-menu').style.display = 'block';
    }

    // Fungsi untuk keluar (log out)
function logout() {
    // Lakukan proses logout yang sesuai, seperti membersihkan sesi atau cookie
    // Setelah logout, arahkan pengguna kembali ke halaman login atau halaman utama
    alert('Anda telah keluar.'); // Contoh: tampilkan pesan sederhana
    window.location.href = 'index.html'; // Ganti dengan halaman login atau halaman utama
}

function goBack() {
    window.history.back();
}

}
