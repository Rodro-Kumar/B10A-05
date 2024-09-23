// Noakhali

document
  .getElementById("noakhali-donate-now")
  .addEventListener("click", function () {
    const inputamount = getInputAmount("noakhali-input");
    const currentAmount = getTextAmount("noakhali-donate-amount");

    const mainBalance = getTextAmount("main-balance");

    if (
      inputamount > mainBalance ||
      mainBalance < inputamount ||
      inputamount < 0 ||
      isNaN(inputamount)
    ) {
      alert("Invalid Amount $");
    } else {
      document.getElementById("noakhali-donate-amount").innerText =
        currentAmount + inputamount;
      Swal.fire({
        background: "#ffffff",
        color: "#11111",
        title: "Thank you",
        icon: "success",
        image: "/assets/coin.png",
        text: "You Have Donated For Humankind",
      });
      document.getElementById("main-balance").innerText =
        mainBalance - inputamount;

      // donation history
      donaTionHistory(inputamount, "Donate for Flood at Noakhali, Bangladesh");
      document.getElementById("history-message").style.display = "none";
    }
  });
