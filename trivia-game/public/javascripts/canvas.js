class Trivia{
  constructor(canvas){
    this.canvas=canvas
    this.ctx=canvas.getContext("2d")
    this.height= this.canvas.height
    this.width = this.canvas.width
    this.categories = this.categoriesFill(5,37)
  }

categoriesFill(numberOfCategories,numberOfSpots){
      let myBoardGame = []
      for(let i=0;i<numberOfSpots;i++){

      myBoardGame.push(Math.floor(Math.random()*numberOfCategories))

    }
      return myBoardGame
}

printCategories(){
  
   this.ctx.font = "30px Arial";
   this.ctx.strokeText("Hello World", 10, 50);
  }

circle (x,y,radius,color,radians){
    this.ctx.beginPath();
    //this.ctx.arc()
    this.ctx.beginPath();
    this.ctx.arc(100, 75, 50, 0, 2 * radians);
    this.ctx.fillStyle=color
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(x,y ,radius, 0, radians , true);
    this.ctx.fill();
    this.ctx.closePath()
}
drawPie(){
// Colors
let colors = ['red', 'blue', 'gray', 'orange','purple', 'red', 'blue', 'gray', 'orange','purple', 'red', 'blue', 'gray','orange','purple', ];

// List of Angles
let angles = [Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8, Math.PI /8];

// Temporary variables, to store each arc angles
let beginAngle = 0;
let endAngle = 0;

// Iterate through the angles
for(let i = 0; i < angles.length; i = i + 1) {
  // Begin where we left off
  beginAngle = endAngle;
  // End Angle
  endAngle = endAngle + angles[i];
  
  this.ctx.beginPath();
  // Fill color
  this.ctx.fillStyle = colors[i % colors.length];
  
  // Same code as before
  this.ctx.moveTo(this.width/2, this.height/2);
  this.ctx.arc(this.width/2, this.height/2, this.height/2, beginAngle, endAngle);
  this.ctx.lineTo(this.width/2, this.height/2);
  this.ctx.stroke();
  
  // Fill
  this.ctx.fill();
}
}
line(x,y,xFinal,yFinal,color,lineWidth){
  this.ctx.beginPath()
  this.ctx.strokeStyle=color
  this.ctx.moveTo(x,y)
  this.ctx.lineTo(xFinal,yFinal)
  this.ctx.lineWidth = lineWidth
  this.ctx.stroke()
  this.ctx.closePath()
}
displayBoard(){  
  //Circle outer
  this.drawPie()

  //Circle inner 

  this.circle(this.width/2,this.height/2,this.height/2 - this.height/8,"white",2*Math.PI)

  // Lines

  //Vertical

  this.line(this.width/2,this.height/2,this.width/2,this.height/2+this.height/2,"yellow",45)
  this.line(this.width/2,this.height/2,this.width/2,this.height/2-this.height/2,"yellow",45)
  
  //Horizontal
  this.line(this.width/2,this.height/2,this.width/2+this.height/2,this.height/2,"yellow",45)
  this.line(this.width/2,this.height/2,this.width/2-this.height/2,this.height/2,"yellow",45)
  
  //Horizontal divisions
for(let i=0;i<this.height/2-48;i=i+(((this.height/2-24)-(this.height/2-188))/4)){

  this.line(this.width/2-22,this.height/2-188+i,this.width/2+22,this.height/2-188+i,"black",1)

}
for(let i=0;i<this.height/2-48;i=i+(((this.height/2+188)-(this.height/2+24))/4)){

  this.line(this.width/2-22,(this.height/2+24)+i,this.width/2+22,(this.height/2+24)+i,"black",1)

}

// Vertical divisions

for(let i=0;i<this.width/8+40;i=i+(((this.width/2-24)-(this.width/2-188))/4)){

  this.line(this.width/2-188+i,this.height/2-22,this.width/2-188+i,this.height/2+22,"black",1)

}
for(let i=this.width/2-288;i<this.width/8+288;i=i+(((this.width/2-24)-(this.width/2-188))/4)){

  this.line(this.width/2-188+i,this.height/2-22,this.width/2-188+i,this.height/2+22,"black",1)

}
this.printCategories()
}

coordinatesY(x,radius){
  return Math.pow(Math.pow(radius,2)-Math.pow(x,2),0.5)
}
}