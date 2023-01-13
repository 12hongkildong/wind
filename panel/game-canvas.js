import Background from '../game/wind/item/background.js';
import PowerBtn from '../game/wind/item/powerbtn.js';
import Timer from '../game/wind/item/timer.js';
import Red from '../game/wind/item/red.js';
import Typoon from '../game/wind/item/typhoon.js';
import newlec from '../newlec.js'
import globalbtn from '../globalbtn.js'

export default class GameCanvas{
    constructor(){
        this.dom=document.querySelector(".game-canvas");
        this.dom.focus();

        /**@type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");

        this.red = new Red();
        this.btn = new PowerBtn();
        this.bg = new Background();
        this.timer = new Timer();
        this.typhoons = [];

        
        this.dom.onkeydown=this.keyDownHander.bind(this);
        this.dom.onkeyup=this.keyUpHander.bind(this);

        //newlec.typhoons=this.typhoons;
        //전역변수 -> 타이머체크용
        globalbtn.btn=this.btn;

        this.typhoonsTimer=1;
    }
    
    run(){
        this.update();
        this.draw();

        window.setTimeout(()=>{
            this.run();
        },17);
        

    }
    
    update(){
        this.timer.update();
        this.btn.update();

        if(this.btn.clear){
            this.typhoonsTimer--;
            if(this.typhoonsTimer==0)
                if(/*this.btn.clear==*/true){ // 태풍 만들기
                    let x= -500;//sw랜덤
                    let y= Math.floor(Math.random()*(2000+500)-500);//sh랜덤
                    let typhoon = new Typoon(x,y);
                    
                    typhoon.onOutOfScreen=this.onOutOfScreenHandler.bind(this);

                    this.typhoons.push(typhoon)
                    
                    this.typhoonsTimer=1;
                }
                for(let typhoon of this.typhoons)
                    typhoon.update();
            }
    }

    draw(){
        this.red.draw(this.ctx);
        this.btn.draw(this.ctx);
        this.bg.draw(this.ctx);
        this.timer.draw(this.ctx);
        if(this.btn.clear==true)    
            for(let typhoon of this.typhoons)
                typhoon.draw(this.ctx);
      
    }
    onOutOfScreenHandler(en){
            let index = this.typhoons.indexOf(en)
            this.typhoons.splice(index,1);
        
    }

    keyDownHander(e){
        this.btn.keyDown(e.key);
    }
    keyUpHander(e){
        this.btn.keyUp(e.key);
    }

    timer(){
        this.btn.getClear();
    }

}