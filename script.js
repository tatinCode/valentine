document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const questionText = document.querySelector(".question")

    function moveButton() {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    // Move the "No" button when hovered (for desktop)
    noButton.addEventListener("mouseover", moveButton);
    
    //for mobile
    noButton.addEventListener("touchstart", function (event) {
        event.preventDefault(); // Prevents unwanted touch behaviors (like scrolling)
        moveButton();
    });

    function showConfetti() {
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.8 }, // Confetti comes from top
        });

        // Changes the question text
        questionText.textContent = "Will you marry me?";
        
        noButton.style.display = "none";

        let newMessage = `
            <div class="message-box">
                <h2>Sabi ko na eh! 🎉</h2>
                <p>Bukas 4pm appointment natin!</p>
            </div>
        `;
        document.body.insertAdjacentHTML("beforeend", newMessage);
    }

    yesButton.addEventListener("click", showConfetti);
});
