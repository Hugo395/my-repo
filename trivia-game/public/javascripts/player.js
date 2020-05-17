class Player{
constructor(game){
  this.game=game
  this.ctx=this.game.ctx
  this.x = this.game.width/2
  this.y = this.game.height/2
  this.categories = [false,false,false,false,false]
  this.actualIndex= 0;
  this.actualCategory=""
}
printPlayer(x,y,color){
  this.ctx.beginPath();
  this.ctx.fillStyle=color
  this.ctx.arc(x, y, 10, 0, 2 * Math.PI, true);
  this.ctx.fill();
  this.ctx.closePath()
}
playerIndex(pressedkey){
   // Boarders with vertical or horizontal interceptions

    if(this.actualIndex===0){
      switch(pressedkey){
        case 37 : this.actualIndex=0;break
        case 38 : this.actualIndex=1;break
        case 39 : this.actualIndex=20;break
        case 40 : this.actualIndex=19;break
      }
    }
    else if(this.actualIndex===5){
      switch(pressedkey){
        case 37 : this.actualIndex=4;break
        case 38 : this.actualIndex=5;break
        case 39 : this.actualIndex=6;break
        case 40 : this.actualIndex=36;break
      }
    }

    else if(this.actualIndex===10){
      switch(pressedkey){
        case 37 : this.actualIndex=28;break
        case 38 : this.actualIndex=9;break
        case 39 : this.actualIndex=10;break
        case 40 : this.actualIndex=11;break
      }
    }
    else if(this.actualIndex===15){
      switch(pressedkey){
        case 37 : this.actualIndex=16;break
        case 38 : this.actualIndex=32;break
        case 39 : this.actualIndex=14;break
        case 40 : this.actualIndex=15;break
      }
    }
  
    //Middle
    else if(this.actualIndex===24){
      switch(pressedkey){
        case 37 : this.actualIndex=23;break
        case 38 : this.actualIndex=33;break
        case 39 : this.actualIndex=25;break
        case 40 : this.actualIndex=29;break
      }
    }
    
    //Up arc 1 to 4
    else if(this.actualIndex>0 && this.actualIndex<5){
      switch(pressedkey){
        case 37 : this.actualIndex--;break
        case 38 : this.actualIndex++;break
        case 39 : this.actualIndex++;break
        case 40 : this.actualIndex--;break
      }
    }
    //Up arc 6 to 9
    else if(this.actualIndex>5 && this.actualIndex<10){
       switch(pressedkey){
        case 37 : this.actualIndex--;break
        case 38 : this.actualIndex--;break
        case 39 : this.actualIndex++;break
        case 40 : this.actualIndex++;break
        }
    }

    //Down arc 11 to 14
    else if(this.actualIndex>10 && this.actualIndex<15){
      switch(pressedkey){
        case 37 : this.actualIndex++;break
        case 38 : this.actualIndex--;break
        case 39 : this.actualIndex--;break
        case 40 : this.actualIndex++;break
      }
    }
    //Down arc 16 to 19
    else if(this.actualIndex>10 && this.actualIndex<20){
      switch(pressedkey){
        case 37 : this.actualIndex++;break
        case 38 : this.actualIndex++;break
        case 39 : this.actualIndex--;break
        case 40 : this.actualIndex--;break
      }
    }
    //Horizontal
    else if(this.actualIndex>19 && this.actualIndex<29){
      switch(pressedkey){
        case 37 : this.actualIndex--;break
        case 38 : ;break
        case 39 : if(this.actualIndex===28){this.actualIndex=10} else {this.actualIndex++};break
        case 40 : ;break
      }
    }
    //Vertical
    else if(this.actualIndex>28 && this.actualIndex<33){
      switch(pressedkey){
        case 37 : ;break
        case 38 : if(this.actualIndex===29){this.actualIndex=24} else {this.actualIndex--};break
        case 39 : ;break
        case 40 : if(this.actualIndex===32){this.actualIndex=15} else {this.actualIndex++};break
      }
    }
    else if(this.actualIndex>32 && this.actualIndex<37){
      switch(pressedkey){
        case 37 : ;break
        case 38 : if(this.actualIndex===36){this.actualIndex=5} else {this.actualIndex++};break
        case 39 : ;break
        case 40 : if(this.actualIndex===33){this.actualIndex=24} else {this.actualIndex--};break
      }
    }
  }
playerLocation(){
  switch(this.actualIndex){
    case 0  : this.x=260 ; this.y =260 ;this.actualCategory="";break
    case 1  : this.x=280 ; this.y =210 ;this.actualCategory="H";break
    case 2  : this.x=309 ; this.y =140 ;this.actualCategory="A";break
    case 3  : this.x=370 ; this.y =80  ;this.actualCategory="P";break
    case 4  : this.x=440 ; this.y =50  ;this.actualCategory="E";break
    case 5  : this.x=490 ; this.y =45  ;this.actualCategory="";break
    case 6  : this.x=540 ; this.y =50  ;this.actualCategory="S";break
    case 7  : this.x=610 ; this.y =80  ;this.actualCategory="H";break
    case 8  : this.x=670 ; this.y =140 ;this.actualCategory="A";break
    case 9  : this.x=700 ; this.y =210 ;this.actualCategory="P";break
    case 10 : this.x=710 ; this.y =260 ;this.actualCategory="";break
    case 11 : this.x=700 ; this.y =310 ;this.actualCategory="P";break
    case 12 : this.x=670 ; this.y =390 ;this.actualCategory="E";break
    case 13 : this.x=610 ; this.y =445 ;this.actualCategory="S";break
    case 14 : this.x=540 ; this.y =475 ;this.actualCategory="H";break
    case 15 : this.x=490 ; this.y =480 ;this.actualCategory="";break
    case 16 : this.x=440 ; this.y =475 ;this.actualCategory="A";break
    case 17 : this.x=370 ; this.y =445 ;this.actualCategory="P";break
    case 18 : this.x=309 ; this.y =390 ;this.actualCategory="E";break
    case 19 : this.x=280 ; this.y =310 ;this.actualCategory="S";break
    case 20 : this.x=280 ; this.y =270 ;this.actualCategory="P";break
    case 21 : this.x=280 ; this.y =210 ;this.actualCategory="E";break
    case 22 : this.x=280 ; this.y =210 ;this.actualCategory="S";break
    case 23 : this.x=280 ; this.y =210 ;this.actualCategory="H";break
    case 24 : this.x=280 ; this.y =210 ;this.actualCategory="";break
    case 25 : this.x=280 ; this.y =210 ;this.actualCategory="S";break
    case 26 : this.x=280 ; this.y =210 ;this.actualCategory="H";break
    case 27 : this.x=280 ; this.y =210 ;this.actualCategory="A";break
    case 28 : this.x=280 ; this.y =210 ;this.actualCategory="P";break
    case 29 : this.x=280 ; this.y =210 ;this.actualCategory="E";break
    case 30 : this.x=280 ; this.y =210 ;this.actualCategory="S";break
    case 31 : this.x=280 ; this.y =210 ;this.actualCategory="H";break
    case 32 : this.x=280 ; this.y =210 ;this.actualCategory="A";break
    case 33 : this.x=280 ; this.y =210 ;this.actualCategory="A";break
    case 34 : this.x=280 ; this.y =210 ;this.actualCategory="H";break
    case 35 : this.x=280 ; this.y =210 ;this.actualCategory="S";break
    case 36 : this.x=280 ; this.y =210 ;this.actualCategory="E";break


  }
}
}