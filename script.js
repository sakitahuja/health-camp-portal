const registerButtons = document.querySelectorAll(".register-button");

registerButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const campName = button.getAttribute("data-camp");
    alert("Thank you for your interest in " + campName + "! Registration demo only.");
  });
});
