
export default class Background{
    constructor(){
        this.x=100;
        this.y=500;
        this.img=document.querySelector("#bg");
        this.img2=document.querySelector("#gauge");
    }

    update(){


    }

    draw(ctx){
        ctx.drawImage(this.img,this.x,this.y);
        ctx.drawImage(this.img2, 
            0,0,250,100,
            580,610,600,200);

    }

}