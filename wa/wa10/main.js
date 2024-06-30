const customName = document.getElementById('customName');
const randomize = document.querySelector('#randomize');
const story = document.querySelector('#story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const storyText = "On a chilly day of 45 fahrenheit, :insertx: decided to go for a jog. As they reached :inserty:, they couldn't believe their eyes and suddenly :insertz:. Bob witnessed everything, but was not startled — :insertx: weighs 150 pounds, and it was an unusual sight.";

const insertX = ['Jack the Giant', 'Super Grandma', 'Captain Marvel'];
const insertY = ['the haunted house', 'the spooky forest', 'the mysterious cave'];
const insertZ = ['vanished into thin air', 'started dancing wildly', 'transformed into a frog'];

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
        const weight = Math.round(150 * 0.0714286) + ' stone';
        const temperature = Math.round((45 - 32) * 5 / 9) + ' centigrade';
        newStory = newStory.replace('150 pounds', weight);
        newStory = newStory.replace('45 fahrenheit', temperature);
    }

    story.textContent = newStory;
}
