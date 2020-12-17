/**
 * Created by user on 2/18/2017.
 */
import {FrameworkException} from './FrameworkException';

export class TimeoutException extends FrameworkException{

    constructor(message: string){
        super(message);
    }

}
