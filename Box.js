class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    this.visibility=225;
  }
  score(){
    if(this.visibility<0&&this.visibility>-105){
      score++;
    }
  }
display(){
  fill("blue");
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
};
