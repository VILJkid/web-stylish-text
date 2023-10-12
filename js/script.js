const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const text = document.querySelector("h1");

function animateText() {
    const targetText = text.textContent;
    let iterations = 0;

    const interval = setInterval(() => {
        const newText = targetText
            .split("")
            .map((_, index) =>
                index < iterations
                    ? targetText[index]
                    : letters[Math.floor(Math.random() * 26)]
            )
            .join("");

        text.textContent = newText;

        if (iterations >= targetText.length) {
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, 50);
}

window.onload = () => {
    setTimeout(() => {
        text.style.opacity = 1;
    }, 700);
    setTimeout(() => {
        animateText();
    }, 750);
};
