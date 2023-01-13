class Btn{
    #btn;
    constructor(){
        this.#btn = null;

    }
        set btn(value){
            this.#btn=value;
        }
    
        get btn(){
            return this.#btn;
        }


}


export default new Btn()