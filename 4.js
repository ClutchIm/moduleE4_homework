function IsElectric(){
    this.type = "Electric";
}

function ElectricalDevice(name, location, power, turned){  // turned: boolean | Я забыл как называется подсказка в значениях, не смог загуглить
    this.name = name;
    this.location = location;
    this.power = `Power is ${power} Watt`

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

ElectricalDevice.prototype = new IsElectric()

ElectricalDevice.prototype.getInfo = function(){
    console.group(`Device: ${this.name}, type: ${this.type}`);
    console.log(`Located in ${this.location}`);
    console.log(`${this.power} is ${this.turned}`);
    console.log(`Notify: ${this.dangerous}`);
    console.groupEnd();
}

const computer = new ElectricalDevice('Computer', 'hall', 750, false)
const lamp = new ElectricalDevice( 'Lamp', 'bedroom', 50, true)
const boiler = new ElectricalDevice('Boiler', 'bathroom', 2500, true)

computer.getInfo()
console.log('===============================')
lamp.getInfo()
console.log('===============================')
boiler.getInfo()


