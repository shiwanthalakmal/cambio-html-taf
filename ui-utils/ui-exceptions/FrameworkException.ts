/**
 * Created by user on 2/18/2017.
 */
export class FrameworkException extends Error {

    constructor(message: string){
        super(message);
        this.stack = (new Error()).stack;
        //this.name = this.constructor.name;
    }

}
