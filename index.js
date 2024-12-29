let running = true;
let max = 100;
let min = 0;
const banana = Math.floor(Math.random() * (max - min + 1) + min);
tries = 0
while (running) {
    let poop = window.prompt("Enter the number");
    
    if (poop > 100 || poop < 0) {
        window.alert("u dumbass read");
    } else if (isNaN(poop)) {
        window.alert("This aint a number blud");
    } else {
        tries++
        poop = Number(poop);
        
        if (poop > banana) {
            window.alert("too big blud");
        } else if (poop < banana) {  // Corrected here
            window.alert("too smol blud");
        } else {
            window.alert(`good job blue and you took ${tries} tries`);
            running = false;
        }
    }
}
