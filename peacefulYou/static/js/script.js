// JavaScript for showing/hiding preferences based on button clicks
const musicButton = document.getElementById("music-button");
const podcastButton = document.getElementById("podcast-button");
const musicPreferences = document.getElementById("music-preferences");
const podcastPreferences = document.getElementById("podcast-preferences");

// Define the recommendations containers
const musicRecommendations = document.getElementById("music-recommendations");
const podcastRecommendations = document.getElementById("podcast-recommendations");

musicButton.addEventListener("click", () => {
    generateRandomMusicRecommendations();
    musicRecommendations.style.display = "block";
    podcastRecommendations.style.display = "none";
});

podcastButton.addEventListener("click", () => {
    generateRandomPodcastRecommendations();
    musicRecommendations.style.display = "none";
    podcastRecommendations.style.display = "block";
});

// Function to generate random music recommendations
function generateRandomMusicRecommendations() {
    const musicList = document.getElementById("music-list");
    musicList.innerHTML = ""; // Clear previous recommendations

    // Replace this with your music recommendations
    const musicRecommendations = [
        { name: "Love You Zindagi (Dear Zindagi)", url: "./static/js/audio/Love You Zindagi (Dear Zindagi) 128 Kbps.mp3" },
        { name: "Buddhu-Sa-Mann", url: "./static/js/audio/Buddhu-Sa-Mann(PaglaSongs).mp3" },
        { name: "Matargashti (Tamasha)", url: "./static/js/audio/Matargashti (Tamasha)_64-(PagalWorld.Ink).mp3" },
        { name: "Gallan Goodiyaan", url: "./static/js/audio/Gallan Goodiyaan.mp3" },
        { name: "Sham (Aisha)", url: "./static/js/audio/Sham (Aisha).mp3" },
        { name: "Slow Motion Angreza - Bhaag Milkha Bhaag", url: "./static/js/audio/Slow Motion Angreza - Bhaag Milkha Bhaag 128 Kbps.mp3" },
        { name: "Taake Jhanke (Queen)", url: "./static/js/audio/Taake Jhanke (Queen)_64-(PagalWorld.Ink).mp3" },
        { name: "Tu-Hi-Hai-Aashiqui", url: "./static/js/audio/Tu-Hi-Hai-Aashiqui(PaglaSongs).mp3" },
        { name: "Tum Hi Ho Bandhu (Cocktail)", url: "./static/js/audio/Tum Hi Ho Bandhu (Cocktail)_64-(PagalWorld.Ink).mp3" },
        { name: "Tumse Hi Tumse", url: "./static/js/audio/Tumse Hi Tumse_320(PagalWorld.com.pe).mp3" },
        { name: "Mera Mann Kehne Laga", url: "podcast2.mp3" },
        { name: "Ek Zindagi", url: "podcast3.mp3" },
    ];

    // Shuffle the recommendations to make them random
    shuffleArray(musicRecommendations);

    // Display the first three music recommendations
    for (let i = 0; i < 3; i++) {
        const recommendation = musicRecommendations[i];
        const listItem = document.createElement("li");
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.innerHTML = `<source src="${recommendation.url}" type="audio/mpeg">Your browser does not support the audio element.`;
        const songName = document.createElement("span");
        songName.textContent = recommendation.name;
        // listItem.appendChild(songName);
        listItem.appendChild(audio);
        musicList.appendChild(listItem);
    }
}

// Function to generate random podcast recommendations
function generateRandomPodcastRecommendations() {
    const podcastList = document.getElementById("podcast-list");
    podcastList.innerHTML = ""; // Clear previous recommendations

    // Replace this with your podcast recommendations
    const podcastRecommendations = [
        { name: "Podcast Recommendation 1", url: "podcast1.mp3" },
        { name: "Podcast Recommendation 2", url: "podcast2.mp3" },
        { name: "Podcast Recommendation 3", url: "podcast3.mp3" },
    ];

    // Shuffle the recommendations to make them random
    shuffleArray(podcastRecommendations);

    // Display the first three podcast recommendations
    for (let i = 0; i < 3; i++) {
        const recommendation = podcastRecommendations[i];
        const listItem = document.createElement("li");
        const audio = document.createElement("audio");
        audio.controls = true;
        audio.innerHTML = `<source src="${recommendation.url}" type="audio/mpeg">Your browser does not support the audio element.`;
        listItem.appendChild(audio);
        podcastList.appendChild(listItem);
    }
}

// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


        
// JavaScript for generating recommendation links based on user preferences
// You can add this part to generate links dynamically based on preferences.
// JavaScript to display random pop-up messages with a 20-second interval
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

// Example function to get exercise recommendations based on the selected exercise type
function getExerciseRecommendations(exerciseType) {
    // Replace with your actual recommendations for each exercise type
    if (exerciseType === "Meditation") {
        return [
            { name: "Meditation: A simple, fast way to reduce stress", url: "https://www.mayoclinic.org/tests-procedures/meditation/in-depth/meditation/art-20045858" },
            { name: "Mindful Meditation for Anxiety", url: "https://www.mindful.org/mindfulness-meditation-anxiety/" },
            { name: "Box Breathing Techniques and Benefits", url: "https://www.verywellmind.com/the-benefits-and-steps-of-box-breathing-4159900" },
            { name: "How transcendental meditation alters the brain", url: "https://www.medicalnewstoday.com/articles/how-transcendental-meditation-alters-the-brain" },
            { name: "Mantras for Anxiety: 12 Mantras & How They Help", url: "https://www.choosingtherapy.com/mantras-for-anxiety/" },
            { name: "Guided Meditation for Stress Relief, Anxiety (Hindi)", url: "https://www.youtube.com/watch?v=uNiJW0KMwf4" },
        ];
    } else if (exerciseType === "Yoga") {
        return [
            { name: "Yoga for Stress: Breath, Poses, and Meditation to Calm Anxiety", url: "https://www.healthline.com/health/fitness/yoga-for-stress#poses" },
            { name: "Yoga for Stress Management: Best Yoga Poses for Stress Relief", url: "https://www.siddhiyoga.com/yoga/benefits/yoga-for-stress-management" },
            { name: "15 Relaxation Yoga Poses for Stress Relief", url: "https://www.calmsage.com/yoga-poses-to-relieve-stress/" },
            { name: "10 min Morning Yoga For Anxiety & Stress", url: "https://www.youtube.com/watch?v=nusf3ISodRE" },
            { name: "Yoga for stress | Yoga for anxiety | Breath", url: "https://www.youtube.com/watch?v=eqH9Dp8r14A" },
            { name: "Yoga For Anxiety and Stress", url: "https://www.youtube.com/watch?v=hJbRpHZr_d0" },
        ];
    } else if (exerciseType === "Stress Relief") {
        return [
            { name: "Doing What Matters in Times of Stress", url: "https://r.search.yahoo.com/_ylt=AwrKA4PpMj1lshUqmbC7HAx.;_ylu=Y29sbwNzZzMEcG9zAzMEdnRpZAMEc2VjA3Ny/RV=2/RE=1698538345/RO=10/RU=https%3a%2f%2fapps.who.int%2firis%2fbitstream%2fhandle%2f10665%2f331901%2f9789240003910-eng.pdf/RK=2/RS=w5tVDRQre3j21FFpsn0pYmRAR4Q-" },
            { name: "Stress", url: "https://www.who.int/news-room/questions-and-answers/item/stress" },
            { name: "Stress Management", url: "https://jamesclear.com/stress-management" },
            { name: "How to Reduce and Relieve Stress", url: "https://www.helpguide.org/articles/stress/stress-management.htm" },
            { name: "Manage Stress workbook - Purdue University", url: "https://r.search.yahoo.com/_ylt=AwrKA4PiSz1laDQsFDy7HAx.;_ylu=Y29sbwNzZzMEcG9zAzQEdnRpZAMEc2VjA3Ny/RV=2/RE=1698544739/RO=10/RU=https%3a%2f%2fwww.purdue.edu%2frecwell%2fpdf%2fwellness%2fmanage-stress-workbook.pdf/RK=2/RS=AEaewIFC7HBk7x8VE.TCGrCnGPY-" },
            { name: "Stress Worksheets", url: "https://r.search.yahoo.com/_ylt=AwrKA4PiSz1laDQsFzy7HAx.;_ylu=Y29sbwNzZzMEcG9zAzYEdnRpZAMEc2VjA3Ny/RV=2/RE=1698544739/RO=10/RU=https%3a%2f%2fwww.therapistaid.com%2ftherapy-worksheets%2fstress%2fnone/RK=2/RS=4VRvoBYo9TeZE4IWtPAVqw7zrs4-" },
            { name: "Ways to Manage Stress", url: "https://www.webmd.com/balance/stress-management/stress-management" },
        ];
    }else if (exerciseType === "Journaling") {
        return [
            { name: "How to Use Journaling for Stress Relief ", url: "https://psychcentral.com/stress/how-to-begin-journaling-for-stress-relief" },
            { name: "The Benefits of Creating a Journaling Routine", url: "https://www.verywellhealth.com/journaling-7498123" },
            { name: "Bullet Journal ", url: "https://bulletjournal.com/" },
            { name: "Decision Journal", url: "https://hackernoon.com/know-thyself-the-power-of-a-decision-journal-abf00c22b05d" },
            { name: "Mood Journal", url: "https://www.lifehack.org/875824/mood-journal" },
            { name: "The Clear Habit Journal ", url: "https://jamesclear.com/habit-journal" },
        ];
    }else if (exerciseType === "Better Sleep") {
        return [
            { name: "Circadian Rhythms", url: "https://www.nigms.nih.gov/education/fact-sheets/Pages/circadian-rhythms.aspx" },
            { name: "Sleep Regulation with Melatonin", url: "https://news.mit.edu/2005/melatonin" },
            { name: "Blue light has a dark side", url: "https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side" },
            { name: "Get Better Sleep with Blackouts", url: "https://www.youtube.com/watch?v=0O2gpMDUr7o" },
            { name: "Setting the stage for sounder sleep", url: "https://www.health.harvard.edu/staying-healthy/setting-the-stage-for-sounder-sleep" },
            { name: "17 Proven Tips to Sleep Better at Night", url: "https://www.healthline.com/nutrition/17-tips-to-sleep-better#_noHeaderPrefixedContent" },
        ];
    }else if (exerciseType === "Time Management") {
        return [
            { name: "The Commitment Inventory", url: "https://todoist.com/productivity-methods/commitment-inventory" },
            { name: "Pomodoro Technique", url: "https://medium.com/@hectormunozg/complete-guide-to-the-pomodoro-technique-613d05ef60ef" },
            { name: "Tomato-timer", url: "https://www.toptal.com/project-managers/tomato-timer" },
            { name: "Stress Management: Managing Your Time", url: "https://www.healthlinkbc.ca/health-topics/stress-management-managing-your-time" },
            { name: "6 Strategies to Better Manage Your Time", url: "https://www.coursera.org/articles/time-management" },
            { name: "Time Management Is About More Than Life Hacks", url: "https://hbr.org/2020/01/time-management-is-about-more-than-life-hacks" },
            { name: "How To Multiply Your Time", url: "https://www.youtube.com/watch?v=y2X7c9TUQJ8" },
        ];
    }

    return [];
}