let cardIdNumber = []
let indexNum
let randomIdNumber = []
let target1 = ranNum(0, 6)
let target2 = ranNum(0, 6)
const axios = require('axios')
const cheerio = require('cheerio')
const pokemonInfo = [
  {
    name: '妙蛙種子',
    id: '001',
    imgNum: 6,
    attribution: ['草', '毒'],
    weakness: ['火', '冰', '飛行', '超能力'],
    detail: '經常可見牠在太陽下睡午覺的樣子。在沐浴了充足的陽光之後，牠背上的種子就會成長茁壯。',
    ability: {
      hp: 3,
      attack: 3,
      defend: 3,
      specialAttack: 4,
      specialDefend: 4,
      speed: 3
    }
  },
  {
    name: '小火龍',
    id: '004',
    imgNum: 2,
    attribution: ['火'],
    weakness: ['水', '地面', '岩石'],
    detail: '天生喜歡熱熱的東西。據說當牠被雨淋濕的時候，尾巴的末端會冒出煙來。',
    ability: {
      hp: 3,
      attack: 4,
      defend: 3,
      specialAttack: 4,
      specialDefend: 3,
      speed: 4
    }
  },
  {
    name: '傑尼龜',
    id: '007',
    imgNum: 3,
    attribution: ['水'],
    weakness: ['草', '電'],
    detail: '甲殼的作用不僅是用來保護自己，圓潤的外形和表面的溝槽會減少水的阻力，使牠能夠快速地游泳。',
    ability: {
      hp: 3,
      attack: 3,
      defend: 4,
      specialAttack: 3,
      specialDefend: 4,
      speed: 3
    }
  },
  {
    name: '綠毛蟲',
    id: '010',
    imgNum: 4,
    attribution: ['蟲'],
    weakness: ['火', '飛行', '岩石'],
    detail: '會從頭部的觸角釋放出強烈的氣味來趕走敵人，藉此保護自己。',
    ability: {
      hp: 3,
      attack: 2,
      defend: 3,
      specialAttack: 2,
      specialDefend: 2,
      speed: 3
    }
  },
  {
    name: '巴大蝶',
    id: '012',
    imgNum: 5,
    attribution: ['蟲', '飛行'],
    weakness: ['火', '飛行', '岩石', '電', '冰'],
    detail: '當牠飛快地拍動翅膀，帶有劇毒的鱗粉就會隨著風向這裡飄過來。',
    ability: {
      hp: 4,
      attack: 3,
      defend: 3,
      specialAttack: 6,
      specialDefend: 5,
      speed: 5
    }
  },
  {
    name: '波波',
    id: '016',
    imgNum: 5,
    attribution: ['一般', '飛行'],
    weakness: ['岩石', '電', '冰'],
    detail: '因為方向感非常好，所以無論到了離巢穴多遠的地方，都能不迷路地飛回巢穴。',
    ability: {
      hp: 2,
      attack: 2,
      defend: 2,
      specialAttack: 2,
      specialDefend: 1,
      speed: 3
    }
  },
  {
    name: '小拉達',
    id: '019',
    imgNum: 5,
    attribution: ['一般'],
    weakness: ['格鬥'],
    detail: '門牙會終生生長，如果長得太長，就會因為無法進食而餓死。',
    ability: {
      hp: 2,
      attack: 3,
      defend: 2,
      specialAttack: 1,
      specialDefend: 1,
      speed: 4
    }
  },
  {
    name: '阿柏蛇',
    id: '023',
    imgNum: 5,
    attribution: ['毒'],
    weakness: ['地面', '超能力'],
    detail: '會藉由讓下顎脫臼來吞食比自己更大的獵物。進食之後會蜷縮起身子休息。',
    ability: {
      hp: 2,
      attack: 3,
      defend: 2,
      specialAttack: 2,
      specialDefend: 2,
      speed: 3
    }
  },
  {
    name: '皮卡丘',
    id: '025',
    imgNum: 5,
    attribution: ['電'],
    weakness: ['地面'],
    detail: '越是能製造出強大電流的皮卡丘，臉頰上的囊就越柔軟，同時也越有伸展性。',
    ability: {
      hp: 3,
      attack: 4,
      defend: 3,
      specialAttack: 3,
      specialDefend: 3,
      speed: 6
    }
  },
  {
    name: '皮皮',
    id: '035',
    imgNum: 5,
    attribution: ['妖精'],
    weakness: ['毒', '鋼'],
    detail: '據說如果在滿月的夜晚看見皮皮們聚在一起跳舞，就能得到幸福。',
    ability: {
      hp: 5,
      attack: 3,
      defend: 3,
      specialAttack: 4,
      specialDefend: 4,
      speed: 3
    }
  },
  {
    name: '六尾',
    id: '037',
    imgNum: 5,
    attribution: ['火'],
    weakness: ['地面', '水', '岩石'],
    detail: '雖然還是孩子，但已擁有美麗的６根尾巴。長大後尾巴會變得更多。',
    ability: {
      hp: 3,
      attack: 3,
      defend: 3,
      specialAttack: 3,
      specialDefend: 4,
      speed: 4
    }
  },
  {
    name: '胖丁',
    id: '039',
    imgNum: 5,
    attribution: ['一般', '妖精'],
    weakness: ['毒', '鋼'],
    detail: '在百貨公司的寢具區可以買到收錄著胖丁那奇妙搖籃曲的ＣＤ。',
    ability: {
      hp: 5,
      attack: 2,
      defend: 1,
      specialAttack: 2,
      specialDefend: 1,
      speed: 1
    }
  },
  {
    name: '臭臭花',
    id: '044',
    imgNum: 5,
    attribution: ['草', '毒'],
    weakness: ['火', '冰', '飛行', '超能力'],
    detail: '雌蕊會散發一種極其強烈的惡臭，能讓２公里外的人昏倒。',
    ability: {
      hp: 4,
      attack: 4,
      defend: 5,
      specialAttack: 5,
      specialDefend: 5,
      speed: 3
    }
  },
  {
    name: '毛球',
    id: '048',
    imgNum: 5,
    attribution: ['蟲', '毒'],
    weakness: ['火', '飛行', '超能力', '岩石'],
    detail: '據說為了保護自己，變得全身長滿了堅硬細小的體毛。有著不會放過任何小獵物的眼睛。',
    ability: {
      hp: 3,
      attack: 3,
      defend: 2,
      specialAttack: 2,
      specialDefend: 2,
      speed: 3
    }
  },
  {
    name: '地鼠',
    id: '050',
    imgNum: 5,
    attribution: ['地面'],
    weakness: ['水', '草', '冰'],
    detail: '地鼠經過之後的土壤會得到適當的翻動，成為最適合耕種的田地。',
    ability: {
      hp: 1,
      attack: 4,
      defend: 2,
      specialAttack: 3,
      specialDefend: 3,
      speed: 6
    }
  },
  {
    name: '喵喵',
    id: '052',
    imgNum: 5,
    attribution: ['一般'],
    weakness: ['格鬥'],
    detail: '喜歡收集亮晶晶的東西。當牠心情好的時候，會讓訓練家一起欣賞自己的收藏。',
    ability: {
      hp: 3,
      attack: 3,
      defend: 3,
      specialAttack: 3,
      specialDefend: 3,
      speed: 6
    }
  },
  {
    name: '可達鴨',
    id: '054',
    imgNum: 5,
    attribution: ['水'],
    weakness: ['草','電'],
    detail: '一使出念力就會頭痛，所以平常盡量什麼事都不做，整天不停地發呆。',
    ability: {
      hp: 2,
      attack: 3,
      defend: 2,
      specialAttack: 3,
      specialDefend: 2,
      speed: 3
    }
  },
  {
    name: '呆呆獸',
    id: '079',
    imgNum: 5,
    attribution: ['水','超能力'],
    weakness: ['草','電','蟲','幽靈','惡'],
    detail: '傳說當呆呆獸打呵欠時就會開始下雨，所以據說有些地區會祭祀呆呆獸。',
    ability: {
      hp: 6,
      attack: 4,
      defend: 4,
      specialAttack: 3,
      specialDefend: 3,
      speed: 1
    }
  },
  {
    name: '耿鬼',
    id: '094',
    imgNum: 5,
    attribution: ['一般'],
    weakness: ['格鬥'],
    detail: '喜歡收集亮晶晶的東西。當牠心情好的時候，會讓訓練家一起欣賞自己的收藏。',
    ability: {
      hp: 3,
      attack: 3,
      defend: 3,
      specialAttack: 3,
      specialDefend: 3,
      speed: 6
    }
  },
  {
    name: '喵喵',
    id: '052',
    imgNum: 5,
    attribution: ['一般'],
    weakness: ['格鬥'],
    detail: '喜歡收集亮晶晶的東西。當牠心情好的時候，會讓訓練家一起欣賞自己的收藏。',
    ability: {
      hp: 3,
      attack: 3,
      defend: 3,
      specialAttack: 3,
      specialDefend: 3,
      speed: 6
    }
  },
  {
    name: '喵喵',
    id: '052',
    imgNum: 5,
    attribution: ['一般'],
    weakness: ['格鬥'],
    detail: '喜歡收集亮晶晶的東西。當牠心情好的時候，會讓訓練家一起欣賞自己的收藏。',
    ability: {
      hp: 3,
      attack: 3,
      defend: 3,
      specialAttack: 3,
      specialDefend: 3,
      speed: 6
    }
  },
]

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
    <div class="pokeball animate__animated animate__fadeInDownBig">
      <a href=""><img src="./images/ball.png" title="hi"></a>
    </div>
  `)
}

// 神奇寶貝介紹
function descriptionBox() {
  $('#intro').css('display', 'block')
  // $('pokeNum').css
}
descriptionBox()

const pokemonId = ["001", "004", "007", "010", "012", "016", "019", "024", "025", "035", "037", "039", "044", "048", "050", "052", "054", "079", "094", "103", "124", "129", "143", "151", "158"]
axios.get()