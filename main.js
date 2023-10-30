function onHoverIcon(name, id) {
    let image = document.getElementById(id);
    image.style.opacity = 0;

    setTimeout(function () {
        image.src = './assets/' + name + '.png';
    
        image.style.opacity = 1;
      }, 100);
}

function onLeaveIcon(name, id) {
    let image = document.getElementById(id);
    image.style.opacity = 0;

    setTimeout(function () {
        image.src = './assets/' + name + '.png';
    
        image.style.opacity = 1;
      }, 100);
}
