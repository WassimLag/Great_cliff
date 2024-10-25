function currentTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    // Add leading zero to minutes and seconds if they are less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Get time zone information
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Assemble the time string
    const timeString = `${hours}:${minutes}:${seconds} ${ampm} - ${timeZone}`;

    // Display the time in the clock element
    document.getElementById('clock').innerText = timeString;
}

// Call the function every second
setInterval(currentTime, 1000);
