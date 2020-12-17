/**
 * Created by SLakmal on 3/22/2017.
 */
import {FrameworkException} from './FrameworkException';

export class AssertionError extends FrameworkException{

    constructor(message: string){
        super(message);
    }

}
