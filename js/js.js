

const madLibsForm = document.getElementById('madlibs-form');
const storySection = document.getElementById('completed-story');

const submitMadLibs = (event) => {
    //required to prevent the form from reloading on submit
    event.preventDefault();
    madLibsForm.classList.add('hide');

    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form);

    const story = `
        <h3>Your completed story:</h3>
        <p>This morning at 5am my Dad was planning to go to <span class="inserted-text">${userSubmission.place_1}</span> early.  He went to start his <span class="inserted-text">${userSubmission.color_1}</span> <span class="inserted-text">${userSubmission.vehicle_1}</span> and realized that his car key was missing from his keychain. He came back in the house and slammed the door, swearing at this turn of events.  He knew that the key had been there the evening before, but now he couldn’t find it anywhere. It was the <span class="inserted-text">${userSubmission.adjective_1}</span> morning of the oncoming winter season and he was not happy that he would have to walk the route that he walks the <span class="inserted-text">${userSubmission.animal_1}</span> to see if the key was along the route. He cursed the black and white <span class="inserted-text">${userSubmission.animal_2}</span>, who was the beloved family pet. If he hadn’t walked <span class="inserted-text">${userSubmission.pet_name}</span> , his key would likely be on his keychain where it should be. He donned his winter parka, wool hat, winter boots and gloves and set out in the cold, dark morning with the aid of a <span class="inserted-text">${userSubmission.noun_1}</span>. He walked and searched for an hour and came home cold and without the key. Thankfully my <span class="inserted-text">${userSubmission.dropdown_1}</span> didn’t need her car today and she let my Dad take her white Nissan Rogue to work for the day. He will have to call a <span class="inserted-text">${userSubmission.profession}</span> to see if they can <span class="inserted-text">${userSubmission.verb_1}</span> a new key because he never got a spare key cut. That is a decision he is now very regretful over. Surprisingly, he still made it to work on time, although a little grouchy.</p>
    `;

    storySection.innerHTML += story;
    storySection.classList.remove('hide');

    let resetButton = `
        <button id="madlibs-reset" onclick="resetMadLibs()">Play Again</button>
    `;
    storySection.innerHTML += resetButton;
}

const resetMadLibs = () => {
    storySection.classList.add('hide');
    storySection.innerHTML = '';
    madLibsForm.reset();
    madLibsForm.classList.remove('hide');
}