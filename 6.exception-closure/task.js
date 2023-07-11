

function parseCount(num) {
    const res = Number.parseFloat(num);
    if(isNaN(res)) {
        throw new Error("Невалидное значение");
    }
    return res
}

function validateCount(num){
    try {
        return parseCount(num);
    } catch(err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (((a + b) < c) || ((b + c) < a) || ((c + a) < b)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    } 

    get area() {
        const p = this.perimeter/2;
        const res = Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
        return res;
    }
}


function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {return 'Ошибка! Треугольник не существует'},
            get area() {return 'Ошибка! Треугольник не существует'}
        }
    }
}
