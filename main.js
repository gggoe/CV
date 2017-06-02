/* swiper */
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    onTransitionEnd:function(swiper){
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



