// var ctx = document.getElementById('canvas').getContext('2d');
//   var img = new Image();
//   imgScale = 1/1;
//   img.onload = function() {
//     ctx.drawImage(img, 0, 0,150*imgScale,150);
//   };
//   img.src = 'img/spaceShuttle.svg';

window.onload = moveFn;
function moveFn(){
	var div=document.getElementById("shuttle");
	// /* 利用div變數儲存ID名稱為box的物件 */
	// var divX="0px"
	// /* 利用變數儲存div預設的x位置 */
	// var divY=window.innerHeight/2-100+"px";
	// /* 利用變數儲存div預設的y位置 */
	// var moveX=window.innerWidth/2-100+"px"
	// div.style.left=divX
	// div.style.top=divY
    // TweenMax.to(div,1,{css:{left:moveX},ease:Expo.easeOut});
    
    TweenMax.to($('#receiver'), 1, {
        x: '-=200', // Tween to the current x value minus 50
        y: '+=0', // Tween to the current y value plus 50
        // onComplete: myFunction,
        ease:Back.easeOut
        });
    // TweenMax.to($('#shuttle'), 5, {
    //     x: '-=0', // Tween to the current x value minus 50
    //     y: '+=200', // Tween to the current y value plus 50
    //     // onComplete: myFunction,
    //     ease:Back.easeOut
    //     });

    // TweenMax.to(div,2,{
    //     css:{scale:1,rotation:30},
    //     delay:1,
    //     ease:Expo.easeOut
    //     });
    // TweenMax.to(div,3,{
    //     css:{scale:1,rotation:-20},
    //     delay:2,
    //     ease:Expo.easeOut
    //     });
    // TweenMax.to(div,2,{
    //     css:{scale:1,rotation:0},
    //     delay:3,
    //     ease:Expo.easeOut
    //     });
    TweenMax.to($('#penguin'), 8, {
        x: '+=30', // Tween to the current x value minus 50
        y: '+=10', // Tween to the current y value plus 50
        // onComplete: myFunction,
        ease:Back.easeOut
        });    
    // TweenMax.to($('#penguin'), 1, {
    //     x: '-=0', // Tween to the current x value minus 50
    //     y: '-=50', // Tween to the current y value plus 50
    //     // onComplete: myFunction,
    //     ease:Back.easeOut
    //     });    

}



function shuttleUp(){
	// var div=document.getElementById("shuttle");

    TweenMax.to($('#shuttle'), 5, {
        x: '-=0', // Tween to the current x value minus 50
        y: '-=50', // Tween to the current y value plus 50
        // onComplete: myFunction,
        ease:Back.easeOut
        });
}

function shuttleAnticlock() {
    TweenMax.to($('#shuttle'),1,{
        css:{scale:1,rotation:'-=5'},
        delay:0,
        ease:Expo.easeOut
        });
}

function shuttleClock() {
    TweenMax.to($('#shuttle'),1,{
        css:{scale:1,rotation:'+=5'},
        delay:0,
        ease:Expo.easeOut
        });
}


function shipLeft(){
	// var div=document.getElementById("shuttle");

    TweenMax.to($('#receiver'), 1, {
        x: '-=50', // Tween to the current x value minus 50
        y: '+=0', // Tween to the current y value plus 50
        // onComplete: myFunction,
        ease:Back.easeOut
        });
    console.log("left!left!");
}

function shipRight(){
	// var div=document.getElementById("shuttle");

    TweenMax.to($('#receiver'), 1, {
        x: '+=50', // Tween to the current x value minus 50
        y: '+=0', // Tween to the current y value plus 50
        // onComplete: myFunction,
        ease:Back.easeOut
        });
    console.log("right!right!");
}


function shuttleDown(){
	// var div=document.getElementById("shuttle");

    TweenMax.to($('#shuttle'), 1, {
        x: '-=0', // Tween to the current x value minus 50
        y: '+=1', // Tween to the current y value plus 50
        // onComplete: myFunction,
        ease:Back.easeOut
        });
    console.log("down!down!");
}

setInterval(shuttleDown,50);

$("body").keydown(function(e){
    console.log(e);

    switch (e.keyCode) {
        case 38:
            console.log("up!up!")
            shuttleUp();    
            break;
        
        case 37:
            shuttleClock();
            break;
        
        case 39:
            shuttleAnticlock();
            break;
    
        case 65:
            shipLeft();
            break;
        
        case 68:
            shipRight();
            break;

        default:
            break;
    }
    

    
    
    
  })

