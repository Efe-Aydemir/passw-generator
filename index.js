let generateBtn = document.querySelector('#generate')
let copyBtn = document.querySelector('#copy')
let result = document.querySelector('#result')

let charakterArray = ['!','^','#','+','$','%','&','=','?','*','-','|','_','@','<','>']
let uplettersArray = ['A','B','C','D','E','F','G','H','I','İ','J','K','L','M','N','O','P','R','S','T','U','V','W','Y','Z']
let loLettersArray = ['a','b','c','d','e','f','g','h','ı','i','j','k','l','m','n','o','p','r','s','t','u','v','w','y','z']




generateBtn.addEventListener('click', () => {
    let index = 1
    let passwa= ``

    while (index <= 3) {
        let randNum = Math.floor(Math.random()*10)
        passwa+=randNum
        let randChar = charakterArray[Math.floor(Math.random()*16)]
        passwa+=randChar
        let randupLet = uplettersArray[Math.floor(Math.random()*22)]
        passwa+=randupLet
        let randlowLet = loLettersArray[Math.floor(Math.random()*22)]
        passwa+=randlowLet
        index++
    }
    

    result.innerHTML = passwa
})

