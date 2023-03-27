// Get Buttons
const add = document.getElementById('add');
const remove = document.getElementById('remove');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const dely = document.getElementById('dely');
const output = document.getElementById('output');

//Get Audio Tags
const no1 = document.querySelector('#no1');
const no2 = document.querySelector('#no2');
const no3 = document.querySelector('#no3');

const p = document.querySelector('p');

// Start Works
let count = 0;
add.onclick = () => {   
    output.innerHTML = count
    no1.play()
    if(count<10){
        count++
        output.innerHTML = count
        p.innerHTML = 'Add okey done'
        p.style.color = 'pink'
    }else{
        count = 10
        p.innerHTML = 'Add Limit over'
        p.style.color = 'red'
    }
}

remove.onclick = () => {
    if(count> 0){
        count--
        output.innerHTML = count
        no2.play()
        p.innerHTML = 'Remove okey'
        p.style.color = 'green'
    }else{
        count = 0
        p.innerHTML = 'Remove Limit over'
        p.style.color = 'black'
    }

}

let counting = '';
start.onclick = () => {
    clearInterval(counting)
    counting = setInterval(()=> {
        count++
        output.innerHTML = count
        no1.play()
        p.innerHTML = 'Countdown Start successfull'
        if(count==10){
            clearInterval(counting)
            no3.play()
            p.innerHTML = 'Alerm tik tik. Please reset browser. Then stop it'
        }
    },1000)
}

stop.onclick = () => {
    clearInterval(counting)
    p.innerHTML = 'Countdown stoped'
}

reset.onclick = () => {
    clearInterval(counting)
    count = 0
    output.innerHTML = count
    no2.play()
    p.innerHTML = 'Reset Done'
}

dely.onclick = () => {
    p.innerHTML = 'Please wait 5 second...'
    p.style.color = '#000'
    setTimeout(() => {
        count++
        output.innerHTML = count
        no1.play()
        p.innerHTML = 'Ok done. Thanks for waiteing.'
        p.style.color = '#000'
    }, 5000)
}