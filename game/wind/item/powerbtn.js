export default class PowerBtn{
    #speed;
    #btnSpeed;
    constructor(){
        // 태풍이미지
        this.img3=document.querySelector("#w-p-clear")

        // 파란색 이미지 움직이기
        this.wx=1;
        this.img2=document.querySelector("#w-p-gauge")

        // 바람 이미지
        this.sx=800;
        this.sy=625;

        this.sw=188;
        this.sh=188;

        this.#speed=1;
        this.#btnSpeed=50;

        this.img=document.querySelector("#w-p-btn")

        // 키보드 한 번만 누르게 하기
        this.shouldHandleKeyDown = true;
        this.n=0;
    }

    update(){
        // 바람 이미지가 줄어든다.
        this.sx-=this.#speed; 

        // 바람 이미지가 사라진다(?)
        if(this.sx<600){
            this.sx=-1000;
        }    

        // 바람 이미지가 올라간다.
        if(this.sx>1080){
            return console.log("게임클리어!")
        }

        
    }

    draw(ctx){

        // ctx.drawImage(this.img2,
        //     0,0,750,150,
        //     this.wx,610,900,200)    
        ctx.drawImage(this.img, 
            0,0,this.sw,this.sh,
            this.sx,this.sy,300,300);
        ctx.drawImage(this.img3, 
            0,0,966,1280,
            100,-100,966,1280);
        }

    keyDown(k){
        if(k==" "){
            if (!this.shouldHandleKeyDown) 
                    return;
                this.shouldHandleKeyDown = false;
                    this.sx+=30;
            }
        else
            return;    

            }
            
    keyUp(k){
        if(k==" ")
            this.shouldHandleKeyDown = true;
    }
}