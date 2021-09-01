(function(){
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    function parallax(e){
        let w = window.innerWidth / 2;
        let h = window.innerHeight / 2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let primary_img = '${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%';
        let x ='${primary_img}';
        console.log(x);
    }
})()