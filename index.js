// Import stylesheets
import './style.css';

// Write Javascript code!
document.querySelector('body').addEventListener('mousemove',eyeBall);

function eyeBall() {
  let eye = document.querySelectorAll('.eye');
  eye.forEach(function(eye) {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth/ 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight/ 2);
    // console.log('x=',x)
    let radian = Math.atan2(event.pageX - x,event.pageY - y);
    let rot = (radian * (180 / Math.PI) * -1) + 270;
    eye.style.transform = "rotate(" + rot + "deg)"
  })
} 
