let give_input = document.getElementById('give');
let take_input = document.getElementById('take');

let app_button_process = document.getElementById('process');


app_button_process.addEventListener('click', ()=>{
    
    

    
    
    if(!Number(take_input.value) && !Number(give_input.value)) {
        alert('من فضلك أدخـــل رقم وليس حرف!!')
    } else {
        if(give_input.value) {
            take_input.value = Math.floor((Number(give_input.value) * 7) / 10)
        }
        else if(take_input.value) {
            give_input.value = Math.ceil((Number(take_input.value) * 10) / 7)
        }
    }


})