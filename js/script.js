document.addEventListener("DOMContentLoaded", () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const h1 = document.querySelector("h1");

    function animateText() {
        const targetText = h1.dataset.value;
        let iterations = 0;

        const interval = setInterval(() => {
            h1.textContent = targetText
                .split("")
                .map((_, index) =>
                    index < iterations
                        ? targetText[index]
                        : letters[Math.floor(Math.random() * 26)]
                )
                .join("");

            if (iterations >= targetText.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);
    }

    animateText(); // Start the animation on page load
});
