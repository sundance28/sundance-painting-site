(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var year = document.getElementById("year");
  var form = document.getElementById("estimate-form");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  // Build a mailto body from form fields so the email app gets a readable message.
  // Does not submit to any server.
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = (document.getElementById("name") || {}).value || "";
      var phone = (document.getElementById("phone") || {}).value || "";
      var email = (document.getElementById("email") || {}).value || "";
      var message = (document.getElementById("message") || {}).value || "";

      var body =
        "Name: " + name.trim() +
        "\nPhone: " + phone.trim() +
        "\nEmail: " + email.trim() +
        "\n\nProject details:\n" + message.trim();

      var mailto =
        "mailto:sundancepainting@outlook.com" +
        "?subject=" + encodeURIComponent("Consultation Request from Website") +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
})();
