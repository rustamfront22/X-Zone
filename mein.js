let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.stair__slider')
const examplesSlider = document.querySelector('.slider__line')

document.querySelector('.slider-next').addEventListener('click', function() {
    offset = offset + 1205; // offset += 1210
    if (offset > 2410) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
})

document.querySelector('.slider-prev').addEventListener('click', function() {
    offset = offset - 1205; // offset -= 1210
    if (offset < 0) {
        offset = 2405
    }
    sliderLine.style.left = -offset + 'px'
})

document.querySelector('.examples__slider-next').addEventListener('click', function() {
    offset = offset + 490; // offset += 1210
    if (offset > 980) {
        offset = 0
    }
    examplesSlider.style.left = -offset + 'px'
})

document.querySelector('.examples__slider-prev').addEventListener('click', function() {
    offset = offset - 490; // offset -= 1210
    if (offset < 0) {
        offset = 980
    }
    examplesSlider.style.left = -offset + 'px'
})