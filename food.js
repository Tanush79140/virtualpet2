class Food {
constructor (){
this.foodStock=0;
this.image=loadImage("images/Milk.png")
this.lastFed;
}

updatFoodStock(foodStock){
this.foodStock = foodStock
}

 getFedTime(lastFed){
this.lastFed = lastFed;
 }
deductFood(){
    if(this.foodStock>0){
        this.foodStock = foodStock-1
    }
}

getfoodstock(){
    return this.foodStock;
}

display(){
     var x=80, y=100;

    imageMode(CENTRE);
     image(this.image,720,220,270,70);

     if(this.foodStock !=0){
for(var i=0; i<this.foodStock;i+i){
    if(i%10==0){
        x=80
        y=y+50;
    }
    image(this.image,x,y,50,50);
    x=x+30;
}
     }
}

}