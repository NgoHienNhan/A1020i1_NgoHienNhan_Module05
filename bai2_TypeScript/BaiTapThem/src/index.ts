class Rectangle {
    private _width:number;
    private _length:number;

    constructor(width: number, length: number) {
        this._width = width;
        this._length = length;
    }

    perimeter():number{
        return this._length + this._width;
    }

    area():number{
        return this._length*this._width;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }
}

let rectangle = new Rectangle(20,30);
console.log(rectangle);
console.log(rectangle.area());
console.log(rectangle.width)
rectangle.width=3;
console.log(rectangle.width)