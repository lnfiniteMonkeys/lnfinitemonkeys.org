window.onload = () => {
    // Create and launch confetti
    const myConfetti = confetti.create(null, {
        resize: true,
        useWorker: true
    });
    
    myConfetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        disableForReducedMotion: true
    }).then(() => {
        // Start the fade-in animation after confetti animation completes
        setTimeout(() => {
            const monkeyImage = document.querySelector('.monkey-image');
            monkeyImage.classList.add('fade-in');
        }, 1500); // Give a small buffer after confetti finishes
    });
};