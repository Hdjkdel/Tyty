// Eğer hideButton öğesi varsa, onun için event listener ekleyelim
let hideButton = document.getElementById("hideButton");
if (hideButton) {
    hideButton.addEventListener("click", function () {
        let walletInput = document.getElementById("walletAddress");
        if (walletInput) {
            if (walletInput.type === "text") {
                walletInput.type = "password";
                this.textContent = "✅";
            } else {
                walletInput.type = "text";
                this.textContent = "❌";
            }
        }
    });
}

// Withdraw butonu için event listener
document.getElementById("withdrawBtn").addEventListener("click", function () {
    // "input-text" ID'sini kullanıyoruz, çünkü HTML'de bu öğe mevcut
    let walletAddress = document.getElementById("input-text").value;
    
    if (walletAddress.trim() === "") {
        alert("Lütfen cüzdan adresinizi girin!");
        return;
    }

    let overlay = document.getElementById("overlay");
    let warningImage = document.getElementById("warning-image");

    // İşlem başlamadan önce overlay (GIF) gösteriliyor
    overlay.style.display = "flex";

    // 3 saniye sonra overlay gizlenip, uyarı resmi gösteriliyor
    setTimeout(() => {
        overlay.style.display = "none";
        warningImage.style.display = "block";

        // 2 saniye sonra uyarı resmi gizlenip bakiyeler sıfırlanıyor
        setTimeout(() => {
            warningImage.style.display = "none";

            // Sayfadaki tüm bakiyeleri temsil eden .card span öğelerini sıfırlıyoruz
            let balances = document.querySelectorAll(".card span");
            balances.forEach(balance => {
                balance.textContent = "0.00";
            });
        }, 2000);
    }, 3000);
});