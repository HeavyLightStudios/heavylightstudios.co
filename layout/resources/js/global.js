function getPosition(element) {
    var e = document.getElementById(element);
    var left = 0;
    var top = 0;
    do {
        left += e.offsetLeft;
        top += e.offsetTop;
    } while (e = e.offsetParent);
    return [left, top];
}
function jumpTo(id) {
    if (id == 'home') {
        window.scrollTo(0, 0);
        history.pushState('', "" + document.title, "/");
    }
    else {
        var position = getPosition(id);
        window.scrollTo(position[0], position[1]);
        history.pushState('', "" + document.title, "/" + id);
    }
}
window.onload = function (ev) {
    var url = location.pathname;
    if (url === '/') {
        jumpTo('home');
    }
    else if (url === '/about') {
        jumpTo('about');
    }
    else if (url === '/contact') {
        jumpTo('contact');
    }
};
