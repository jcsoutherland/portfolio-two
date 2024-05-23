const normalizeScreen = (val, max, min) => (val - min) / (max - min); 
const handleAnimationFrame = (e) => {
    const top = e.getBoundingClientRect().top;
    e.style.animationDelay = `-${normalizeScreen(top, window.innerHeight, window.innerHeight * 0.6)}s`;
}
const handleAnimationFrameGradient = (e) => {
    const bottom = e.getBoundingClientRect().bottom;
    e.style.animationDelay = `-${normalizeScreen(bottom, 0, window.innerHeight * 0.5)}s`;
}
const update = () => {
    document.querySelectorAll(".App > div").forEach(handleAnimationFrame)
    document.querySelectorAll(".App > div > div").forEach(handleAnimationFrameGradient)
}
document.addEventListener('DOMContentLoaded', function() {
    update()
}, false);
document.addEventListener('scroll', update);
window.addEventListener('resize', update);