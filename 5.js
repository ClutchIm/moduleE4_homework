class Electric{
    constructor(){
        this.type = "Electric";
    }
}

class Device extends Electric {
    constructor(name, location, power, turned, type){
        super(type);
        this.name = name;
        this.location = location;
        this.power = `Power is ${power} Watt`;

        if (turned){
            this.turned = 'Turned on'
            if (power > 50){
                this.dangerous = "Be extremely careful"
            }else{
                this.dangerous = "A small electric shock"
            }
        }else{
            this.turned = 'Turned off'
            this.dangerous = "Don't worry"
        }
    }

    getInfo(){
        console.group(`Device: ${this.name}, type: ${this.type}`);
        console.log(`Located in ${this.location}`);
        console.log(`${this.power} is ${this.turned}`);
        console.log(`Notify: ${this.dangerous}`);
        console.groupEnd();
    }
}

const computer = new Device('Computer', 'hall', 750, false)
const lamp = new Device( 'Lamp', 'bedroom', 50, true)
const boiler = new Device('Boiler', 'bathroom', 2500, true)

computer.getInfo()
console.log('===============================')
lamp.getInfo()
console.log('===============================')
boiler.getInfo()
