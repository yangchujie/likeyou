var audio = document.getElementById('music');
var heart = document.getElementById('heart');
var scream = document.getElementById('scream')
var firstMark = document.getElementsByClassName('firstMark')[0];
var likeYou = document.getElementsByClassName('likeYou')[0];
var likeYouWord = document.querySelectorAll('.likeYou>span');
var count = 0;

firstMark.style.height = `${window.innerHeight }px`;
likeYou.style.height = `${window.innerHeight }px`;

heart.onclick = function myFun() {
    if (scream !== null) {
        if (scream.paused) {
            count++;
            heart.classList.add('jello');
            setTimeout(() =>{
                heart.classList.remove('jello');
            },1000);
            if (count === 2) {
                scream.src = './static/Boogerman.mp3'
            }
            if (count === 3) {
                scream.src = './static/hah1.mp3'
            }
            if (count === 4) {
                scream.src = './static/hah2.mp3'
            }
            if (count === 5) {
                scream.src = './static/hah3.mp3'
            }
            if (count === 6) {
                scream.src = './static/hah1.mp3'
            }
            if (count === 7) {
                scream.src = './static/hah2.mp3'
            }
            if (count === 8) {
                scream.src = './static/hah3.mp3'
            }
            if (count === 9) {
                scream.src = './static/hah1.mp3'
            }
            if (count === 10) {
                scream.src = './static/hah2.mp3'
            }
            if (count === 11) {
                scream.src = './static/hah3.mp3'
            }
            if (count === 12) {
                scream.src = './static/cat.mp3';
                firstMark.style.display = 'none';
                likeYou.style.opacity = '1';
                if (audio.paused){
                    likeYouMyGirl();
                    setTimeout(() => {
                        audio.play();
                    },4000)
                }
            }
            scream.play();
        }
    }
};

function likeYouMyGirl() {
    var index = 0;
    var interval = setInterval(() => {
        likeYouWord[index].style.opacity = '1';
        index ++ ;
        if (index === likeYouWord.length-1){
            clearInterval(interval)
        }
    },4000);
}






