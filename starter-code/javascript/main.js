var dropDown=null;

//////////////////////////////
//////set begin animationg////
//////////////////////////////
    TweenMax.to($('.asteroid.one'), 5, {
        x: '-=2000', 
        y: '-=1000',
        repeat: -1, 
        })
    
    TweenMax.to($('.asteroid.two'), 9, {
        x: '-=2000', 
        y: '-=1000',
        repeat: -1, 
        })

    TweenMax.to($('.asteroid.three'), 4, {
        x: '-=2000', 
        y: '-=1000',
        repeat: -1, 
        })
    TweenMax.to($('.ufo.one'), 10, {
        x: '-=2000', 
        y: '-=1000',
        rotation: '180',
        repeat: 1, 
        })
    TweenMax.to($('.ufo.two'), 20, {
        x: '-=2000', 
        y: '-=1000',
        // rotation: '-90',
        repeat: -1, 
        })
    TweenMax.to($('#shuttle'), 0.2, {
        x: '-=0', 
        y: '-=5',
        // rotation: '+5',
        repeat: -1, 
        })
    TweenMax.to($('#shuttle'), 0.2, {
        x: '+=0', 
        y: '+=5',
        // rotation: '-5',
        delay: 0.2,
        repeat: -1, 
        })
    

        // CustomWiggle.create("Wiggle.random", {wiggles:wiggles, type:"random"});

///////////////////////////////
///////////////////////////////
///////////////////////////////



$('#sky').css('background','#343A3E');
$('#sea').css('background','#343A3E');
$('#ship').hide();
$('#rope').hide();
$('#platform').hide();
$('#roadcorn').hide();
$('#island').hide();
$('#penguin').hide();





function moveFn(button){
    $('#sky').css('transition','all 2s ease-in');
    $('#sky').css('background','#2DB0FE');
    $('#sea').css('transition','all 3s ease-in');
    $('#sea').css('background','#0680CB');
    // transition: all .2s ease-in;

    $('#ship').show();
    $('#rope').show();
    $('#platform').show();
    $('#roadcorn').show();
    $('#island').show();
    $('#penguin').show();
    $('.asteroid').hide();  
    $('.ufo').hide();
    TweenMax.to($('#shuttle'),3,{
        css:{scale:1,rotation:'0'},
        delay:0,
        ease:Expo.easeOut
        });

    // $('.asteroid.')
    // $('.asteroid.')
    // xOri=document.getElementById("shuttle")._gsTransform.x;
    // yOri=document.getElementById("shuttle")._gsTransform.y;
    $("h1").html( "Let's go" );
    setTimeout(function () {
        $("h1").html( "" );
    },1000);
    // var div=document.getElementById("shuttle");
    TweenMax.to($('#receiver'), 0.5, {
        x: '-=100', 
        y: '+=0', 
        // ease:Back.easeOut
        });
    TweenMax.to($('#receiver'), 1, {
        x: 0, 
        y: 0,
        delay: 0.5 ,
        ease:Back.easeOut
        });
    

    TweenMax.to($('#penguin'), 8, {
        x: '+=20', 
        y: '+=10', 
        ease:Back.easeOut
        });    
    button.style.visibility = "hidden";




function shuttleUp(){
    // var div=document.getElementById("shuttle");
    var rad = Math.PI*document.getElementById("shuttle")._gsTransform.rotation/180
    var xMove= 150*Math.sin(rad);
    var yMove= 150*Math.cos(rad);
    var xCurr=document.getElementById("shuttle")._gsTransform.x;
    var yCurr=document.getElementById("shuttle")._gsTransform.y;
    TweenMax.to($('#shuttle'), 5, {
        css:{x:xCurr+xMove, y:yCurr-yMove},
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
        x: '-=50', 
        y: '+=0', 
        ease:Back.easeOut
        });
}

function shipRight(){
	// var div=document.getElementById("shuttle");
    TweenMax.to($('#receiver'), 1, {
        x: '+=50', 
        y: '+=0', 
        ease:Back.easeOut
        });
}


function shuttleDown(){
    TweenMax.to($('#shuttle'), 1, {
        x: '-=0', 
        y: '+=15', 
        ease:Back.easeOut
        });
}



dropDown = setInterval(checkGameOver,50);

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

// ////click part/////

// $(document).click(function(e) {
//     var divWidth = $("#sky").width();        
//     var clickX = e.clientX;
//     if (clickX > divWidth/2) {
//         console.log("sky was clicked on the right");
//         // shuttleAnticlock();
//     } else {
//         console.log("sky was clicked on the left");
//         shuttleClock();
//     }
// });

$(document).on("taphold",function(){
    console.log("sky was touched");
    shuttleUp();
});
  

// ///////////////////






}

function pageReload(button) {
    location.reload();
}

function landingPrepare() {
    var xCurr=document.getElementById("shuttle")._gsTransform.x;
    var yCurr=document.getElementById("shuttle")._gsTransform.y;
    var angle = 180*Math.tanh(xCurr/-yCurr) / (Math.PI) ;



    TweenMax.to($('#shuttle'),1,{
        css:{scale:1,rotation:angle},
        delay:0,
        ease:Expo.easeOut
        });
    TweenMax.to($('#shuttle'), 3, {
        x: 0, 
        y: 0, 
        delay: 1,
        ease:Back.easeOut
        });
    TweenMax.to($('#shuttle'),2,{
        css:{scale:1,rotation:0},
        delay:3,
        ease:Expo.easeOut
        });
}





function gameRestart(button){
    // location.reload();
    var xCurr=document.getElementById("shuttle")._gsTransform.x;
    var yCurr=document.getElementById("shuttle")._gsTransform.y;
    var angle = 180*Math.tanh(xCurr/-yCurr) / (Math.PI) ;



    TweenMax.to($('#shuttle'),1,{
        css:{scale:1,rotation:angle},
        delay:0,
        ease:Expo.easeOut
        });
    TweenMax.to($('#shuttle'), 3, {
        x: 0, 
        y: 0, 
        delay: 1,
        ease:Back.easeOut
        });
    TweenMax.to($('#shuttle'),2,{
        css:{scale:1,rotation:0},
        delay:3,
        ease:Expo.easeOut
        });
    button.style.visibility = "hidden";
    $("h1").html( "" );   
    setTimeout(moveFn,4000);
    setTimeout(function () { 
        dropDown=setInterval(checkGameOver,50);
    },5000);
    // dropDown = setInterval(checkGameOver,50);

    // setTimeout(,6000)
}

function checkGameOver(){
    // var div=document.getElementById("shuttle");
    
    TweenMax.to($('#shuttle'), 1, {
        x: '-=0', 
        y: '+=15', 
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
            x: '+=0', 
            y: '-=3', 
            // onComplete: window.reload(),
            ease:Back.easeOut
            });
        clearInterval(dropDown);
        var r= $('<br> <button type="button" class="btn btn-warning" onclick="pageReload(this)">Play Again</button>');
        var l= $('<br> <button type="button" class="btn btn-info" onclick="window.location=\'https://github.com/tjHsu/A-Call-for-the-Recycling\';">Visit Github Repo</button>')
        $("h1").append(r);
        $("h1").append(l);
    };

    if (isCollide(shuttle,sea)){

        $("h1").html( "Ooooops!!" );
        TweenMax.to($('#shuttle'),2,{
            css:{scale:1,rotation:'90'},
            delay:0.2,
            ease:Expo.easeOut
            });
        TweenMax.to($('#shuttle'), 2, {
            x: '+=0', 
            y: '+=50', 
            // onComplete: location.reload(),            
            ease:Back.easeOut
            });
        clearInterval(dropDown);
        var r= $('<br> <button type="button" class="btn btn-primary" onclick="gameRestart(this)">Restart</button>');
        $("h1").append(r);
    }

}

///////////////////////////////////////
/////////////touch event///////////////
///////////////////////////////////////
// window.addEventListener('mousedown', function() {
//     $("h1").html( "Touch Touch" );
    
//     // the user touched the screen!
//   });

//   $("#sky").click(function(e) {
//     var divWidth = $("#sky").width();        
//     var clickX = e.clientX;
//     if (clickX > divWidth/2) {
//         console.log("sky was clicked on the right");
//         shuttleClock();
//     } else {
//         console.log("sky was clicked on the left");
//         shuttleAntiClock();
//     }
// });
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////





//////////some reference/////////////


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
    //     x: '-=0', 
    //     y: '+=200', 
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
    /////////////////////////////////