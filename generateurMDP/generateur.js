const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase(); 
const dataNumbers = "0123456789";
const dataSymbols = ",;:!?./§&é'(-è_çà]=";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
    // console.log("je genere un mdp"); pour voir si cela fonctionne
    let data = [];
    let password = "";

    if (lowercase.checked){
        data.push(...dataLowercase);
        // le ... permet de casser l'élément pour creer un seul tableau
    }
    if (uppercase.checked) data.push(...dataUppercase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);
    // console.log(data);

    if(data.length === 0){
        alert("Veuillez sélectionner des critères");
        return;
    }

    for (i = 0; i < rangeValue.value; i++){
        password += data[Math.floor(Math.random() * data.length)];
        //console.log(password);
    }

    // afficher le mot de passe sur la page
    passwordOutput.value= password;

    // pour ajouter dans le presspapier
    passwordOutput.select();
    document.execCommand("copy");

    generateButton.textContent = "Copié dans le presse-papier!";
    
    setTimeout (()=>{
        generateButton.textContent = "Générer le mot de passe";
    },2000);

}

generateButton.addEventListener("click", generatePassword);

