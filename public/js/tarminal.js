//terminal demo
if (document.getElementsByClassName('demo').length > 0) {
    var i = 0;
    var txt = `Welcome my site !
    - My name is Yuki Irie
    - Ochanomizu univ. sophmore
    - love drawing
    - love eating
    - if you want to know more about me
    - please click "ABOUTME"`;
    var speed = 60;
  
    function typeItOut () {
      if (i < txt.length) {
        document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }
  
    setTimeout(typeItOut, 1800);
}