function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = document.querySelector("textarea").value;
      let array = JSON.parse(input);

      //console.log(array);
      let obj = fromArrayToObject(array);
      let restObj = restaurantObject(obj);
      //console.log(restObj);
      let restWithAvgSalaryArr = []

      for (let rest in restObj) {
         let income = 0;
         let restWithAvgSalary = {}
         for (let workerSalary in restObj[rest]) {
            income += Number(restObj[rest][workerSalary])  
         }
         let avgIncome = (income / Object.keys(restObj[rest]).length).toFixed(2)
         //Object for restaurant and average income
         restWithAvgSalary[rest] = avgIncome
         //Array for containing objects for average income
         restWithAvgSalaryArr.push(restWithAvgSalary);
      }
      console.log(restWithAvgSalaryArr);
      let maxAvgIncome = Math.max.apply(Math,getValue(restWithAvgSalaryArr));
      for (const iterator of restWithAvgSalaryArr) {

         console.log(iterator);
      }
      
      console.log(maxAvgIncome);
   }
   function getValue(arr){
      let res = [];
      for(let j = 0; j < arr.length; j++)
      {
      
          for(let anItem in arr[j])
          {
              res.push(arr[j][anItem]);
          }
      }
      return res;
      }
   function fromArrayToObject(array) {
      let obj = {}
      for (const restaurant of array) {
         //console.log(restaurant);
         let [restaurantName, workers] = restaurant.split(' - ');
         //console.log(restaurantName + '->' + workers);
         obj[restaurantName] = workers;

      }
      return obj;
   }
   function restaurantObject(obj) {
      for (let rest in obj) {
         console.log(rest);
         let workersObj = {};
         let workers = obj[rest].split(', ');
         for (let worker of workers) {
            let [workerName, salary] = worker.split(' ');
            console.log(workerName + '->' + salary);
            workersObj[workerName] = salary;

         }
         obj[rest] = workersObj;
      }
      return obj;
   }
}