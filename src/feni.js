// feni
document
  .getElementById("feni-donate-now")
  .addEventListener("click", function () {
    const feniinputamount = getInputAmount("feni-input-amount");
    const fenicurrentAmount = getTextAmount("feni-donate-amount");

    const mainBalance = getTextAmount("main-balance");

    if (
      feniinputamount > mainBalance ||
      mainBalance < feniinputamount ||
      feniinputamount < 0 ||
      isNaN(feniinputamount)
    ) {
      return alert("Invalid $Amount");
    } else {
      document.getElementById("feni-donate-amount").innerText =
        fenicurrentAmount + feniinputamount;
      Swal.fire({
        background: "#ffffff",
        color: "#11111",
        title: "Thank you",
        icon: "success",
        text: "You Have Donated For Humankind",
      });
      document.getElementById("main-balance").innerText =
        mainBalance - feniinputamount;

      donaTionHistory(
        feniinputamount,
        "Donate for Flood Relief in Feni,Bangladesh"
      );
      document.getElementById("history-message").style.display = "none";
    }
  });
