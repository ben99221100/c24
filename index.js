let container = document.getElementById("container")

let words = ["שלום", "ילדה", "כיסא", "עכבר", "יופי", "חטיף", "פיצה"]

let word = words[randomInteger(0, words.length - 1)]

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let count = 0

function guess() {
    let inputElement = document.getElementById("inputId")
    

    if (inputElement.value.length != 4) {
        alert("המילה צריכה להיות 4 אותיות")
        return
    }


    let firstLetter = inputElement.value.charAt(0)
    let secondLetter =  inputElement.value.charAt(1)
    let thirdLetter =  inputElement.value.charAt(2)
    let fourthLetter =  inputElement.value.charAt(3)

    container.innerHTML += `

        <div class="row">
            <div style="background-color: ${getColor(firstLetter, 0)}" class="letter">${firstLetter}</div>
            <div style="background-color: ${getColor(secondLetter, 1)}" class="letter">${secondLetter}</div>
            <div style="background-color: ${getColor(thirdLetter, 2)}" class="letter">${thirdLetter}</div>
            <div style="background-color: ${getColor(fourthLetter, 3)}" class="letter">${fourthLetter}</div>
        </div>
    
    `

    count = count + 1

    if (inputElement.value == word) {
        setTimeout(won, 2000)
    }
    else if (count == 6) {
        setTimeout(lost, 100)
    }

    inputElement.value = ""

}

function won() {
    alert("ניצחת!")
    window.location.reload()
}

function lost() {
    alert("הפסדת! המילה הייתה... " + word)
    window.location.reload()
}


function getColor(letter, position) {

    if (word.charAt(position) == letter) {
        return "green"
    }
    if (word.includes(letter)) {
        return "yellow"
    }
    return "gray"

}

