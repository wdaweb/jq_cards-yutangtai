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

function displayCard() {
  target1 = ranNum(0, 6)
  target2 = ranNum(0, 6)
  if (target1 === target2) {
    target1 = ranNum(0, 6) //解決 target1 target2 重複的問題
  }
  for (let i = 0; i < 6; i++) {
    // 左邊的牌堆
    $('#left').append(`
            <div class="shadow">
                <div class="left-card-front"></div>
                <div class="left-card-back"></div>
            </div>
        `)
    $('.shadow').eq(i).find('.left-card-front').css('background-image', `url(./images/${randomIdNumber[i]}_shadow.png)`)
    $('.shadow').eq(i).find('.left-card-front').css('background-repeat', `no-repeat`)

    $('.shadow').eq(i).attr('left-card', randomIdNumber[i])
    //打亂左邊牌堆的順序
    $('.shadow').eq(target1).insertAfter($('.shadow').eq(i))
    $('.shadow').eq(target2).insertBefore($('.shadow').eq(i))

    // 右邊的牌堆
    $('#right').append(`
      <div class="face">
        <div class="right-card-front"></div>
        <div class="right-card-back"></div>
      </div>
      `)
    $('.face').eq(i).find('.right-card-front').css('background-image', `url(./images/${randomIdNumber[i]}_front.png)`)
    $('.face').eq(i).find('.right-card-front').css('background-repeat', `no-repeat`)
    $('.face').eq(i).attr('right-card', randomIdNumber[i])
    //打亂右邊牌堆的順序
    $('.face').eq(target2).insertAfter($('.face').eq(i))
    $('.face').eq(target1).insertBefore($('.face').eq(i))
  }
}
displayCard()

// 檢查
function addCardOpen() {
  $('#left').on('click', '.shadow', function () {
    if ($('#left .card-open').length === 0 && !$(this).hasClass('.card-open')) {
      $(this).addClass('card-open')
    }
    checkCard()
  })
  $('#right').on('click', '.face', function () {
    if ($('#right .card-open').length === 0 && !$(this).hasClass('.card-open')) {
      $(this).addClass('card-open')
    }
    checkCard()
  })
}
addCardOpen()
function checkCard() {
  if ($('#left .card-open').length + $('#right .card-open').length === 2) {
    if ($('.card-open').eq(0).attr('left-card') === $('.card-open').eq(1).attr('right-card')) {
      setTimeout(() => {
        $('.card-open').fadeTo(1000, 0).addClass('card-clear')
      }, 1000)
      addBall()
    }
    setTimeout(() => {
      $('.card-open').removeClass('card-open')
    }, 1000)
  }
  if ($('.pokeball').length === 6) {
    setTimeout(() => {
      Swal.fire({
        title: '恭喜成為神奇寶貝大師!!!'
      })
      $('#left').empty()
      $('#right').empty()
      $('.ball').empty()
      displayCard()
    }, 2000)
  }
}

// 增加神奇寶貝球
function addBall() {
  $('.ball').append(`
    <div class="pokeball">
      <img src="./images/ball.png">
    </div>
  `)
}
