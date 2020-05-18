class Player{
constructor(game){
  this.game=game
  this.ctx=this.game.ctx
  this.x = this.game.width/2
  this.y = this.game.height/2
  this.categories = [false,false,false,false,false]
  this.actualIndex= 24;
  this.actualCategory=""
  this.color = "yellow"
}
printPlayer(){
  console.log(this.x)
  console.log(this.y)
  console.log(this.actualIndex)
  const colors=['red', 'blue', 'gray', 'orange','purple']

    // List of Angles
    let angles = [2*Math.PI /5, 2*Math.PI /5, 2*Math.PI /5, 2*Math.PI /5, 2*Math.PI /5];
    let index 
    // Temporary variables, to store each arc angles
    let beginAngle = 0;
    let endAngle = 0;
    
    // Iterate through the angles
    for(let i = 0; i < angles.length;i++) {
      // Begin where we left off
      beginAngle = endAngle;
      // End Angle
      endAngle = endAngle + angles[i];
      
      this.ctx.beginPath();
      // Fill color
      if(this.categories[i] && i % colors.length){
         index=i % colors.length;
         this.ctx.fillStyle = colors[index];
      }
      else{
        this.ctx.fillStyle = this.color
      }      
      
      // Same code as before
      this.ctx.moveTo(this.x, this.y);
      this.ctx.arc(this.x, this.y, 10, beginAngle, endAngle);
      
      this.ctx.lineTo(this.x, this.y);
      this.ctx.stroke();
      
      // Fill
      this.ctx.fill();
    }
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
    case 0  : this.x=285 ; this.y =250 ;this.actualCategory="";break
    case 1  : this.x=290 ; this.y =200 ;this.actualCategory="H";break
    case 2  : this.x=320 ; this.y =135 ;this.actualCategory="A";break
    case 3  : this.x=375 ; this.y =70  ;this.actualCategory="P";break
    case 4  : this.x=450 ; this.y =40  ;this.actualCategory="E";break
    case 5  : this.x=500 ; this.y =35  ;this.actualCategory="";break
    case 6  : this.x=550 ; this.y =40  ;this.actualCategory="S";break
    case 7  : this.x=620 ; this.y =70  ;this.actualCategory="H";break
    case 8  : this.x=680 ; this.y =135 ;this.actualCategory="A";break
    case 9  : this.x=710 ; this.y =200 ;this.actualCategory="P";break
    case 10 : this.x=715 ; this.y =250 ;this.actualCategory="";break
    case 11 : this.x=710 ; this.y =300 ;this.actualCategory="P";break
    case 12 : this.x=680 ; this.y =380 ;this.actualCategory="E";break
    case 13 : this.x=620 ; this.y =435 ;this.actualCategory="S";break
    case 14 : this.x=550 ; this.y =465 ;this.actualCategory="H";break
    case 15 : this.x=500 ; this.y =470 ;this.actualCategory="";break
    case 16 : this.x=445 ; this.y =465 ;this.actualCategory="A";break
    case 17 : this.x=375 ; this.y =435 ;this.actualCategory="P";break
    case 18 : this.x=320 ; this.y =380 ;this.actualCategory="E";break
    case 19 : this.x=290 ; this.y =305 ;this.actualCategory="S";break
    case 20 : this.x=335 ; this.y =250 ;this.actualCategory="P";break
    case 21 : this.x=375 ; this.y =250 ;this.actualCategory="E";break
    case 22 : this.x=415; this.y =250 ;this.actualCategory="S";break
    case 23 : this.x=460 ; this.y =250 ;this.actualCategory="H";break
    case 24 : this.x=500 ; this.y =250 ;this.actualCategory="";break
    case 25 : this.x=540 ; this.y =250 ;this.actualCategory="S";break
    case 26 : this.x=580 ; this.y =250 ;this.actualCategory="H";break
    case 27 : this.x=620 ; this.y =250 ;this.actualCategory="A";break
    case 28 : this.x=660 ; this.y =250 ;this.actualCategory="P";break
    case 29 : this.x=500 ; this.y =290 ;this.actualCategory="E";break
    case 30 : this.x=500 ; this.y =330 ;this.actualCategory="S";break
    case 31 : this.x=500 ; this.y =370 ;this.actualCategory="H";break
    case 32 : this.x=500 ; this.y =410 ;this.actualCategory="A";break
    case 33 : this.x=500 ; this.y =210 ;this.actualCategory="A";break
    case 34 : this.x=500 ; this.y =165 ;this.actualCategory="H";break
    case 35 : this.x=500 ; this.y =125 ;this.actualCategory="S";break
    case 36 : this.x=500 ; this.y =85 ;this.actualCategory="E";break


  }
}
}