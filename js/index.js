var audio = document.getElementById('music');
var heart = document.getElementById('heart');
var heartBreak = document.getElementById('heartBreak');
var firstMark = document.getElementsByClassName('firstMark')[0];
var likeYou = document.getElementsByClassName('likeYou')[0];
var body = document.querySelector('body');
var likeYouWord = document.querySelectorAll('.likeYou>span');


firstMark.style.height = `${window.innerHeight}px`;
likeYou.style.height = `${window.innerHeight}px`;

heart.onclick = function myFun() {
    heartBreak.pause();
    if (audio !== null) {
        if (audio.paused) {
            firstMark.style.display = 'none';
            body.classList.add('bounceInLeft','animated');
            likeYouMyGirl();
            setTimeout(() => {
                audio.play();
            }, 4000)
        }
    }
};

function likeYouMyGirl() {
    var index = 0;
    var interval = setInterval(() => {
        likeYouWord[index].style.opacity = '1';
        index++;
        if (index === likeYouWord.length - 1) {
            clearInterval(interval)
        }
    }, 4000);
}






