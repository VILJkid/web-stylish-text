const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomText(targetText, iterations) {
    const newText = targetText
        .split("")
        .map((_, index) =>
            index < iterations
                ? targetText[index]
                : letters[Math.floor(Math.random() * 26)]
        )
        .join("");
    return newText
}

function animateText(text) {
    const targetText = text.textContent;
    let iterations = 0;

    const interval = setInterval(() => {
        const newText = randomText(targetText, iterations);
        text.textContent = newText

        if (iterations >= targetText.length) {
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, 50);
}

function onWindowLoad(text) {
    window.onload = () => {
        setTimeout(() => {
            text.style.opacity = 1;
        }, 700);
        setTimeout(() => {
            animateText(text);
        }, 750);
    };
}

function animateRandomText(selector) {
    const text = document.querySelector(selector);
    onWindowLoad(text)
}

animateRandomText(".random-text")