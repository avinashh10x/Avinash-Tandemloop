
class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

  
    action(operation) {

        switch (operation) {
            case '+':
                return this.a + this.b;
               
            case '-':
                return this.a - this.b;
               
            case '*':
                return this.a * this.b;
               
            case '/':
                return this.b != 0 ? this.a / this.b : "cant devide by 0";
               
            default:
                return "invalid operation"
               
        }

    }
}

const cal = new Calculator(8,2)

console.log(cal.action("+"))

