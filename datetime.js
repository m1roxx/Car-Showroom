function updateDateTime() {
    const dateTimeElement = document.getElementById('currentDateTime');
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    const formattedDate = now.toLocaleDateString('en-US', options);

    dateTimeElement.textContent = formattedDate;
}

setInterval(updateDateTime, 1000);

updateDateTime();