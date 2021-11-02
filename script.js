const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');



function changeBorderRadius() {
    const borderRadiusSize = box1.style.borderRadius;
    if (borderRadiusSize < 50) {
        box1.style.borderRadius = "50px"
    }
} 

box1.addEventListener('click', changeBorderRadius);

