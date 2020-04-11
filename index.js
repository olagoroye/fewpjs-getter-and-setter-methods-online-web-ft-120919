// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return 2 * this.radius;
    }
    set diameter(c){
        this._diameter =c
        this.radius = this._diameter/2
    }
    set circumference(c){
        this._circumference = c
        this.radius = this._circumference / (Math.PI*2)
    }
    get circumference(){
        return 2 * Math.PI * this.radius;
    }
    get area(){
        return Math.PI *(this.radius ** 2);
    }
}