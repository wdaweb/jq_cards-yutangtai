let cardIdNumber = []
let indexNum
let randomIdNumber = []
let target1 = ranNum(0, 6)
let target2 = ranNum(0, 6)
let frontMusic = new Audio('../audio/guessPokemon_front.mp3')
let endaMusic = new Audio('../audio/guessPokemon_end.mp3')
const pokemonId = [
  '001',
  '004',
  '007',
  '010',
  '012',
  '016',
  '019',
  '024',
  '025',
  '035',
  '037',
  '039',
  '044',
  '048',
  '050',
  '052',
  '054',
  '079',
  '094',
  '103',
  '124',
  '129',
  '143',
  '151',
  '158',
  '202'
]
const pokemonInfo = [
  {
    imgNum: 1,
    name: '皮卡丘',
    id: '025',
    attribution: ['電'],
    weakness: ['地面'],
    detail: '　　越是能製造出強大電流的皮卡丘，臉頰上的囊就越柔軟，同時也越有伸展性。',
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
    imgNum: 2,
    name: '小火龍',
    id: '004',
    attribution: ['火'],
    weakness: ['水', '地面', '岩石'],
    detail: '　　天生喜歡熱熱的東西。據說當牠被雨淋濕的時候，尾巴的末端會冒出煙來。',
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
    imgNum: 3,
    name: '傑尼龜',
    id: '007',
    attribution: ['水'],
    weakness: ['草', '電'],
    detail: '　　甲殼的作用不僅是用來保護自己，圓潤的外形和表面的溝槽會減少水的阻力，使牠能夠快速地游泳。',
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
    imgNum: 4,
    name: '綠毛蟲',
    id: '010',
    attribution: ['蟲'],
    weakness: ['火', '飛行', '岩石'],
    detail: '　　會從頭部的觸角釋放出強烈的氣味來趕走敵人，藉此保護自己。',
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
    imgNum: 5,
    name: '巴大蝶',
    id: '012',
    attribution: ['蟲', '飛行'],
    weakness: ['火', '飛行', '岩石', '電', '冰'],
    detail: '　　當牠飛快地拍動翅膀，帶有劇毒的鱗粉就會隨著風向這裡飄過來。',
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
    imgNum: 6,
    name: '妙蛙種子',
    id: '001',
    attribution: ['草', '毒'],
    weakness: ['火', '冰', '飛行', '超能力'],
    detail: '　　經常可見牠在太陽下睡午覺的樣子。在沐浴了充足的陽光之後，牠背上的種子就會成長茁壯。',
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
    imgNum: 7,
    name: '波波',
    id: '016',
    attribution: ['一般', '飛行'],
    weakness: ['岩石', '電', '冰'],
    detail: '　　因為方向感非常好，所以無論到了離巢穴多遠的地方，都能不迷路地飛回巢穴。',
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
    imgNum: 8,
    name: '小拉達',
    id: '019',
    attribution: ['一般'],
    weakness: ['格鬥'],
    detail: '　　門牙會終生生長，如果長得太長，就會因為無法進食而餓死。',
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
    imgNum: 9,
    name: '阿柏怪',
    id: '024',
    attribution: ['毒'],
    weakness: ['地面', '超能力'],
    detail: '　　最新的研究結果顯示，牠們肚子上的花紋有２０種以上的不同圖案。',
    ability: {
      hp: 3,
      attack: 5,
      defend: 3,
      specialAttack: 3,
      specialDefend: 3,
      speed: 4
    }
  },
  {
    imgNum: 10,
    name: '皮皮',
    id: '035',
    attribution: ['妖精'],
    weakness: ['毒', '鋼'],
    detail: '　　據說如果在滿月的夜晚看見皮皮們聚在一起跳舞，就能得到幸福。',
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
    imgNum: 11,
    name: '胖丁',
    id: '039',
    attribution: ['一般', '妖精'],
    weakness: ['毒', '鋼'],
    detail: '　　在百貨公司的寢具區可以買到收錄著胖丁那奇妙搖籃曲的ＣＤ。',
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
    imgNum: 12,
    name: '六尾',
    id: '037',
    attribution: ['火'],
    weakness: ['地面', '水', '岩石'],
    detail: '　　雖然還是孩子，但已擁有美麗的６根尾巴。長大後尾巴會變得更多。',
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
    imgNum: 13,
    name: '臭臭花',
    id: '044',
    attribution: ['草', '毒'],
    weakness: ['火', '冰', '飛行', '超能力'],
    detail: '　　雌蕊會散發一種極其強烈的惡臭，能讓２公里外的人昏倒。',
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
    imgNum: 14,
    name: '毛球',
    id: '048',
    attribution: ['蟲', '毒'],
    weakness: ['火', '飛行', '超能力', '岩石'],
    detail: '　　據說為了保護自己，變得全身長滿了堅硬細小的體毛。有著不會放過任何小獵物的眼睛。',
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
    imgNum: 15,
    name: '地鼠',
    id: '050',
    attribution: ['地面'],
    weakness: ['水', '草', '冰'],
    detail: '　　地鼠經過之後的土壤會得到適當的翻動，成為最適合耕種的田地。',
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
    imgNum: 16,
    name: '喵喵',
    id: '052',
    attribution: ['一般'],
    weakness: ['格鬥'],
    detail: '　　喜歡收集亮晶晶的東西。當牠心情好的時候，會讓訓練家一起欣賞自己的收藏。',
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
    imgNum: 17,
    name: '可達鴨',
    id: '054',
    attribution: ['水'],
    weakness: ['草', '電'],
    detail: '　　一使出念力就會頭痛，所以平常盡量什麼事都不做，整天不停地發呆。',
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
    imgNum: 18,
    name: '呆呆獸',
    id: '079',
    attribution: ['水', '超能力'],
    weakness: ['草', '電', '蟲', '幽靈', '惡'],
    detail: '　　傳說當呆呆獸打呵欠時就會開始下雨，所以據說有些地區會祭祀呆呆獸。',
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
    imgNum: 19,
    name: '耿鬼',
    id: '094',
    attribution: ['幽靈', '毒'],
    weakness: ['地面', '超能力', '幽靈', '惡'],
    detail: '　　滿月的夜晚，如果影子自己動起來並露出笑容，那肯定是耿鬼搞的鬼。',
    ability: {
      hp: 4,
      attack: 4,
      defend: 4,
      specialAttack: 8,
      specialDefend: 5,
      speed: 7
    }
  },
  {
    imgNum: 20,
    name: '椰蛋樹',
    id: '103',
    attribution: ['草', '超能力'],
    weakness: ['火', '冰', '毒', '飛行', '蟲', '幽靈', '惡'],
    detail: '　　會用精神力量迎戰敵人。３個頭會分別發出念力，所以威力也會變成３倍。',
    ability: {
      hp: 4,
      attack: 5,
      defend: 4,
      specialAttack: 6,
      specialDefend: 3,
      speed: 3
    }
  },
  {
    imgNum: 21,
    name: '鯉魚王',
    id: '129',
    attribution: ['水'],
    weakness: ['草', '電'],
    detail: '　　力量和速度都不太行。是世界上最弱最可憐的寶可夢。',
    ability: {
      hp: 2,
      attack: 1,
      defend: 4,
      specialAttack: 1,
      specialDefend: 2,
      speed: 5
    }
  },
  {
    imgNum: 22,
    name: '迷唇姐',
    id: '124',
    attribution: ['冰', '超能力'],
    weakness: ['火', '蟲', '岩石', '幽靈', '惡', '鋼'],
    detail: '　　會以獨特的節奏扭動腰部。棲息在阿羅拉的迷唇姐動作更是特別完美無瑕。',
    ability: {
      hp: 3,
      attack: 3,
      defend: 2,
      specialAttack: 6,
      specialDefend: 4,
      speed: 5
    }
  },
  {
    imgNum: 23,
    name: '卡比獸',
    id: '143',
    attribution: ['一般'],
    weakness: ['格鬥'],
    detail: '　　每天不吃下４００公斤的食物絕不會善罷甘休。吃飽了就會開始睡覺。',
    ability: {
      hp: 10,
      attack: 7,
      defend: 4,
      specialAttack: 4,
      specialDefend: 7,
      speed: 2
    }
  },
  {
    imgNum: 24,
    name: '夢幻',
    id: '151',
    attribution: ['超能力'],
    weakness: ['蟲', '幽靈', '惡'],
    detail: '　　據說牠有著所有寶可夢的基因。因為可以隨心所欲地隱形，所以就算接近人類也完全不會被察覺。',
    ability: {
      hp: 6,
      attack: 6,
      defend: 6,
      specialAttack: 6,
      specialDefend: 6,
      speed: 6
    }
  },
  {
    name: '果然翁',
    id: '202',
    imgNum: 25,
    attribution: ['超能力'],
    weakness: ['蟲', '幽靈', '惡'],
    detail: '　　討厭光和衝擊。受到攻擊時身體會膨脹，反擊也會因此變強。',
    ability: {
      hp: 12,
      attack: 2,
      defend: 4,
      specialAttack: 2,
      specialDefend: 4,
      speed: 2
    }
  },
  {
    name: '小鋸鱷',
    id: '158',
    imgNum: 26,
    attribution: ['水'],
    weakness: ['草', '電'],
    detail: '　　個子雖小但雙顎力量很強。力量強大到小鋸鱷只是想輕輕咬一下，但卻會讓對方受到重傷的程度。',
    ability: {
      hp: 2,
      attack: 3,
      defend: 3,
      specialAttack: 2,
      specialDefend: 2,
      speed: 2
    }
  }
]

// 遊戲起始畫面，按下開始按鈕
$('#btn').click(function(){
  $('#gameStart').css("display","none");
  $('#game').css("display","block");
  displayCard();
  frontMusic.play();
})

// 隨機數字
function ranNum(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

// 建立一個有 26 個值的陣列 cardIdNumber
for (let i = 1; i <= 26; i++) {
  cardIdNumber.push(i); //總共 26 個數字
}

// 重新抽牌
function newCards(){
  console.log('(1) newCards 重新抽牌');
  randomIdNumber = [];  
  
  // 從 cardIdNumber 內隨機取 6 個值成立新的陣列 randomIdNumber
  for (let i = 1; i <= 6; i++) {
    indexNum = ranNum(1, 25);
    if (randomIdNumber.indexOf(indexNum) === -1) {
      randomIdNumber.push(indexNum);
    } else {
      i--;
    }
  }
  console.log('(2) randomIdNumber:' + randomIdNumber);
  return randomIdNumber;
}

function displayCard() {
  newCards()
  console.log('(3) displayCard 發牌');
  target1 = ranNum(0, 6);
  target2 = ranNum(0, 6);
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

// 檢查
function addCardOpen() {
  $('#left').on('click', '.shadow', function () {
    if ($('#left .card-open').length === 0 && !$(this).hasClass('.card-open')) {
      $(this).addClass('card-open');
    }
    checkCard()
  })
  $('#right').on('click', '.face', function () {
    if ($('#right .card-open').length === 0 && !$(this).hasClass('.card-open')) {
      $(this).addClass('card-open');
    }
    checkCard()
  })
}
addCardOpen()

let matchNum = 0
function checkCard() {
  if ($('#left .card-open').length + $('#right .card-open').length === 2) {
    if ($('.card-open').eq(0).attr('left-card') === $('.card-open').eq(1).attr('right-card')) {
      matchNum++
      setTimeout(() => {
        $('.card-open').fadeTo(1000, 0).addClass('card-clear')
        findPokeIndex()
        descriptionBox()
        finalResult()
      }, 1000)
      addBall();
    }
    setTimeout(() => {
      $('.card-open').removeClass('card-open')
    }, 1000)
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
  $('#intro').css('display', 'block');
  $('#intro').addClass('animate__animated animate__fadeInDownBig');
  endaMusic.play();
}

function findPokeIndex() {
  let pokeIndex = $('.card-open').eq(0).attr('left-card') - 1
  let attributesStr = ''
  let weaknessStr = ''
  $('.pokeNum').text(pokemonInfo[pokeIndex]['id'])
  $('.pokeName').text(pokemonInfo[pokeIndex].name)
  $('.detail').text(pokemonInfo[pokeIndex].detail)
  $('.pokemon').attr('src', `./images/${pokeIndex + 1}_info.png`)
  abilityChart()
  for (let i = 0; i < pokemonInfo[pokeIndex].attribution.length; i++) {
    attributesStr += `${pokemonInfo[pokeIndex].attribution[i]}\n`
    $('.attributes').text(attributesStr)
  }
  for (let i = 0; i < pokemonInfo[pokeIndex].weakness.length; i++) {
    weaknessStr += `${pokemonInfo[pokeIndex].weakness[i]}\n`
    $('.weakness').text(weaknessStr)
  }
}

// 關掉介紹視窗
$('.close_box').click(function () {
  $('#intro').css('display', 'none');
  pokeChart.destroy();

  if (matchNum === 6) {
    // 清空牌組，顯示最終結果視窗
    $('#left').empty();
    $('#right').empty();
    $('.ball').empty();    
    console.log('(4) 全部重置------------>');
    matchNum = 0;
    $('#pokemonResult').css("display","block");
    $('#game').css("display","none");      
  }
})

// 關掉最終結果視窗
$('.closeBox').click(function(){
  $('.ballResult').empty();
  displayCard();      
  $('#pokemonResult').css("display","none");
  $('#game').css("display","block");
})

let pokeChart
function abilityChart() {
  let pokeIndex = $('.card-open').eq(0).attr('left-card') - 1
  let ctx = $('#pokeChart')
  pokeChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HP', '攻擊', '防禦', '特攻', '特防', '速度'],
      datasets: [
        {
          label: '能力',
          data: [
            `${pokemonInfo[pokeIndex].ability.hp}`,
            `${pokemonInfo[pokeIndex].ability.attack}`,
            `${pokemonInfo[pokeIndex].ability.defend}`,
            `${pokemonInfo[pokeIndex].ability.specialAttack}`,
            `${pokemonInfo[pokeIndex].ability.specialDefend}`,
            `${pokemonInfo[pokeIndex].ability.speed}`
          ],
          backgroundColor: ['rgba(74, 187, 253, 0.95)','rgba(74, 187, 253, 0.95)','rgba(74, 187, 253, 0.95)','rgba(74, 187, 253, 0.95)','rgba(74, 187, 253, 0.95)','rgba(74, 187, 253, 0.95)'],
          borderColor: ['rgba(255, 255, 255, 0.3)'],
          borderWidth: 2,
        }
      ]
    },
    options: {
      elements: {
        line: {
          borderWidth: 5
        }
      }
    }
  })
}


// 最後顯示配對成功的的神奇寶貝
function finalResult(){
  console.log(matchNum);
  let pokeIndex = $('.card-open').eq(0).attr('left-card') - 1;
  $('.ballResult').append(`
    <div class="bgBallImg">
      <div class="bgBallImgInfo">
        <div class="catchPokemon"></div>
        <div class="catchPokemonName"></div>
      </div>
    </div>`);
    $('.ballResult .catchPokemon').eq(matchNum-1).css("background-image",`url(./images/${pokeIndex + 1}_info.png)`);
    $('.ballResult .catchPokemonName').eq(matchNum-1).text(pokemonInfo[pokeIndex].name);
}

