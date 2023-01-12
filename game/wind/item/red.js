export default class red{
    constructor(){
        this.imgRed=document.querySelector("#bg-bg-red");


    }

    draw(ctx){
        ctx.drawImage(this.imgRed,0,0);
    }

}