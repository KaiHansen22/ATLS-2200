const customName = document.getElementById('customName');
const randomize = document.querySelector('#randomize');
const story = document.querySelector('#story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const storyText = "It was a bright and sunny day, and the temperature was 80 fahrenheit. :insertx: decided it was the perfect day to visit :inserty:. Upon arrival, they couldn't believe their eyes and suddenly :insertz:. Bob was nearby and saw the whole thing, but wasn't shocked — :insertx: always finds themselves in strange situations and weighs 200 pounds, which makes these events even more interesting.";

const insertX = ['Wendy the Witch', 'Sparky the Dragon', 'Captain Awesome'];
const insertY = ['the magical meadow', 'the enchanted forest', 'the secret cave'];
const insertZ = ['disappeared into thin air', 'started to dance crazily', 'turned into a giant cupcake'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem).replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if (customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(200 * 0.0714286) + ' stone';
        const temperature = Math.round((80 - 32) * 5 / 9) + ' centigrade';
        newStory = newStory.replace('200 pounds', weight);
        newStory = newStory.replace('80 fahrenheit', temperature);
    }

    story.textContent = newStory;
}
