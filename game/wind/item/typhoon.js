export default class Typhoon{
    constructor(x,y){
        // 게임클리어시 태풍이미지
        this.imgClear=document.querySelector("#w-p-clear")
        this.speed=10;
        this.x=x||200;
        this.y=x||200;
        this.sw=966;
        this.sh=1280;
        this.rsw= Math.floor(Math.random()*(700+200)-200);//sw랜덤
        this.rsh= Math.floor(Math.random()*(1000+200)-200);//sh랜덤
    }

    update(){
        this.x+=this.speed;
        //if()

    }

    draw(ctx){
        ctx.drawImage(this.imgClear,
            this.x,this.y,this.sw,this.sh,
            this.x,this.y,this.rsw,this.rsh);

    }



}