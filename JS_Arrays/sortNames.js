function sortNames(list) {
    list.sort((a,b) =>{
        return a.localeCompare(b)
    })
    let index = 0;
    for (const name of list) {
        index++;
        console.log(`${index}.${name}`);
    }
}
sortNames(["John", "Bob", "Christina", "Ema"])