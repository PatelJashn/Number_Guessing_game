let running = true;
let max = 100;
let min = 0;
const chosennumb = Math.floor(Math.random() * (max - min + 1) + min);
tries = 0
while (running) {
    let num = window.prompt("Enter the number");
    
    if (num > 100 || num < 0) {
        window.alert("Only enter number from 1 to 100");
    } else if (isNaN(num)) {
        window.alert("This isnt a Number");
    } else {
        tries++
        num = Number(num);
        
        if (num > chosennumb) {
            window.alert("Number is too big");
        } else if (num < chosennumb) {  
            window.alert("Number is too small");
        } else {
            window.alert(`You have chosen correct number and you took ${tries} tries`);
            running = false;
        }
    }
}
