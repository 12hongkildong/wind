export default class PowerBtn{
    #speed;
    #btnSpeed;
    constructor(){
        // 파란색 게이지 움직이기
        this.gsx=-556;
        this.gsy=410;
        this.imgGauge=document.querySelector("#w-p-gauge")

        // 바람 이미지
        this.wsx=600;
        this.wsy=415;

        this.sw=188;
        this.sh=188;

        this.#speed=1;
        this.#btnSpeed=50;

        this.imgWind=document.querySelector("#w-p-btn")

        // 키보드 한 번만 누르게 하기
        this.shouldHandleKeyDown = true;
        this.n=0;

        // 클리어확인용
        this.clear = false;
    }

    update(){
        // 바람 이미지와 게이지가 줄어든다.
        this.wsx-=this.#speed; 
        this.gsx-=this.#speed; 

        if(this.wsx<325){ // 바람게이지가 0이 되면 점핑(?)한다.
            this.wsx=400;
            this.gsx=-755;
        }

        // 바람 이미지가 사라진다(?)
        if(this.sx<200){
            this.sx=-1000;
        }    

        // 입김이 창에 끝에 닿으면 태풍 이미지가 바탕을 채운다.
        if(this.wsx>1020){
            //return alert("겜클")//console.log("게임클리어!")
            this.clear=true;
        }
    }

    draw(ctx){
        ctx.drawImage(this.imgGauge,
             0,0,750,150,
             this.gsx,this.gsy,1400,200)    
        ctx.drawImage(this.imgWind, 
            0,0,this.sw,this.sh,
            this.wsx,this.wsy,300,300);
        // ctx.drawImage(this.imgClear, 
        //     0,0,966,1280,
        //     100,-100,966,1280);
        }

    keyDown(k){     // 클릭 시 바람의 x좌표가 올라간다.
        if(k==" "){
            if (!this.shouldHandleKeyDown) 
                    return;
                this.shouldHandleKeyDown = false;
                    this.wsx+=50;
                    this.gsx+=50;
            }
        else
            return;    

            }
            
    keyUp(k){
        if(k==" ")
            this.shouldHandleKeyDown = true;
    }

    getClear(){
        return this.clear;
    }
}