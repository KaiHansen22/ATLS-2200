function moveFocus(element, index) {
    if (element.value.length === 1) {
        if (index < 10) {
            document.getElementById(`digit${index + 1}`).focus();
        }
        if (index === 6) {
            reverseFirstSix();
        }
    }
}

function reverseFirstSix() {
    let digits = [];
    for (let i = 1; i <= 6; i++) {
        digits.push(document.getElementById(`digit${i}`).value);
    }
    digits.reverse();
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`digit${i}`).value = digits[i - 1];
    }
}

function shuffleDigits() {
    let digits = [];
    for (let i = 1; i <= 10; i++) {
        digits.push(document.getElementById(`digit${i}`).value);
    }
    digits = shuffleArray(digits);
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`digit${i}`).value = digits[i - 1];
    }
    alert("Digits shuffled! Try again.");
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
