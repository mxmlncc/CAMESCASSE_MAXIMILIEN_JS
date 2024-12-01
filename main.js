const toggleButton = document.getElementById('theme-toggle');
    const header = document.querySelector('.header');
    const colonne = document.querySelector('.colonne');
    const footer = document.querySelector('footer');

    toggleButton.addEventListener('click', () => {
        header.classList.toggle('light-mode');
        colonne.classList.toggle('light-mode');
        footer.classList.toggle('light-mode');
    });










    document.getElementById("submit").addEventListener("click", () => {
        const pseudo = document.getElementById("pseudo");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirm-password");
        const conditions = document.getElementById("conditions");
    
        let valid = true;
    
        if (pseudo.value.length < 6) {
            document.getElementById("pseudo-error").textContent = "Le pseudo doit comporter au moins 6 caractères.";
            valid = false;
        } else {
            document.getElementById("pseudo-error").textContent = "";
        }
    
        if (!email.checkValidity()) {
            document.getElementById("email-error").textContent = "Veuillez entrer un email valide.";
            valid = false;
        } else {
            document.getElementById("email-error").textContent = "";
        }
    
        if (password.value.length < 8) {
            document.getElementById("password-error").textContent =
                "Le mot de passe doit comporter au moins 8 caractères.";
            valid = false;
        } else {
            document.getElementById("password-error").textContent = "";
        }
    
        if (password.value !== confirmPassword.value || confirmPassword.value === "") {
            document.getElementById("confirm-password-error").textContent = "Les mots de passe ne correspondent pas.";
            valid = false;
        } else {
            document.getElementById("confirm-password-error").textContent = "";
        }
    
        if (!conditions.checked) {
            document.getElementById("conditions-error").textContent = "Vous devez accepter les conditions";
            valid = false;
        } else {
            document.getElementById("conditions-error").textContent = "";
        }
    
        if (valid) {
            alert("Formulaire validé !");
        } else {
            alert("Veuillez corriger les erreurs.");
        }
    });
    