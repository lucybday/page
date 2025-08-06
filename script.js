document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded"); 

    setTimeout(() => {
        console.log("Timeout executed");
        document.getElementById('loading').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        playBirthdaySound();
    }, 3000);
});