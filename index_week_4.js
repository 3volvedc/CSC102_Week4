var movementInterval;

function start() {
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    start.disabled = true;
    stop.disabled = false;

    var image = document.getElementById("image");
    var currentPosition = parseInt(image.style.left) || 0;
    movementInterval = setInterval(start, currentPosition);
    {
    currentPosition += 50; // Move 5 pixels to the right (adjust as needed)
    image.style.left = currentPosition + "px";
    }
    document.getElementById("location").innerHTML = currentPosition
    return;
}

function stop() {
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    start.disabled = false;
    stop.disabled = true;
    return;
}
