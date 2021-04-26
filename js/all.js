// 左邊的牌堆
for(let i=0; i < 6; i++){
    $('#left').append(`
        <div class="shadow card">
            <div class="left-card-front"></div>
            <div class="left-card-back"></div>
        </div>
    `)
}
// 右邊的牌堆
for(let j=0; j < 6; j++){
    $('#right').append(`
    <div class="face card">
    <div class="right-card-front"></div>
    <div class="right-card-back"></div>
    </div>
    `)
}
for(let k=0; k < 52; k++){
    let number = k % (52/2) + 1
    let shadowTarget = Math.floor(Math.random() * 27)
    let faceTarget = Math.floor(Math.random() * 27)

    // 左邊
    $('.shadow').eq(k).find('.left-card-front').css('background-image',`url(/images/${number}_shadow.png)`)
    $('.shadow').eq(k).attr('left-card', number)

    // 右邊
    $('.face').eq(k).find('.right-card-front').css('background-image',`url(/images/${number}_front.png)`)
    $('.face').eq(k).attr('right-card', number)

    $('.shadow').eq(shadowTarget).insertAfter($('.shadow').eq(k))
    $('.face').eq(faceTarget).insertAfter($('.face').eq(k))
}
