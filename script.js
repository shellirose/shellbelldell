// Array of words to cycle through
const words = ["Illustrator", "Animator", "Content Creator"];
const typingTextElement = document.querySelector(".typing-text"); // Target the typing-text span
let wordIndex = 0; // Current word index
let charIndex = 0; // Current character index
let isDeleting = false; // Flag to indicate typing or deleting
const typingSpeed = 150; // Speed of typing (ms)
const deletingSpeed = 100; // Speed of deleting (ms)
const delayBetweenWords = 2000; // Delay between words (ms)

// Function to type and delete characters
function typeEffect() {
    const currentWord = words[wordIndex]; // Get the current word

    if (isDeleting) {
        // Remove a character
        typingTextElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        // Add a character
        typingTextElement.textContent = currentWord.substring(0, charIndex++);
    }

    // Determine whether to switch between typing and deleting
    if (!isDeleting && charIndex === currentWord.length) {
        // Pause before deleting
        setTimeout(() => (isDeleting = true), delayBetweenWords);
    } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Cycle to the next word
    }

    // Recursive call to continue the typing effect
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeEffect, speed);
}

// Start the typing effect
typeEffect();