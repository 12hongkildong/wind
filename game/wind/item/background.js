
export default class Background{
    constructor(){
        // 풀밭 그림
        this.grassX=0;
        this.grassY=0;
        this.imgGrass=document.querySelector("#w-bg-map")

        // 늑대 그림
        this.wolfX=0;
        this.wolfY=300;
        this.imgWolf=document.querySelector("#w-bg-wolf");

        // 파워 게이지
        this.imgGaugeSpace=document.querySelector("#w-bg-gauge");

    }

    update(){


    }

    draw(ctx){
        // 배경
        ctx.drawImage(this.imgGrass,
            this.grassX,this.grassY, 3840,2160,
            0,0,1400,700);
        
        // 늑대    
        ctx.drawImage(this.imgWolf,this.wolfX,this.wolfY);
        ctx.drawImage(this.imgGaugeSpace, 
            0,0,750,150,
            480,420,752,145);

    }

}