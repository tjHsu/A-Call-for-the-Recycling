function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();
    console.log("detect!!");
    var contactCheck = (!(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    )); 

    if (contactCheck==true) {
        console.log("Collision!!");
        // $("h1").html( "Hoooray!!" );
        // TweenMax.to($('#shuttle'),1,{
        //     css:{scale:1,rotation:'0'},
        //     delay:0,
        //     ease:Expo.easeOut
        //     });
        // TweenMax.to($('#shuttle'), 1, {
        //     x: '+=0', // Tween to the current x value minus 50
        //     y: '-=3', // Tween to the current y value plus 50
        //     // onComplete: window.reload(),
        //     ease:Back.easeOut
        //     });
        // clearInterval(dropDown);
    }

    return contactCheck;
}
// reference https://stackoverflow.com/questions/2440377/javascript-collision-detection
