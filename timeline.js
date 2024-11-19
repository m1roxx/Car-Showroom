
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});


const timelineItems = document.querySelectorAll('.timeline-item');


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}


function checkVisibility() {
    timelineItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('visible');
        }
    });
}


window.addEventListener('scroll', checkVisibility);
checkVisibility(); 
