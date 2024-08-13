let interval = null;
let s = 0, m = 0, h = 0;

function start() {
    if (interval) {
        clearInterval(interval);
    }

    h = parseInt(document.getElementById("hour").value) || 0;
    m = parseInt(document.getElementById("minute").value) || 0;
    s = parseInt(document.getElementById("second").value) || 0;

    interval = setInterval(function () {
        if (s <= 0 && m <= 0 && h <= 0) {
            clearInterval(interval);
            alert("Time's up!");
            return;
        }

        if (s <= 0) {
            s = 59;
            if (m <= 0) {
                m = 59;
                if (h > 0) {
                    h--;
                }
            } else {
                m--;
            }
        } else {
            s--;
        }

        document.getElementById("second").value = s.toString().padStart(2, '0');
        document.getElementById("minute").value = m.toString().padStart(2, '0');
        document.getElementById("hour").value = h.toString().padStart(2, '0');

    }, 1000);
}

function stop() {
    if (interval) {
        clearInterval(interval);
    }
}

function reset() {
    clearInterval(interval);

    document.getElementById("second").value = '';
    document.getElementById("minute").value = '';
    document.getElementById("hour").value = '';
}