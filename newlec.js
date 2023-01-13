class Context{
    #typhoons;
    constructor(){
        this.#typhoons = null;

    }
        set typhoons(value){
            this.#typhoons=value;
        }
    
        get typhoons(){
            return this.#typhoons;
        }


}


export default new Context()