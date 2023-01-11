import WolfControl from '../game/wind/item/wolfcontrol.js';
import Background from '../game/wind/item/background.js';
import PowerBtn from '../game/wind/item/powerbtn.js';
import Timer from '../game/wind/item/timer.js';

export default class GameCanvas{
    constructor(){
        this.dom=document.querySelector(".game-canvas");
        this.dom.focus();

        /**@type {CanvasRenderingContext2D} */
        this.ctx = this.dom.getContext("2d");

        this.wolfControl = new WolfControl();
        this.bg = new Background();
        this.btn = new PowerBtn();
        this.timer = new Timer();

        
        this.dom.onkeydown=this.keyDownHander.bind(this);
        this.dom.onkeyup=this.keyUpHander.bind(this);

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

    }

    draw(){
        this.bg.draw(this.ctx);
        this.btn.draw(this.ctx);
        this.timer.draw(this.ctx);
    }
    keyDownHander(e){
        this.btn.keyDown(e.key);
    }
    keyUpHander(e){
        this.btn.keyUp(e.key);
    }


}