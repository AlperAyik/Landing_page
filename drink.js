function imgSlider(anything) {
    var guave = 'Guava'
    document.querySelector('.jarritos').src = anything;
    document.getElementById('text').innerHTML = '<strong>' + guave + '</strong>' + ' ' + `You'd never expect sweet and sour to work together as perfectly as they do in the refreshing jarritos Guave soda.`;
}

function imgSlider2(anything) {
    var mand = 'Mandarin'
    document.querySelector('.jarritos').src = anything;
    document.getElementById('text').innerHTML = '<strong>' + mand + '</strong>' + ' ' + `The pioneer of mandarin sodas packs a powerful combination of tangy and sweet that will reawaken your palate with every sip.`;
}

function imgSlider3(anything) {
    var lim = "Lime"
    document.querySelector('.jarritos').src = anything;
    document.getElementById('text').innerHTML = '<strong>' + lim + '</strong>' + ' ' + 'Everyone loves limonadas and sodas, we found a way to capture the irresistible mix of sweetness and sourness into a refreshing bottle of goodness.'
}

function imgSlider4(anything) {
    var coc = "Mexican-Cola"
    document.querySelector('.jarritos').src = anything;
    document.getElementById('text').innerHTML = '<strong>' + coc + '</strong>' + ' ' + `It's not a secret anymore, everyone knows the best colas come from Mexico.`
}

//bg color change
// function changeBg(color) {
//     const sec = document.querySelector('.sec');
//     sec.style.backgroundColor = color;
// }

//text color change
// function changetxt1(color) {
//     const text = document.querySelector('h2');
//     text.style.color = color;
// }

// function changetxt11(color) {
//     const text = document.getElementById('text');
//     text.style.color = color;
// }

// function changetxt111(color) {
//     const text = document.getElementById('pro');
//     text.style.color = color;
// }

//menu 
function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigator = document.querySelector('.navigator');
    toggleMenu.classList.toggle('active');
    navigator.classList.toggle('active');
}

const sr = ScrollReveal({
    distance: '30px',
    duration: 2500,
    reset: true
});

sr.reveal('.jarritos',{delay: 520, origin: 'right'});
