window.onload = moveFn;
function moveFn(){
    var div=document.getElementById("shuttle");
    TweenMax.to($('#receiver'), 3, {
        x: '-=1000', // Tween to the current x value minus 50
        y: '+=0', // Tween to the current y value plus 50
        // onComplete: myFunction,
        ease:Back.easeOut
        });

    TweenMax.to($('#penguin'), 8, {
        x: '+=30', // Tween to the current x value minus 50
        y: '+=10', // Tween to the current y value plus 50
        // onComplete: myFunction,
        ease:Back.easeOut
        });    


	// /* 利用div變數儲存ID名稱為box的物件 */
	// var divX="0px"
	// /* 利用變數儲存div預設的x位置 */
	// var divY=window.innerHeight/2-100+"px";
	// /* 利用變數儲存div預設的y位置 */
	// var moveX=window.innerWidth/2-100+"px"
	// div.style.left=divX
	// div.style.top=divY
    // TweenMax.to(div,1,{css:{left:moveX},ease:Expo.easeOut});
    
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
}

function gameRestart(){
    location.reload();
}

function shuttleUp(){
    // var div=document.getElementById("shuttle");
    // console.log(document.getElementById("shuttle")._gsTransform.rotation);
    // console.log(document.getElementById("shuttle")._gsTransform);
    var rad = Math.PI*document.getElementById("shuttle")._gsTransform.rotation/180
    var xMove= 100*Math.sin(rad);
    var yMove= 100*Math.cos(rad);
    var xCurr=document.getElementById("shuttle")._gsTransform.x;
    var yCurr=document.getElementById("shuttle")._gsTransform.y;
    // var x= 
    // console.log("BUG: ",xMove," ",yMove);
    TweenMax.to($('#shuttle'), 5, {
        // x: '+=xMove', // Tween to the current x value minus 50
        // y: '-=yMove', // Tween to the current y value plus 50
        css:{x:xCurr+xMove, y:yCurr-yMove},
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
    // console.log("left!left!");
}

function shipRight(){
	// var div=document.getElementById("shuttle");

    TweenMax.to($('#receiver'), 1, {
        x: '+=50', // Tween to the current x value minus 50
        y: '+=0', // Tween to the current y value plus 50
        // onComplete: myFunction,
        ease:Back.easeOut
        });
    // console.log("right!right!");
}




function shuttleDown(){
	// var div=document.getElementById("shuttle");

    TweenMax.to($('#shuttle'), 1, {
        x: '-=0', // Tween to the current x value minus 50
        y: '+=15', // Tween to the current y value plus 50
        // onComplete: myFunction,
        ease:Back.easeOut
        });
    var shuttle=document.getElementById("shuttle");
    var platform=document.getElementById("platform");
    var sea=document.getElementById("sea");
    if (isCollide (shuttle,platform)){
        $("h1").html( "Hoooray!!" );
        TweenMax.to($('#shuttle'),1,{
            css:{scale:1,rotation:'0'},
            delay:0,
            ease:Expo.easeOut
            });
        TweenMax.to($('#shuttle'), 1, {
            x: '+=0', // Tween to the current x value minus 50
            y: '-=3', // Tween to the current y value plus 50
            // onComplete: window.reload(),
            ease:Back.easeOut
            });
        clearInterval(dropDown);
    };
    if (isCollide(shuttle,sea)){

        $("h1").html( "Ooooops!!" );
        TweenMax.to($('#shuttle'),2,{
            css:{scale:1,rotation:'90'},
            delay:0,
            // onComplete: window.reload(),
            ease:Expo.easeOut
            });
        TweenMax.to($('#shuttle'), 2, {
            x: '+=0', // Tween to the current x value minus 50
            y: '+=50', // Tween to the current y value plus 50
            
            ease:Back.easeOut
            });
        clearInterval(dropDown);
        // var btn = document.createElement("BUTTON");
        // var t = document.createTextNode("Restart");
        // btn.appendChild(t);
        var r= $('<br> <button type="button" class="btn btn-primary" onclick="gameRestart()">Restart</button>');
        $("h1").append(r);
    }

    // console.log("down!down!");
}




var dropDown = setInterval(shuttleDown,50);


var keys = {};
$(document).keydown(function (e) {
    keys[e.which] = true;
    var code = 0;
    if (keys[37]==true && keys[39]==true && keys[65]==true){
        shipLeft();
        shuttleUp();    
    } else if (keys[37]==true && keys[39]==true && keys[68]==true){
        shipRight();
        shuttleUp();    
    } else if (keys[37]==true && keys[39]==true) {
        shuttleUp();    
    } else if (keys[37]==true && keys[65]==true){
        shipLeft();
        shuttleClock();
    } else if (keys[37]==true && keys[68]==true){
        shipRight();
        shuttleClock();
    } else if (keys[39]==true && keys[65]==true){
        shipLeft();
        shuttleAnticlock();
    } else if (keys[39]==true && keys[68]==true){
        shipRight();
        shuttleAnticlock();
    } else {
        code = e.which;
     
        switch (code) {
            
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
    }
});

$(document).keyup(function (e) {
    delete keys[e.which];
});
