document.getElementById('generate').addEventListener('click', generateStory);

function generateStory() {
    const storyText = 'It was a sunny day, and NAME decided to visit the local zoo. There, they encountered a talking parrot that shared some hilarious jokes! Everyone around burst into laughter, making it a memorable day for NAME.';
    let newStory = storyText;
    const name = document.getElementById('customname').value;

    if(name !== '') {
        newStory = newStory.replace('NAME', name);
    } else {
        newStory = newStory.replace('NAME', 'Bob');
    }

    document.getElementById('story').textContent = newStory;
    document.getElementById('story').style.visibility = 'visible';
}
