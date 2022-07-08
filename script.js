let divContents = document.querySelectorAll('.content');
let myScrlFxd = document.querySelector('.fxd');

for (let i = 3; i < divContents.length; i++) {
    if (i % 2 === 0){
        divContents[i].classList.add('right');
    }
    else {
        divContents[i].classList.add('left');
    };
};

window.onscroll = function() {
    if (window.scrollY >= 140){
        divContents[3].classList.remove('left');
    } else {
        divContents[3].classList.add('left');
    } 
    
    if (window.scrollY >= 335){
        divContents[4].classList.remove('right');
    } else {
        divContents[4].classList.add('right');
    }

    if (window.scrollY >= 530){
        divContents[5].classList.remove('left');
    } else {
        divContents[5].classList.add('left');
    }
    
    if (window.scrollY >= 725){
        divContents[6].classList.remove('right');
    } else {
        divContents[6].classList.add('right');
    }

    if (window.scrollY >= 920){
        divContents[7].classList.remove('left');
    } else {
        divContents[7].classList.add('left');
    }

    if (window.scrollY >= 1115){
        divContents[8].classList.remove('right');
    } else {
        divContents[8].classList.add('right');
    }

    if (window.scrollY >= 1310){
        divContents[9].classList.remove('left');
    } else {
        divContents[9].classList.add('left');
    }
}