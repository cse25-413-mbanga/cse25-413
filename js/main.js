// Form validation
var form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var message = document.getElementById("message").value.trim();
        var agree = document.getElementById("agree").checked;
        var msg = document.getElementById("form-message");

        if (name === "" || email === "" || message === "") {
            msg.className = "error";
            msg.textContent = "Please fill in all required fields.";
            return;
        }

        if (!agree) {
            msg.className = "error";
            msg.textContent = "You must agree to be contacted.";
            return;
        }

        msg.className = "success";
        msg.textContent = "Message sent! Mike will be in touch soon.";
        form.reset();
    });
}