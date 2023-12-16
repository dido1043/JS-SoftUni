function solve(input) {
    const workersCont = Number(input.shift());
    //console.log(workersCont);
    let baristaObj ={};
    for (let i = 0; i < workersCont; i++) {
        let currentWorker = input.shift();
        let [workerName, shift, typesOfCoffee] = currentWorker.split(' ');
        let typesOfCoffeeArray = typesOfCoffee.split(',');
        baristaObj[workerName] = {
            shift:shift,
            coffeeType:typesOfCoffeeArray
        }
    }
    

    let commandLine = input.shift();
    while (commandLine !== 'Closed') {
        let currentCommand = commandLine.split(' / ');
        //console.log(currentCommand);
        let command = currentCommand.shift();

        switch (command) {
            case "Prepare":
                let [name, shift, typeOfCoffee] = currentCommand;    
                //console.log(name + "->" + shift + "->" +typeOfCoffee);
                if (baristaObj[name].shift  === shift &&
                    baristaObj[name].coffeeType.includes(typeOfCoffee)) {
                    console.log(`${name} has prepared a ${typeOfCoffee} for you!`);
                }else{
                    console.log(`${name} is not available to prepare a ${typeOfCoffee}.`);
                }
            break;
            case "Change Shift":
                let [baristaName, newShift] = currentCommand;
                baristaObj[baristaName].shift = newShift;
                console.log(`${baristaName} has updated his shift to: ${newShift}`); 
            break;
            case "Learn":
                let [barista, newCoffeeType] = currentCommand;    
                if (!baristaObj[barista].coffeeType.includes(newCoffeeType)) {
                    baristaObj[barista].coffeeType.push(newCoffeeType);
                    console.log(`${barista} has learned a new coffee type: ${newCoffeeType}.`);
                }else{
                    console.log(`${barista} knows how to make ${newCoffeeType}.`);
                }
            break;
        }
        
        commandLine = input.shift(); 
    }
    for (const barista in baristaObj) {
        console.log(`Barista: ${barista}, Shift: ${baristaObj[barista].shift}, Drinks: ${baristaObj[barista].coffeeType.join(', ')}`);
    }
}
solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']);