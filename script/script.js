document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("feedbackForm");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const rating = document.querySelector('input[name="rate"]:checked').value;

    const idResponse = document.getElementById("response");
    const idRating = document.getElementById("rating");
    const rateSelected = document.getElementById("rateSelected");

    idResponse.classList.remove("sleep");
    idRating.classList.add("sleep");
    rateSelected.innerHTML = rating;
  });
});
