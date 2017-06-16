/* swiper */
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    onTransitionEnd: function (swiper) {
        var slides = swiper.slides,
            curIndex = swiper.activeIndex,
            total = slides.length,
            targetId = 'page';
        switch (curIndex) {
            case 0:
                targetId += (total - 2);
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIndex;
        }
        [].forEach.call(slides, function (item, index) {
            if (curIndex == index) {
                item.id = targetId;
            } else {
                item.id = null;
            }
        });
    }
});

/* audio */
~function () {
    var audioBtn = document.getElementById('music');
    var music = document.getElementById('music-audio');
    var musicBg = document.getElementsByClassName('control')[0];
    var pauseBtn = document.getElementsByClassName('control-after')[0];
    console.log(audioBtn, music)
    var flag = true;
    audioBtn.onclick = function () {
        console.log(111)

        flag = !flag;
        if (flag) {
            music.play();
            musicBg.style.background="url('./images/public/music_1.gif') transparent no-repeat center center";
            musicBg.style.backgroundSize="contain";
            pauseBtn.style.animationPlayState='running';
        } else{
            music.pause();
            musicBg.style.background='none';
            pauseBtn.style.animationPlayState='paused';

        }

        console.log(flag);
    }

}();




