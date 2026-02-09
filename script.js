// Function to switch pages
function nextPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the requested page
    const nextPage = document.getElementById(pageId);
    nextPage.classList.add('active');

    // If it's the last page, launch confetti!
    if (pageId === 'page5') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff4d6d', '#ffccd5', '#fff']
        });
    }
}

// Function to move the "No" button
function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.container');
    
    // Calculate random positions within the container
    // We stick to the container so it doesn't fly off screen completely
    const maxWidth = container.clientWidth - noBtn.clientWidth;
    const maxHeight = container.clientHeight - noBtn.clientHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    // Apply new positions
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Audio handling
function playMusic() {
    const audio = document.getElementById('bgMusic');
    // Browsers require interaction to play audio
    audio.play().catch(error => {
        console.log("Audio playback failed (usually due to browser settings):", error);
    });
}