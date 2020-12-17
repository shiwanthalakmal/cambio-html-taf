/**
 * Created by user on 2/18/2017.
 */
export class TestBase{

    using(name, values, func){
        for (var i = 0, count = values.length; i < count; i++) {
            if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
                values[i] = [values[i]];
            }
            func.apply(this, values[i]);
        }
    }
}