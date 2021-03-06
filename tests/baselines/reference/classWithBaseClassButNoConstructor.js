//// [classWithBaseClassButNoConstructor.ts]
class Base {
    constructor(x: number) { }
}

class C extends Base {
    foo: string;
}

var r = C;
var c = new C(); // error
var c2 = new C(1); // ok

class Base2<T,U> {
    constructor(x: T) { }
}

class D<T,U> extends Base2<T,U> {
    foo: U;
}

var r2 = D;
var d = new D(); // error
var d2 = new D(1); // ok

// specialized base class
class D2<T, U> extends Base2<string, number> {
    foo: U;
}

var r3 = D2;
var d3 = new D(); // error
var d4 = new D(1); // ok

class D3 extends Base2<string, number> {
    foo: string;
}

var r4 = D3;
var d5 = new D(); // error
var d6 = new D(1); // ok

//// [classWithBaseClassButNoConstructor.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Base = (function () {
    function Base(x) {
    }
    return Base;
})();
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    return C;
})(Base);
var r = C;
var c = new C(); // error
var c2 = new C(1); // ok
var Base2 = (function () {
    function Base2(x) {
    }
    return Base2;
})();
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        _super.apply(this, arguments);
    }
    return D;
})(Base2);
var r2 = D;
var d = new D(); // error
var d2 = new D(1); // ok
// specialized base class
var D2 = (function (_super) {
    __extends(D2, _super);
    function D2() {
        _super.apply(this, arguments);
    }
    return D2;
})(Base2);
var r3 = D2;
var d3 = new D(); // error
var d4 = new D(1); // ok
var D3 = (function (_super) {
    __extends(D3, _super);
    function D3() {
        _super.apply(this, arguments);
    }
    return D3;
})(Base2);
var r4 = D3;
var d5 = new D(); // error
var d6 = new D(1); // ok
