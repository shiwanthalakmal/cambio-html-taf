"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by user on 2/18/2017.
 */
var FrameworkException = (function (_super) {
    __extends(FrameworkException, _super);
    function FrameworkException(message) {
        _super.call(this, message);
        this.stack = (new Error()).stack;
        //this.name = this.constructor.name;
    }
    return FrameworkException;
}(Error));
exports.FrameworkException = FrameworkException;
