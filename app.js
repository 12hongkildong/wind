import GameCanvas from "./panel/game-canvas.js"
//import StoryCanvas from "./panel/story-canvas";

window.addEventListener("load",function(){
       let gameCanvas = new GameCanvas();
       //let storyCanvas = new StoryCanvas();   //주석처리

       gameCanvas.run();
       //storyCanvas.run();  // 주석처리
})