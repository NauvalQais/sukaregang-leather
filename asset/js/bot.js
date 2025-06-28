document.getElementById("openChatbot").addEventListener("click", function () {
    const chatbox = document.getElementById("chatbox");
    const chatboxAnswer = document.getElementById("chatboxAnswer");
  
    if (chatbox.style.display === "flex") {
      chatbox.style.display = "none";
      chatbox.classList.remove("show");
      chatboxAnswer.innerHTML = "";
    } else {
      chatbox.style.display = "flex";
      chatbox.classList.remove("show");
      setTimeout(() => {
        chatbox.classList.add("show");
      }, 10);
    }
  });
  
  
  function balas(pertanyaan) {
    const chatboxAnswer = document.getElementById("chatboxAnswer");
    let pertanyaanText = "";
    let jawaban = "";
  
    if (pertanyaan === "harga") {
      pertanyaanText = "📦 Berapa harga produknya?";
      jawaban = "💬 Harga produk mulai dari Rp50.000 hingga Rp500.000 tergantung jenis dan modelnya ya, Kak.";
    } else if (pertanyaan === "sepatu") {
      pertanyaanText = "👞 Ada model sepatu terbaru?";
      jawaban = "💬 Ada dong! Model sepatu terbaru kami bisa Kakak cek di menu koleksi sepatu.";
    } else if (pertanyaan === "custom") {
      pertanyaanText = "🎨 Bisa pesan custom?";
      jawaban = "💬 Bisa banget, Kak! Kirim aja desain atau request-nya, nanti kami bantu proseskan. Design Bisa di Dirim Ke No Ini Ya Kak 08xxxxxxxx";
    } else if (pertanyaan === "kirim") {
      pertanyaanText = "🚚 Berapa lama proses kirimnya?";
      jawaban = "💬 Proses produksi 1–3 hari, pengiriman ke Jabodetabek 1–2 hari, luar kota menyesuaikan.";
    }
  
   
    const userBubble = document.createElement("div");
    userBubble.className = "bubble-user";
    userBubble.textContent = pertanyaanText;
    chatboxAnswer.appendChild(userBubble);
  
    
    const botBubble = document.createElement("div");
    botBubble.className = "bubble-bot";
    botBubble.textContent = jawaban;
    chatboxAnswer.appendChild(botBubble);
  
    chatboxAnswer.scrollTop = chatboxAnswer.scrollHeight;
  }