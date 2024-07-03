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
