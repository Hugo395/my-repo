class Trivia{
  constructor(canvas){
    this.canvas=canvas
    this.ctx=canvas.getContext("2d")
    this.height= this.canvas.height
    this.width = this.canvas.width
  }

initialBoard(){  
  //Circles
  this.ctx.beginPath();
  this.ctx.fillStyle="blue"
  this.ctx.arc(this.width/2,this.height/2 , this.height/2, 0, Math.PI * 2, true);
  this.ctx.fill();
  

  //diagonal

  this.ctx.beginPath()
  this.ctx.strokeStyle="gray"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(this.width/2+this.height/2.83,this.height/2+this.height/2.83)
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.strokeStyle="gray"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(this.width/2-this.height/2.83,this.height/2-this.height/2.83)
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.strokeStyle="gray"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(this.width/2-this.height/2.83,this.height/2+this.height/2.83)
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.strokeStyle="gray"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(this.width/2+this.height/2.83,this.height/2-this.height/2.83)
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  //oblique

  this.ctx.beginPath()
  this.ctx.strokeStyle="orange"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(95+this.width/2,this.height/2+coordinatesY(95,this.height/2))
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.strokeStyle="pink"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(95+this.width/2,this.height/2-coordinatesY(95,this.height/2))
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.strokeStyle="orange"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(-95+this.width/2,this.height/2+coordinatesY(-95,this.height/2))
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.strokeStyle="pink"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(-95+this.width/2,this.height/2-coordinatesY(-95,this.height/2))
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.strokeStyle="orange"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(232+this.width/2,this.height/2+coordinatesY(232,this.height/2))
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.strokeStyle="pink"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(232+this.width/2,this.height/2-coordinatesY(232,this.height/2))
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.strokeStyle="orange"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(-232+this.width/2,this.height/2+coordinatesY(-232,this.height/2))
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.strokeStyle="pink"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(-232+this.width/2,this.height/2-coordinatesY(-232,this.height/2))
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.fillStyle="white"
  this.ctx.arc(this.width/2,this.height/2 , this.height/2 - this.height/8, 0, Math.PI * 2, true);
  this.ctx.fill();

  // Lines

  //Vertical
  this.ctx.beginPath()
  this.ctx.strokeStyle="yellow"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(this.width/2,this.height/2+this.height/2)
  this.ctx.lineWidth = 45
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.strokeStyle="yellow"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(this.width/2,this.height/2-this.height/2)
  this.ctx.lineWidth = 45
  this.ctx.stroke()
  this.ctx.closePath()
  
  // Horizontal Stroke

  this.ctx.beginPath()
  this.ctx.strokeStyle="green"
  this.ctx.moveTo(this.width/2-22,this.height/2-188)
  this.ctx.lineTo(this.width/2+22,this.height/2-188)
  this.ctx.lineWidth = 5
  this.ctx.stroke()
  this.ctx.closePath()

  //Horizontal
  this.ctx.beginPath()
  this.ctx.strokeStyle="yellow"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(this.width/2+this.height/2,this.height/2)
  this.ctx.lineWidth = 45
  this.ctx.stroke()
  this.ctx.closePath()

  this.ctx.beginPath()
  this.ctx.strokeStyle="yellow"
  this.ctx.moveTo(this.width/2,this.height/2)
  this.ctx.lineTo(this.width/2-this.height/2,this.height/2)
  this.ctx.lineWidth = 45
  this.ctx.stroke()
  this.ctx.closePath()

  // Horizontal Stroke middle
    this.ctx.beginPath()
    this.ctx.strokeStyle="green"
    this.ctx.moveTo(this.width/2-22,this.height/2-24)
    this.ctx.lineTo(this.width/2+22,this.height/2-24)
    this.ctx.lineWidth = 5
    this.ctx.stroke()
    this.ctx.closePath()

    this.ctx.beginPath()
    this.ctx.strokeStyle="green"
    this.ctx.moveTo(this.width/2-22,this.height/2+24)
    this.ctx.lineTo(this.width/2+22,this.height/2+24)
    this.ctx.lineWidth = 5
    this.ctx.stroke()
    this.ctx.closePath()
}
}

function coordinatesY(x,radius){
  return Math.pow(Math.pow(radius,2)-Math.pow(x,2),0.5)
}
function axiosgetImage (){

  axios
  

}