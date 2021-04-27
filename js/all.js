let cardIdNumber = []
let indexNum
let randomIdNumber = []
let target1 = ranNum(0, 6)
let target2 = ranNum(0, 6)

// 隨機數字
function ranNum(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

// 建立一個有 26 個值的陣列 cardIdNumber
for (let i = 1; i <= 26; i++) {
  cardIdNumber.push(i) //總共 26 個數字
}

// 從 cardIdNumber 內隨機取 6 個值成立新的陣列 randomIdNumber
for (let i = 1; i <= 6; i++) {
  indexNum = ranNum(1, 25)
  if (randomIdNumber.indexOf(indexNum) === -1) {
    randomIdNumber.push(indexNum)
  } else {
    i--
  }
}
console.log(randomIdNumber)

function displayCard() {
  if (target1 === target2) {
    target1 = ranNum(0, 6) //解決 target1 target2 重複的問題
  }
  console.log(target1, target2)
  for (let i = 0; i < 6; i++) {
    // 左邊的牌堆
    $('#left').append(`
            <div class="shadow card">
                <div class="left-card-front"></div>
                <div class="left-card-back"></div>
            </div>
        `)
    $('.shadow').eq(i).find('.left-card-front').css('background-image', `url(./images/${randomIdNumber[i]}_shadow.png)`)
    $('.shadow').eq(i).attr('left-card', randomIdNumber[i])
    //打亂順序
    $('.shadow').eq(target1).insertAfter($('.shadow').eq(i))
    $('.shadow').eq(target2).insertBefore($('.shadow').eq(i))

    // 右邊的牌堆
    $('#right').append(`
      <div class="face card">
      <div class="right-card-front"></div>
      <div class="right-card-back"></div>
      </div>
      `)
    $('.face').eq(i).find('.right-card-front').css('background-image', `url(./images/${randomIdNumber[i]}_front.png)`)
    $('.face').eq(i).attr('right-card', randomIdNumber[i])
    //打亂順序
    $('.face').eq(target2).insertAfter($('.face').eq(i))
    $('.face').eq(target1).insertBefore($('.face').eq(i))
  }
}
displayCard()
