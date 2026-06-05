function go(n){


document.querySelectorAll('.page')
.forEach(x => x.classList.remove('active'));

document.getElementById('p' + n)
.classList.add('active');


// Start voice message when gift opens
if(n === 2){

    const voiceMessage =
    document.getElementById("voiceMessage");

    if(voiceMessage){

        voiceMessage.play();

    }

}


// Start love letter typing animation
if(n === 5){

    startTyping();

}


// Confetti on every page transition
confetti({
    particleCount: 120,
    spread: 90
});


}

// Cake Celebration

function celebrate(){


confetti({
    particleCount: 250,
    spread: 140,
    origin: { y: 0.6 }
});


}

// Final Celebration Fireworks

function mega(){


let end = Date.now() + 5000;

(function frame(){

    confetti({
        particleCount: 8,
        angle: 60,
        spread: 70,
        origin: { x: 0 }
    });

    confetti({
        particleCount: 8,
        angle: 120,
        spread: 70,
        origin: { x: 1 }
    });

    if(Date.now() < end){

        requestAnimationFrame(frame);

    }

})();


}

// Floating Hearts Background

for(let i = 0; i < 30; i++){


let heart =
document.createElement('div');

heart.className = 'heart';

heart.innerHTML = '❤️';

heart.style.left =
Math.random() * 100 + '%';

heart.style.fontSize =
(15 + Math.random() * 25) + 'px';

heart.style.animationDuration =
(5 + Math.random() * 5) + 's';

document.body.appendChild(heart);


}

const voiceMessage =
document.getElementById("voiceMessage");

const bgMusic =
document.getElementById("bgMusic");

if(voiceMessage && bgMusic){

    voiceMessage.onended = () => {

        bgMusic.play();

    };

}

// // Audio Controls

// const voiceMessage =
// document.getElementById("voiceMessage");

// const bgMusic =
// document.getElementById("bgMusic");

// // When voice message ends, start song

// if(voiceMessage && bgMusic){


// voiceMessage.onended = () => {

//     bgMusic.play();

// };


// }

// Music Button

const musicBtn =
document.getElementById("musicBtn");

if(musicBtn && bgMusic){


musicBtn.addEventListener("click", () => {

    if(bgMusic.paused){

        bgMusic.play();

        musicBtn.innerHTML =
        "⏸ Pause Music";

    }

    else{

        bgMusic.pause();

        musicBtn.innerHTML =
        "▶ Play Music";

    }

});


}
