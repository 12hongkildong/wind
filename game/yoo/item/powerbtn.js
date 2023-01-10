export default class PowerBtn{
    #speed;
    #btnSpeed;
    constructor(){
        // 파란색
        this.wx=1;

        // 바람
        this.sx=800;
        this.sy=625;

        this.sw=188;
        this.sh=188;

        this.#speed=1;
        this.#btnSpeed=50;

        this.img=document.querySelector("#p-btn")
        this.img2=document.querySelector("#p-gauge")
    }

    update(){
        this.sx-=this.#speed;
        
        
        if(this.sx<600){
            this.sx=-1000;
        }    

        if(this.sx>1080){
            return console.log("게임클리어!")
        }
        
    }

    draw(ctx){
        ctx.drawImage(this.img2,
            0,0,750,150,
            this.wx,610,900,200)    
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