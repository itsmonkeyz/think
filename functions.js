const panels = document.querySelectorAll('.panel');
const audio = document.getElementById('audio');

panels.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        const musicPath = panel.getAttribute('data-music');
        audio.src = musicPath;
        audio.play();
        panel.classList.add('active');
    });
    panel.addEventListener('mouseleave', () => {
        audio.pause();
        audio.currentTime = 0;
        panel.classList.remove('active');
    });
});
