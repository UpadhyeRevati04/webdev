const quotes = {
    happy: ["Happiness depends upon ourselves.", "Smile, and the world smiles with you!", "Enjoy the little things in life."],
    sad: ["This too shall pass.", "Tough times don’t last, but tough people do.", "It's okay to not be okay."],
    motivated: ["Dream big and dare to fail.", "Push yourself, because no one else will.", "Success is not final, failure is not fatal."],
    love: ["Love is the bridge between you and everything.", "The best thing to hold onto in life is each other.", "Love all, trust a few, do wrong to none."],
    angry: ["For every minute you remain angry, you give up sixty seconds of peace.", "Anger is one letter short of danger.", "Keep your temper. A decision made in anger is never sound."],
    calm: ["Calm mind brings inner strength and self-confidence.", "Silence isn’t empty, it’s full of answers.", "The more tranquil a man becomes, the greater is his success."]
};

function generateQuote(mood) {
    const randomIndex = Math.floor(Math.random() * quotes[mood].length);
    const quote = quotes[mood][randomIndex];
    typeText(quote);

    const colors = {
        happy: '#FFFACD',    // LemonChiffon
        sad: '#B0E0E6',      // PowderBlue
        motivated: '#FF4500',// OrangeRed
        love: '#FFC0CB',     // Pink
        angry: '#FF6347',    // Tomato
        calm: '#98FB98'      // PaleGreen
    };

    document.body.style.background = colors[mood];
    document.body.style.color = mood === 'sad' || mood === 'angry' ? 'navy' : 'black';
}

// 🎯 Typing effect function
function typeText(text) {
    let index = 0;
    const quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = ""; // Clear previous quote

    function typeLetter() {
        if (index < text.length) {
            quoteElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeLetter, 50); // Adjust speed (lower is faster)
        }
    }

    typeLetter();
}
