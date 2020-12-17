"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by user on 2/18/2017.
 */
var FrameworkException_1 = require('./FrameworkException');
var ElementNotFoundException = (function (_super) {
    __extends(ElementNotFoundException, _super);
    function ElementNotFoundException(message) {
        _super.call(this, message);
    }
    return ElementNotFoundException;
}(FrameworkException_1.FrameworkException));
