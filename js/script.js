setTimeout(function (){
    location.href = "rocket.html"
}, 0.1);

var doCoolStuff = function () {
    var currentClassname = document.getElementById('cool').className;

    if (currentClassname == "cool") {
      document.getElementById('cool').className = "cool purple"
    } else   document.getElementById('cool').className = "cool"
}

var sayMyName = function(name) {
    alert("My name is: "+name);
}

var car = {
  make: "VW",
  type: "Polo",
  color: "blue",
  isTurnedOn: false,
  numberOfWheels: 4,
  seats: [
        "seat 1",
        "seat 2",
        "seat 3",
        "seat 4"
      ],
      turnOn: function() {
        this.isTurnedOn = true;
      },
      fly: function() {
        alert("fly");

      },
      switchCar: function(isOn) {
        console.log("turn car "+isOn)
        if (isOn == true) {
          this.isTurnedOn = true;
        } else {
          this.isTurnedOn = false;
        }
      }
};

console.log('hello there friends!');
