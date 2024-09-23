document
  .getElementById("donation-page-btn")
  .addEventListener("click", function () {
    document.getElementById("history").style.display = "none";
    document.getElementById("donation-container").style.display = "block";
    document.getElementById("donation-page-btn").classList.add("active");
    document.getElementById("history-page-btn").classList.remove("active");
  });

document
  .getElementById("history-page-btn")
  .addEventListener("click", function () {
    document.getElementById("history").style.display = "block";
    document.getElementById("donation-container").style.display = "none";
    document.getElementById("donation-page-btn").classList.remove("active");
    document.getElementById("history-page-btn").classList.add("active");
  });

if ((document.getElementById("history").style.display = "none")) {
  document.getElementById("donation-page-btn").classList.add("active");
} else {
  document.getElementById("donation-page-btn").classList.remove("active");
  document.getElementById("history-page-btn").classList.add("active");
}
