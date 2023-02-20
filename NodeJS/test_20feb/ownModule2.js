function sayHello() {
    console.log('Hello from ownModule 2!');
}
  
  
module.exports = {
    sayHello
};

function sayHello() {
    const message = 'Hello from ownModule 2!';
  
    function printMessage() {
      console.log(message);
    }
  
    return printMessage;
}
  
module.exports = {
    sayHello
  
};

  

