/*
CREATE NODE JS MODULES  WITH BELOW FUNCTIONALITY 

1. One module calling the other 
2. Performing Closure
3. Accessing the FilesStream module to read contents of a text file
4. Creating a module to calculate the compound interest
*/

const ownModule2 = require('./ownModule2');
ownModule2.sayHello();

const closureFn = ownModule2.sayHello();
closureFn();


const fs = require('fs');

fs.readFile('./textFile.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

