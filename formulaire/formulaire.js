const form = document.querySelector("form");
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
let pseudo, email, password, confirmPass;
const progressBar = document.getElementById("progress-bar");

const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector("."+tag+"-container");
    const span = document.querySelector("."+tag+"-container > span");

    if(!valid){
        container.classList.add("error");
        span.textContent = message;
    } else {
        container.classList.remove("error");
        span.textContent = message;
    }
};
//console.log(inputs);
const pseudoChecker = (value) =>{
    

    if(value.length > 0 && (value.length < 3 || value.length > 20)){
        errorDisplay("pseudo", "Le pseudo doit contenir entre 3 et 20 caractères");
        pseudo = null;
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)){
        errorDisplay("pseudo", "Le pseudo ne doit pas contenir de caractères spéciaux");
        pseudo = null;
    } else {
        errorDisplay("pseudo", "", true);
        pseudo = value;
    }
};

const emailChecker = (value) =>{
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)){
        errorDisplay("email", "Le mail n'est pas valide");
        email = null;
    } else {
        errorDisplay("email", "", true);
        email = value;
    }
};

const passwordChecker = (value) => {
    progressBar.classList = "";

    if (!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)){
        errorDisplay("password", "minimum 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et un caractère spécial");
        progressBar.classList.add("progressRed");
        password = null;
    } else if (value.length < 12 ){
        errorDisplay("password", "", true);
        progressBar.classList.add("progressBlue");
        password = value;
    } else {
        progressBar.classList.add("progressGreen");
        errorDisplay("password", "", true);
        password = value;
    }
    if (confirmPass) {
        confirmChecker(confirmPass);
    }
};

const confirmChecker = (value) => {
    if (value !== password){
        errorDisplay("confirm", "Les mots de passe ne sont pas identiques");
        confirmPass = false;
    } else {
        errorDisplay("confirm", "", true);
        confirmPass = true;
    }
};

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        switch(e.target.id){
            case "pseudo":
                //e.target.value => ce qui est tapé dans l'input
                pseudoChecker(e.target.value);
                break;
            case "email":
                emailChecker(e.target.value);
                break;
            case "password":
                passwordChecker(e.target.value);
                break;
            case "confirm":
                confirmChecker(e.target.value);
                break;  
            default:
                null;      
        }
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(pseudo && email && password && confirmPass){
        const data = {
            pseudo,
            email,
            password
        };
        console.log(data);
        alert("Inscription validée");

        inputs.forEach((input) => (input.value = ""));
        progressBar.classList = "";

        pseudo = null;
        email = null;
        password = null;
        confirmPass = null;
    } else {
        console.log(pseudo);
        console.log(email);
        console.log(password);
        console.log(confirmPass);
        alert("Veuillez remplir correctement le formulaire");
    }
})