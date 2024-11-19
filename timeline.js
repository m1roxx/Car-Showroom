
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


Highcharts.chart('car-sales-chart', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Our Car Sales by Brand'
    },
    series: [{
        name: 'Sales',
        data: [
            { name: 'Toyota', y: 30 },
            { name: 'BMW', y: 20 },
            { name: 'Audi', y: 15 },
            { name: 'Mercedes', y: 25 },
            { name: 'Porsche', y: 10 }
        ]
    }]
});