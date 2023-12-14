function solve(input){
    const participantsCount = Number(input.shift());
    let participantsObj = {}
    for (let i = 0; i < participantsCount; i++) {
        const participantInfo = input.shift(); 
        const[name,fuelCapacity,position] = participantInfo.split('|');
        participantsObj[name] = {
            fuelCapacity:Number(fuelCapacity),
            position: Number(position),
        }
    }
    let command;
    while (command !== "Finish") {
        command = input.shift();
        
        //console.log(command.split(' - '));
    }
    
}
solve(["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]);