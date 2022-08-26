console.log("Moodle+ successfully loaded!");




















function solver3(z){
    let ans = 0;
    if(words[z+1] === 'subtract'){
        ans = parseInt(words[z+2]) - parseInt(words[z+4])
    }
    
    if(words[z+1] === 'add'){
        ans = parseInt(words[z+2]) + parseInt(words[z+4])
    }

    if(words[z+1] === 'enter'){
        if(words[z+2] === "first"){
            ans = parseInt(words[z+4])
        }
        if(words[z+2] === "second"){
            ans = parseInt(words[z+6])
        }
        
    }



return ans;
}











const login_element = document.querySelector("body"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

const words = login_text.split(' ')
let z = words.indexOf('username\nPlease')

ans = solver3(z)

let answer = ans; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
