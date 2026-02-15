const chiBtn = document.querySelector('#chiBtn');
const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function() {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
});

noBtn.addEventListener('click', function() {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
});

chiBtn.addEventListener('mouseover', function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

chiBtn.addEventListener('click', function() {
    alert('Me alegra que hayas dicho sí! Feliz San Valentin!');
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
});