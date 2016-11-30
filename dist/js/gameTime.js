if (document.querySelector('.time-over')) {
    const gameOver = document.querySelector('.time-over');

    gameOver.style.width = screen.width + 'px';
    gameOver.style.height = screen.height + 'px';
}


if (document.querySelector('#process-current')) {
    const processCurrent = document.querySelector('#process-current');
    //获取 processBar 需要移动的距离, 并转化为数值
    let processWidth = Number((getComputedStyle(processCurrent).width).slice(0, -3));

    //每过 1s 后的增量
    let smallWidth = processWidth / 10;
    let currentSmallWidth = smallWidth;

    let timer1 = setInterval(function () {
        currentSmallWidth += smallWidth;

        document.querySelector('#process-current').style.marginLeft = (currentSmallWidth - processWidth) + 'px';

        if (Number(processCurrent.style.marginLeft.slice(0, -3)) >= 0) {
            clearInterval(timer1);
            console.log('game is over');
            console.log(document.querySelector('.time-over'));
            console.log(document.querySelector('.container'));

            document.querySelector('.time-over').style.display = 'block';
            document.querySelector('.container').style.display = 'none';
        }
    }, 1000);
}