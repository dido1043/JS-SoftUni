function solve(input) {
    const participantsCount = Number(input.shift());
    let participantsObj = {}
    for (let i = 0; i < participantsCount; i++) {
        const participantInfo = input.shift();
        const [name, fuelCapacity, position] = participantInfo.split('|');
        participantsObj[name] = {
            fuel: Number(fuelCapacity),
            position: Number(position)
        };
    }
    let commandLine = input.shift();
    while (commandLine !== "Finish") {
        commandLine = commandLine.split(' - ');
        const command = commandLine.shift();
        switch (command) {
            case 'StopForFuel':
                let [name, minFuel, changedPosition] = commandLine;
                if (participantsObj[name].fuel >= minFuel) {
                    console.log(`${name} does not need to stop for fuel!`);
                }
                else {
                    participantsObj[name].position = changedPosition;
                    console.log(`${name} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                }
                break;
            case 'Overtaking':
                let [firstRider, secondRider] = commandLine;
                    let firstRiderPosition = participantsObj[firstRider].position;
                    let secondRiderPosition = participantsObj[secondRider].position;

                    if (firstRiderPosition < secondRiderPosition) {
                        participantsObj[firstRider].position = secondRiderPosition;
                        participantsObj[secondRider].position = firstRiderPosition;

                        console.log(`${firstRider} overtook ${secondRider}!`);
                    }
                break;
            case 'EngineFail':
                let [rider, lapsLeft] = commandLine;
                    console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                    delete participantsObj[rider];
                break;
        }

        commandLine = input.shift();
    }

    for (const participant in participantsObj) {
        console.log(participant);
        console.log(`  Final position: ${participantsObj[participant].position}`);
    }
}

    solve(["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]);
    