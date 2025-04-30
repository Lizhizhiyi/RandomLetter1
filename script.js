document.addEventListener('DOMContentLoaded', () => {
    const letterDisplay = document.getElementById('letterDisplay');
    const generateBtn = document.getElementById('generateBtn');

    function generateRandomLetter() {
        // 生成 A-Z 的随机字母
        const randomCharCode = Math.floor(Math.random() * 26) + 65;
        return String.fromCharCode(randomCharCode);
    }

    function animateLetter() {
        letterDisplay.style.transform = 'scale(0.8)';
        letterDisplay.style.opacity = '0.5';
        
        setTimeout(() => {
            letterDisplay.textContent = generateRandomLetter();
            letterDisplay.style.transform = 'scale(1)';
            letterDisplay.style.opacity = '1';
        }, 200);
    }

    generateBtn.addEventListener('click', animateLetter);
}); 