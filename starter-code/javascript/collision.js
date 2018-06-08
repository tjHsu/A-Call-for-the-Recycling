function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();
    // console.log("detect!!");
    var contactCheck = (!(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    )); 

    if (contactCheck==true) {
        // console.log("Collision!!");
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


// var timeout_id = 0,
//     interval_id=null,
//     hold_time = 50,
//     hold_trigger = $('.btn-goup');

// hold_trigger.mousedown(function() {
//     timeout_id = setTimeout(menu_toggle(), hold_time);
// }).bind('mouseup mouseleave', function() {
//     clearTimeout(timeout_id);
//     // $('.spinner').removeClass('active');
// });


// function menu_toggle() {
//     // $('.spinner').addClass('active');
//     interval_id = setInterval(shuttleUp(),50);
//     console.log("hold!!!!!!");
//   }