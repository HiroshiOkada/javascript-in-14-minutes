var memory = Cookies.getJSON('memory') || {}

var html_el = document.documentElement
var platform_el = document.getElementById('platform')
var os_el = document.getElementById('os')
var browser_el = document.getElementById('browser')
var browser_width_el = document.getElementById('browserWidth')
var wider_el = document.getElementById('wider')
var return_el = document.getElementById('return')
var resume_el = document.getElementById('resume')
var reset_el = document.getElementById('reset')

var state = {
  current_step: 0,
  platform: '',
  browser: '',
  os: ''
}

window.old_alert = window.alert
window.alert = function(str) {
  window.old_alert.apply(this, arguments)
  var function_to_call = `checkStep${state.current_step}`
  if (window[function_to_call]) {
    window[function_to_call](str)
  }
}

function checkStep1(str) {
  if (str == 'Hello World!') {
    return showStep(2)
  } else if (str.toLowerCase() == 'hello world!') {
    return console.log(
      'JavaScript では 大文字と小文字を区別します。大文字と小文字を正しく入力して下さい。'
    )
  }
  console.log('正しい文字列を入力してください.')
}

function checkStep5(str) {
  if (str == 24) {
    return showStep(6)
  }
  console.log('もう一度!')
}

function checkStep7(str) {
  if (str == window.innerWidth) {
    browser_width_el.innerHTML = window.innerWidth
    return showStep(8)
  }
  console.log(`答えは ${window.innerWidth} になるはずです!`)
}

function checkStep10(str) {
  if (str == window.location.href) {
    return showStep(11)
  }
}

function checkStep12(str) {
  if (str == 'OMG') {
    return showStep(13)
  }
}

function checkStep14(str) {
  if (str == 'What,is,up') {
    return showStep(15)
  }
}

function checkStep15(str) {
  if (str == '7,samurai,true') {
    return showStep(16)
  }
}

function checkStep18(str) {
  if (!state.desktop) {
    return showStep(19)
  } else if (typeof my_things == 'undefined') {
    return console.log('"my_things" という名前の配列を作成してください。')
  } else if (str == my_things) {
    return showStep(19)
  }
}

function checkStep19(str) {
  if (!state.desktop) {
    return showStep(20)
  } else if (typeof my_things == 'undefined') {
    return console.log('"my_things" という名前の配列を作成してください。')
  } else if (my_things.length < 2) {
    return console.log('少なくとも2項目からなる配列を作成してください。')
  } else if (str != my_things[1]) {
    return console.log('インデックスが 1 である項目を選択してください。')
  } else if (str == my_things[1]) {
    return showStep(20)
  }
  console.log(
    '"my_things" という配列を作成しインデックスが 1 である項目を選択してください。.'
  )
}

function checkStep20(str) {
  if (!state.desktop) {
    return showStep(21)
  } else if (typeof my_things == 'undefined') {
    return console.log('"my_things" という名前の配列を作成してください。')
  } else if (str == my_things.length) {
    return showStep(21)
  }
  console.log('"my_things" という名前の配列を作成してください。')
}

function checkStep21(str) {
  if (!state.desktop) {
    return showStep(22)
  } else if (typeof my_things == 'undefined') {
    return console.log('"my_things" という名前の配列を作成してください。')
  } else if (str == '7,samurai,true') {
    return
  } else if (str == '7,samurai,true,LOVE') {
    return showStep(22)
  }
  console.log(
    '"my_things" という名前の配列を作成し、"LOVE" という文字列を追加してください。'
  )
}

function checkStep22(str) {
  if (!state.desktop) {
    return showStep(23)
  } else if (typeof my_things == 'undefined') {
    return console.log('"my_things" という名前の配列を作成してください。')
  } else if (str == '7,samurai,true') {
    return
  } else if (str == '7,samurai,true,The Button') {
    return showStep(23)
  }
  console.log(
    '"my_things" という名前の配列を作成し "The Button" という文字列を追加してください。'
  )
}

function checkStep23(str) {
  if (!state.desktop) {
    return showStep(24)
  } else if (typeof my_things == 'undefined') {
    return console.log('"my_things" という名前の配列を作成してください。')
  } else if (str == true) {
    return console.log('配列に存在しない項目でテストしてください。')
  } else if (str == false) {
    return showStep(24)
  }
  console.log(
    '"my_things" 名前の配列を作成し、"includes()" メソッドを呼び出して下さい。'
  )
}

function checkStep24(str) {
  if (str == window.innerWidth > 400) {
    var displaying = window.innerWidth > 400 ? 'none' : 'inline'
    wider.style.display = displaying
    return showStep(25)
  }
  console.log('もう一度!')
}

function checkStep26(str) {
  if (str.startsWith('Welcome on my domain')) {
    return showStep(27)
  }
  console.log('もう一度!')
}

function checkStep27(str) {
  if (str.startsWith('Welcome on my domain')) {
    return showStep(28)
  } else if (str.startsWith('Please come back soon')) {
    return console.log('"==" 演算子を使ってください。')
  }
  console.log('もう一度!')
}

function checkStep28(str) {
  if (
    (window.innerWidth > 2000 && str.startsWith('Big screen')) ||
    (window.innerWidth < 600 && str.startsWith('Probably a mobile phone'))
  ) {
    return showStep(29)
  } else if (str.startsWith('Decent size')) {
    return showStep(29)
  }
  console.log('すべての命令を正しい順番で入力したか確認してください。')
}

function checkStep30(str) {
  if (str == '0' || str == '1') {
    return
  } else if (str == '2') {
    return showStep(31)
  }
  console.log('もう一度!')
}

function checkArrayLoop(str, nextStep) {
  if (!state.desktop) {
    return showStep(nextStep)
  } else if (typeof my_things == 'undefined') {
    return console.log('"my_things" という名前の配列を作成してください。')
  } else if (my_things.length < 2) {
    return console.log('少なくとも 2項目からなる配列を作成してください。')
  } else if (str == my_things[my_things.length - 1]) {
    return showStep(nextStep)
  } else if (my_things.includes(str)) {
    return
  }
  console.log(
    '"my_things" という配列を作成し、それでループを回してください。'
  )
}

function checkStep32(str) {
  checkArrayLoop(str, 33)
}

function checkStep34(str) {
  checkArrayLoop(str, 35)
}

function checkStep36(str) {
  if (!state.desktop) {
    return showStep(37)
  } else if (typeof greet == 'undefined') {
    return console.log('"greet" という名前の関数を作成してください。')
  } else if (str.startsWith('Hey there ')) {
    return showStep(37)
  }
  console.log(
    '"greet" という名前の関数を作成して、\'Alex\' というパラメータで呼び出して下さい。'
  )
}

function showStep(num, skipSave = false) {
  showElement(`step${num}`)
  state.current_step = num

  return_el.classList.remove('is-active')

  if (!skipSave) {
    memory['latest_step'] = num
    Cookies.set('memory', memory)
  }

  if (num == 3) {
    showSide('sides')
    showSide('sideConcepts')
    showSide('sideFunctions')
  } else if (num == 4) {
    showSide('sideTypes')
    showSide('sideStrings')
  } else if (num == 5) {
    showSide('sideNumbers')
  } else if (num == 9) {
    showSide('sideObjects')
  } else if (num == 14) {
    showSide('sideArrays')
  } else if (num == 17) {
    showSide('sideBooleans')
  } else if (num == 18) {
    showSide('sideVariables')
  } else if (num == 26) {
    showSide('sideConditionals')
  } else if (num == 30) {
    showSide('sideLoops')
  }
}

function showElement(id) {
  var el = document.getElementById(id)
  if (el) {
    el.classList.add('is-active')
    el.scrollIntoView(true)
  }
}

function showSide(id) {
  var el = document.getElementById(id)
  if (el) {
    el.classList.add('is-active')
  }
}

function runSnippet() {
  var els = document.querySelectorAll('.run-snippet')
  if (els.length > 0) {
    els.forEach(el => {
      var snippet_contents =
        el.previousElementSibling.firstElementChild.firstElementChild
          .firstElementChild.firstElementChild
      var snippet_code = snippet_contents.outerText
      var run_button = el.querySelector('a')
      run_button.addEventListener('click', () => {
        eval(snippet_code)
      })
    })
  }
}

function detectPlatform() {
  state.mobile = bowser.mobile || false
  state.tablet = bowser.tablet || false
  state.desktop = !state.mobile && !state.tablet

  if (state.mobile) {
    state.platform = 'mobile'
  } else if (state.tablet) {
    state.platform = 'tablet'
  } else if (state.desktop) {
    state.platform = 'desktop'
  }

  if (bowser.chrome || bowser.chromium) {
    state.browser = 'chrome'
  } else if (bowser.firefox) {
    state.browser = 'firefox'
  } else if (bowser.msedge) {
    state.browser = 'edge'
  } else if (bowser.safari) {
    state.browser = 'safari'
  } else if (bowser.opera) {
    state.browser = 'opera'
  }

  if (bowser.mac) {
    state.os = 'mac'
  } else if (bowser.windows) {
    state.os = 'windows'
  } else if (bowser.linux) {
    state.os = 'linux'
  }

  os_el.value = state.os
  browser_el.value = state.browser
  setPlatform()
}

function setPlatform() {
  html_el.className = ''
  html_el.classList.add(`case-${state.platform}`)
  html_el.classList.add(`case-${state.browser}`)
  html_el.classList.add(`case-${state.os}`)
}

function jumpToStep(num) {
  for (var i = 1; i <= num; i++) {
    showStep(i, true)
  }
}

function resetSteps() {
  return_el.classList.remove('is-active')
  window.scrollTo(0, 0)
  memory = {}
  Cookies.remove('memory')
}

document.addEventListener('DOMContentLoaded', () => {
  detectPlatform()
  runSnippet()

  os_el.addEventListener('change', event => {
    state.os = event.target.value
    setPlatform()
  })

  browser_el.addEventListener('change', event => {
    state.browser = event.target.value
    setPlatform()
  })

  resume_el.addEventListener('click', event => {
    jumpToStep(memory.latest_step)
  })

  reset_el.addEventListener('click', event => {
    var answer = confirm('よろしいですか?')
    if (answer == true) {
      resetSteps()
    }
  })

  if (memory && memory.hasOwnProperty('latest_step')) {
    return_el.classList.add('is-active')
  }

  new ClipboardJS('.snippet-copy', {
    target: trigger => {
      return trigger.previousElementSibling.firstElementChild
        .firstElementChild.firstElementChild.firstElementChild
    }
  })
})
