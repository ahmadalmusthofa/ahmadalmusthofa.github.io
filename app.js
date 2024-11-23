src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
integrity =
  "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
crossorigin = "anonymous";

// Array untuk menyimpan data kontak
const contactMessages = [];
// Fungsi untuk memperbarui tampilan daftar pesan
function updateMessagesList() {
  const messagesList = document.getElementById("messagesList");
  messagesList.innerHTML = ""; // Bersihkan daftar lama

  // Tampilkan setiap pesan dalam daftar
  contactMessages.forEach((message, index) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerHTML = `
  <strong>${index + 1}. ${message.name}</strong> 
  (${message.email}): <em>${message.message}</em>
`;
    messagesList.appendChild(listItem);
  });
}

// Event Listener untuk menangani submit formulir
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman

  // Ambil nilai dari input pengguna
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("pesan").value.trim();

  // Validasi input
  if (!name || !email || !message) {
    alert("Harap isi semua field dengan benar!");
    return;
  }

  // Tambahkan data ke array
  contactMessages.push({ name, email, message });

  // Reset form
  this.reset();

  // Perbarui tampilan daftar pesan
  updateMessagesList();

  // Tampilkan pesan sukses
  alert("Pesan berhasil dikirim dan ditampilkan!");
});
