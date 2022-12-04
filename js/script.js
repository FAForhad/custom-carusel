const images = [
    'a-01.jpg',
    'a-02.jpg',
    'a-03.jpg',
    'a-04.jpg'
];

let imgIndex = 0;
const img = document.getElementById('carusol')
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    imgLink = images[imgIndex]
    img.setAttribute('src', imgLink)
    imgIndex++;
}, 1500);