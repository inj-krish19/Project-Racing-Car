const panels = document.querySelectorAll('.panel');

function togglePanel(id) {
    panels.forEach(p => p.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function checkDevice() {
    const notSupported = document.getElementById('notSupported');
    const startBtn = document.getElementById('startBtn');

    if (window.innerWidth < 900 || window.innerHeight < 500) {
        notSupported.classList.remove('hidden');
        startBtn.classList.add('hidden');
    } else {
        notSupported.classList.add('hidden');
        startBtn.classList.remove('hidden');
    }
}

checkDevice();
window.addEventListener('resize', checkDevice);
