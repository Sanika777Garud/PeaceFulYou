const popupMessage = document.getElementById("popup-message");

const messages = [
    "Do what you can, with what you have, where you are.",
    "Don't count the days make the days count.",
    "If plan A doesn't work, there are 25 more letters in the alphabet!",
    "Believe you can and you're halfway there.",
    "Negativity is like a collect call, you don't have to accept it.",
    "Small changes can make a difference.",
    "Mistakes are proof that you are trying.",
    "A calm mind brings inner strength and self-confidence, so that’s very important for good health.",
    "Don’t worry about failures. Worry about the chances you miss when you don’t even try.",
    "Every day is a second chance.",
    "I can accept failure. Everyone fails at something. But I cannot accept not trying.",
    "Try to be a rainbow in someone’s cloud.",
    "Be the reason someone smiles today.",
    "Too many of us are not living our dreams because we are living our fears.",
    "I am stronger than I think I am.",
    "I can handle difficult things.",
    "I am safe where I am.",
    "I am loved and can be loving.",
    "There's nothing that can stop me.",
    "I can train my brain for the better.",
    "I am enough.",
    "There will be bad days, and good days.",
    "I can't control the future.",
    "The future is uncertain, and I love that.",
    "I will keep walking until a new path opens up.",
    "I am in control of my emotions.",
    "Worry does nothing to help the situation..",
    "Sometimes the most productive thing you can do is relax.",
    "Almost everything will work again if you unplug it for a few minutes…Including you.",
    "Of all the things that matter, that really and truly matter, working more efficiently and getting more done, is not one of them.",
    "The key is not to prioritize what’s on your schedule, but to schedule your priorities.",
    "You can do anything—but not everything.",
    "Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.",
    "It’s not stress that kills us, it is our reaction to it.",
    "It's a good idea always to do something relaxing prior to making an important decision in your life.",
    "Nothing can bring you peace but yourself.",

    // Add more messages here
];

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function displayRandomPopup() {
    popupMessage.innerText = getRandomMessage();
    popupMessage.style.display = "block";

    setTimeout(() => {
        popupMessage.style.display = "none";
        setTimeout(displayRandomPopup, 0); // 20 seconds interval
    }, 10000); // Display each message for 5 seconds
}

displayRandomPopup(); // Start displaying random pop-ups
    // JavaScript for showing exercise recommendations based on user preferences
    const exerciseTypeSelect = document.getElementById("exercise-type");
    const getRecommendationsButton = document.getElementById("get-recommendations");
    const exerciseRecommendations = document.getElementById("exercise-recommendations");
    const recommendationList = document.getElementById("recommendation-list");

    getRecommendationsButton.addEventListener("click", () => {
        const selectedExerciseType = exerciseTypeSelect.value;

        // You should replace this with actual recommendations for each exercise type
        const recommendations = getExerciseRecommendations(selectedExerciseType);

        // Clear previous recommendations
        recommendationList.innerHTML = "";

        // Display new recommendations as links
        recommendations.forEach((recommendation) => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = recommendation.url; // Set the URL of the recommendation
            link.textContent = recommendation.name; // Set the name of the recommendation
            listItem.appendChild(link);
            recommendationList.appendChild(listItem);
        });

        exerciseRecommendations.style.display = "block";
    });