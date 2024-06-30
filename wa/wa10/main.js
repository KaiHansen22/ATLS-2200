document.getElementById('generate').addEventListener('click', generateStory);

function generateStory() {
    const storyText = 'It was a sunny day, and NAME decided to visit the local zoo. There, they encountered a talking parrot that shared some hilarious jokes! The jokes were very  ';
    let newStory = storyText;
    const name = document.getElementById('customname').value;
    const adjective = document.getElementById('customadjective').value;

    if(name !== '') {
        newStory = newStory.replace('NAME', name);
        newStory = newStory.replace('ADJECTIVE', adjective);
    } else {
        newStory = newStory.replace('NAME', 'Bob');
    }

    document.getElementById('story').textContent = newStory;
    document.getElementById('story').style.visibility = 'visible';
}
