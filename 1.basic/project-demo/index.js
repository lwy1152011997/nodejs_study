
    const wrapperDiv = document.querySelector('.wrapper');
    let isBaoShu = false;
    wrapperDiv.addEventListener('click', function() {
        wrapperDiv.innerHTML= isBaoShu ? '有一个人来买瓜' : '萨日朗!萨日朗!';
        isBaoShu = !isBaoShu
    })
