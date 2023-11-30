function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = document.querySelector("textarea").value;
      let array = JSON.parse(input);
      let obj = {};
      console.log(array);
      for (const restaurant of array) {
         //console.log(restaurant);
         let [restaurantName, workers] = restaurant.split(' - ');
         //console.log(restaurantName + '->' + workers);
         obj[restaurantName] = workers;
      
      }
      //console.log(obj);
      let workersArr = [];
      for (let rest in obj) {
         console.log(rest);
         let workersObj = {};
         let workers = obj[rest].split(', ');
         //console.log(workers);
         for (let worker of workers) {
            let [workerName, salary] = worker.split(' ');
            console.log(workerName + '->' + salary);
            workersObj[workerName] = salary;
           
         }
          workersArr.push(workersObj);
         //console.log(workersObj);
      }
      console.log(workersArr);
   }
}