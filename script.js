const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

let num = false;
const data1 = '630612105 PANTHON KANSAP';
const data2 = '630612105'

btn_toggle.onclick = () => { // BOTTON CHANGE STUDENT ID & NAME
    if (num == false) {
        const number = 630612105;
        const numberInput = parseInt(length.value);
        const numberShow = number + numberInput; // NAME + STUDENT ID
        author.innerHTML = numberShow;
        btn_toggle.innerHTML = 'Show Author'
        num = true; //CHANGE NUM
    } else if (num == true) {
        author.innerHTML = '630612105 PANTHON KANSAP'
        btn_toggle.innerHTML = 'Show Calculation'
        num = false;
    }
}


const btsearch = document.getElementById('search')
const text = document.querySelector('#text')
btsearch.onclick = () => {
    text.innerHTML = highlight() // CALL FUNCTION
}

const btreset = document.querySelector('#reset')
btreset.onclick = () => {
    text.innerHTML = reset() // CALL FUNCTION
}

function highlight() {
    let output = "";
    const data = text.textContent.split(" ");
    let replace = "";
    for (let i = 0; i < data.length; i++) {
        let word = data[i];
        if (word.length > length.value) {
            replace = "<span style='color:" + color.value + "'>" + word + "</span>"

        } else {
            replace = word;
        }
        output = output + " " + replace + " ";
    }
    return output
}

function reset() {
    let output = "";
    const data = text.textContent.split(" ");
    let replace = "";
    for (let i = 0; i < data.length; i++) {
        let word = data[i];
        if (word.length > length.value) {
            replace = "<span style='color:#000'>" + word + "</span>"
        } else {
            replace = word;
        }
        output = output + " " + replace + " ";
    }
    return output
}