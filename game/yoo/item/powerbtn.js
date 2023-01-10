export default class PowerBtn{
    #speed;
    #btnSpeed;
    constructor(){
        this.sx=800;
        this.sy=625;

        this.sw=188;
        this.sh=188;

        this.#speed=3;
        this.#btnSpeed=50;

        this.img=document.querySelector("#btn")
        
    }

    update(){
        this.sx-=this.#speed;

        if(this.sx>1080){
            return alert("게임클리어!")
        }
        
    }

    draw(ctx){
        ctx.drawImage(this.img, 
            0,0,this.sw,this.sh,
            this.sx,this.sy,300,300);
    }

    move(k){
        if(k==" ")
            this.sx+=this.#btnSpeed;
    }
    move2(k){
        if(k==" ")
            this.sx+=1;
    }

}