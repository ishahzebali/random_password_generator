let ranFirstPass = document.getElementById("pass-1")
let ranSecondPass = document.querySelector("#pass-2")

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


function generateRandPass() {
    let result = ""
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function assignPass() {
    let pass1 = generateRandPass()
    let pass2 = generateRandPass()

    ranFirstPass.textContent = pass1
    ranSecondPass.textContent = pass2
}

