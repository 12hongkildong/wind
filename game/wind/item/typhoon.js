export default class Typhoon{
    constructor(zx,zy){
        // 게임클리어시 태풍이미지
        this.imgClear=document.querySelector("#w-p-clear")
        this.speed=10;
        this.x=zx||200;
        this.y=zy||200;

        this.ix=0;
        this.iy=0;

        this.sw=966;
        this.sh=1280;

        this.sx=this.ix*this.sw;
        this.sy=this.iy*this.sh;
        this.rsw= Math.floor(Math.random()*(700+200)-200);//sw랜덤
        this.rsh= Math.floor(Math.random()*(1000+200)-200);//sh랜덤

        this.outOfScreen=null;
    }

    update(){
        this.x+=this.speed;
        //console.log(this.x);
        if(1400<this.x){   // 스크린 벗어난 태풍 삭제하기. 이후 1400으로 수정
            //console.log(this.outOfScreen);
            if(this.outOfScreen==null){
                  this.onOutOfScreen(this);
            }
        }

    }

    draw(ctx){
        //this.x+=this.speed;
        ctx.drawImage(this.imgClear,
            this.sx,this.sy,this.sw,this.sh,
            this.x,this.y,this.rsw,this.rsh)/*
            this.x,this.y,this.sw,this.sh,
            this.x,this.y,this.sw,this.sh);*/
    }



}