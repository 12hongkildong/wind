import WolfControl from '../game/wind/item/wolfcontrol.js';
import Background from '../game/wind/item/background.js';
import PowerBtn from '../game/wind/item/powerbtn.js';
import Timer from '../game/wind/item/timer.js';
import Red from '../game/wind/item/red.js';
import Typoon from '../game/wind/item/typhoon.js';
import newlec from '../newlec.js'

export default class GameCanvas{
    constructor(){
        this.dom=document.querySelector(".game-canvas");
        this.dom.focus();

        /**@type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");

        this.wolfControl = new WolfControl();
        this.red = new Red();
        this.btn = new PowerBtn();
        this.bg = new Background();
        this.timer = new Timer();
        this.typhoons = [];

        
        this.dom.onkeydown=this.keyDownHander.bind(this);
        this.dom.onkeyup=this.keyUpHander.bind(this);

        newlec.typhoons=this.typhoons;
        this.typhoonsTimer=10;
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

        this.typhoonsTimer--;
        if(this.typhoonsTimer==0)
            if(/*this.btn.clear==*/true){ // 태풍 만들기
                let x= Math.floor(Math.random()*(700+200)-200);//sw랜덤
                let y= Math.floor(Math.random()*(1000+200)-200);//sh랜덤
                let tyhpoon = new Typoon(x,y);

                this.typhoons.push(tyhpoon)
                
                this.typhoonsTimer=10;
            }
        for(let typhoon of this.typhoons)
            typhoon.update();
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


    keyDownHander(e){
        this.btn.keyDown(e.key);
    }
    keyUpHander(e){
        this.btn.keyUp(e.key);
    }

    get clear(){
        return this.btn.clear();
    }

}