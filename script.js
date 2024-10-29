const messages = [
    { idiom: "The early bird catches the worm.", description: "Starting early can lead to success." },
    { idiom: "A penny saved is a penny earned.", description: "Saving money is as valuable as earning it." },
    { idiom: "Actions speak louder than words.", description: "What people do is more important than what they say." },
    { idiom: "Beauty is in the eye of the beholder.", description: "Perception of beauty varies from person to person." },
    { idiom: "When in Rome, do as the Romans do.", description: "Adapt to the customs of the place you’re in." },
    { idiom: "Fortune favors the bold.", description: "Take risks to increase your chances of success." },
    { idiom: "Time flies when you’re having fun.", description: "Time seems to pass quickly when you're enjoying yourself." },
    { idiom: "The grass is always greener on the other side.", description: "Other situations often seem better than our own." },
    { idiom: "Barking up the wrong tree.", description: "To pursue the wrong course of action." },
    { idiom: "The pen is mightier than the sword.", description: "Words and ideas are more powerful than violence." },
    { idiom: "A picture is worth a thousand words.", description: "Visuals can convey ideas more effectively than words." },
    { idiom: "Don't count your chickens before they hatch.", description: "Don’t assume the outcome before it happens." },
    { idiom: "Curiosity killed the cat.", description: "Being too curious can lead to trouble." },
    { idiom: "Don't put all your eggs in one basket.", description: "Avoid risking everything on a single venture." },
    { idiom: "Every cloud has a silver lining.", description: "There’s something positive in every negative situation." },
    { idiom: "Hit the nail on the head.", description: "To describe exactly what is causing a situation." },
    { idiom: "You can't judge a book by its cover.", description: "Don’t judge based on appearances alone." },
    { idiom: "Better late than never.", description: "It’s better to do something late than not at all." },
    { idiom: "Don't bite the hand that feeds you.", description: "Don’t harm someone who is helping you." },
    { idiom: "Rome wasn't built in a day.", description: "Important things take time to accomplish." },
    { idiom: "Out of sight, out of mind.", description: "When something is not visible, it’s easy to forget." },
    { idiom: "The ball is in your court.", description: "It’s your decision or responsibility to act." },
    { idiom: "When the going gets tough, the tough get going.", description: "Strong people get moving in difficult times." },
    { idiom: "Two heads are better than one.", description: "Teamwork can lead to better results." },
    { idiom: "The best of both worlds.", description: "A situation that has the benefits of two things." },
    { idiom: "Keep your friends close and your enemies closer.", description: "Keep your enemies under careful watch." },
    { idiom: "Once bitten, twice shy.", description: "After a bad experience, one becomes cautious." },
    { idiom: "Birds of a feather flock together.", description: "People with similar interests stick together." },
    { idiom: "A chain is only as strong as its weakest link.", description: "The strength of a group depends on its weakest member." },
    { idiom: "Absence makes the heart grow fonder.", description: "Being apart makes you miss each other." }
];

// Function to generate a random message
function generateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];
    
    document.getElementById("idiomDisplay").innerText = randomMessage.idiom;
    document.getElementById("descriptionDisplay").innerText = randomMessage.description;
}

// Event listener for the button
document.getElementById("generateButton").addEventListener("click", generateMessage);
