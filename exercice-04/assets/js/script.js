let img = document.getElementById('img');

zoom = () => {
    img.classList.toggle('zoom');
};

img.addEventListener('click', zoom);