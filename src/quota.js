// quota
document
  .getElementById("quota-donate-now")
  .addEventListener("click", function () {
    const quotaInputamount = getInputAmount("quota-input-amount");
    const auotaCurrentAmount = getTextAmount("quota-donate-amount");

    const mainBalance = getTextAmount("main-balance");

    if (
      quotaInputamount > mainBalance ||
      mainBalance < quotaInputamount ||
      quotaInputamount < 0 ||
      isNaN(quotaInputamount)
    ) {
      return alert("Invalid $Amount");
    } else {
      document.getElementById("quota-donate-amount").innerText =
        auotaCurrentAmount + quotaInputamount;
      Swal.fire({
        background: "#ffffff",
        color: "#11111",
        title: "Thank you",
        icon: "success",
        text: "You Have Donated For Humankind",
      });
      document.getElementById("main-balance").innerText =
        mainBalance - quotaInputamount;

      donaTionHistory(
        quotaInputamount,
        "Aid for Injured in the Quota Movement"
      );
      document.getElementById("history-message").style.display = "none";
    }
  });
