'use strict'//strict 모드 활성화

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "다크 모드";
    }
    else {
        this.textContent = "기본 모드";
    }
    console.log('current class name: ' + className);
});
