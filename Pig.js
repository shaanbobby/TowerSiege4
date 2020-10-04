class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visibility=225;
    //this.image = loadImage("sprites/enemy.png");
  }
  score(){
    if(this.visibility<0&&this.visibility>-105){
      score++;
    }
  }
display(){
  fill("turquoise");
  if(this.body.speed<5){
  super.display();
  }
else{
  push()
  World.remove(world,this.body)
  this.visibility=this.visibility-5;
pop();
}
}
}
