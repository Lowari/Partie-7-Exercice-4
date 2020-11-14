const img = document.getElementById('img');

function zoom() {
    this.classList.toggle('zoom');
};

img.addEventListener('click', zoom.bind(img));