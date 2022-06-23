const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


let password1 = document.getElementById('password-1')
let password2 = document.getElementById('password-2')
let containerPassword1 = document.getElementById('container-password-1')
let containerPassword2 = document.getElementById('container-password-2')

let checkNumber = document.getElementById('check-Numbers')
let checkSymbol = document.getElementById('check-Symbols')



function getRandomPassword(){

    password1.textContent = ""
    password2.textContent = ""
    let inputNumber = document.getElementById('input-number').value
    if( checkNumber.checked == true){
        characters.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
        for (let i = 0; i <  inputNumber; i++){
            let randomItems1 = Math.floor(Math.random() * characters.length)
            let randomItems2 = Math.floor(Math.random() * characters.length)
            password1.textContent += characters[randomItems1]
            password2.textContent += characters[randomItems2]
        }
    }
    else if(checkSymbol.checked == true){
        characters.push("~","`","!","@","#","$","%",
        "^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/")

        for (let i = 0; i <  inputNumber; i++){
            let randomItems1 = Math.floor(Math.random() * characters.length)
            let randomItems2 = Math.floor(Math.random() * characters.length)
            password1.textContent += characters[randomItems1]
            password2.textContent += characters[randomItems2]
        }
    }
    else{
        for (let i = 0; i <  inputNumber; i++){
            let randomItems1 = Math.floor(Math.random() * characters.length)
            let randomItems2 = Math.floor(Math.random() * characters.length)
            password1.textContent += characters[randomItems1]
            password2.textContent += characters[randomItems2]
        }
    }



}

function copyPassword1() {
    let copyText = password1.textContent
    navigator.clipboard.writeText(copyText)
    if(copyText != ""){
        containerPassword1.style.border = "2px solid #F59E0B"
        containerPassword2.style.border = "none"
    }
}

function copyPassword2() {
    let copyText = password2.textContent
    navigator.clipboard.writeText(copyText)
    if(copyText != ""){
        containerPassword2.style.border = "2px solid #F59E0B"
        containerPassword1.style.border = "none"
    }
    console.log('test');
}
