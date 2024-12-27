window.onload = function(){
    var deviceWidth = window.screen.width
    if (deviceWidth) {
        const fontSize = Math.min(deviceWidth, 650) / 375 + 'px';
        document.documentElement.style.fontSize = fontSize;
    }
}