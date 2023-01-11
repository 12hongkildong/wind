
export default class Background{
    constructor(){
        this.x=100;
        this.y=500;
        this.img=document.querySelector("#w-bg-wolf");
        this.img2=document.querySelector("#w-bg-gauge");
        this.imgBg=document.querySelector("#w-bg-map")
    }

    update(){


    }

    draw(ctx){
        ctx.drawImage(this.imgBg,
            this.x,this.y, 3800,2100,
            0,0,2000,1500);
        
        ctx.drawImage(this.img,this.x,this.y);
        ctx.drawImage(this.img2, 
            0,0,750,150,
            580,610,900,200);

    }

}