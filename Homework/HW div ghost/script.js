const textField = document.getElementById("textField");
const sidebar = document.getElementById("sidebar");

textField.addEventListener("focus", function() {
  sidebar.style.display = "block";
});

textField.addEventListener("blur", function() {
  sidebar.style.display = "none";
});