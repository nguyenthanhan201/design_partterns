// factory pattern sẽ giúp cho code được tái sử dụng lại nhiều lần
const Developer = function (name) {
  this.name = name;
  this.type = "Developer";
};

const Tester = function (name) {
  this.name = name;
  this.type = "Tester";
};

const EmployeeFactory = function () {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
};

const say = () => {
  console.log("Hi, I am " + this.name + " and I am a " + this.type);
};

const employeeFactory = new EmployeeFactory();
const employees = [];
employees.push(employeeFactory.create("John", 1));
employees.push(employeeFactory.create("Jane", 2));
console.log(employees);
