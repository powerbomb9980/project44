class Player{
    constructor(x, y, width, height, image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.sprite = createSprite(this.x, this.y, this.width, this.height);
        //this.player.addAnimation("playerMove", plrAnimation);
        this.sprite.addImage("player", playerImg);
        this.sprite.scale = 0.7;
        
    }

}