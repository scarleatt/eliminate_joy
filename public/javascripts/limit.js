if (screen.width > 1000) {
    alert('请用手机微信/浏览器打开链接');
    window.location.href = window.location.href.replace('login', 'err');
}