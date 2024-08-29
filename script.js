function light(value){
    if(value == true){
        document.getElementById('bulb').src="lampon.png"
    }
    else{
        document.getElementById('bulb').src="lampoff.png"
    }
}

let button = true;

function buttonclick(){
    const toggle = document.getElementById('button');

    if(button){
        button = false
        toggle.textContent = "Turn off"
        document.getElementById('bulb').src="lampon.png"
    }
    else{
        button = true
        toggle.textContent = "Turn on"
        document.getElementById('bulb').src="lampoff.png"
    }
}
