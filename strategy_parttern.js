// strategt pattern dùng để thay đổi thuật toán mà không cần thay đổi cấu trúc của nó
function Fedex() {
  this.name = "Fedex";
  this.calculate = (package) => {
    // Fedex calculations...
    // console.log(package.weigth);
    if (!package.weigth || typeof package.weigth !== "number")
      return "invalid weight";
    return package.weigth * 2.45 + "$";
  };
}
function UPS() {
  this.name = "UPS";
  this.calculate = (package) => {
    // UPS calculations...
    if (!package.weigth || typeof package.weigth !== "number")
      return "invalid weight";
    return package.weigth * 1.5 + "$";
  };
}
function USPS() {
  this.name = "USPS";
  this.calculate = (package) => {
    // USPS calculations...
    if (!package.weigth || typeof package.weigth !== "number")
      return "invalid weight";
    return package.weigth * 4.5 + "$";
  };
}
function Shipping() {
  this.company = "";
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
  this.getName = () => {
    return this.company.name;
  };
}
// Client
const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();
const package = {
  from: "76712",
  to: "10012",
  weigth: 123123123,
  nameWeight: "gam",
};
// the 3 strategies
const shipping = new Shipping();
shipping.setStrategy(fedex);
console.log(shipping.getName() + ":" + shipping.calculate(package));
// console.log(shipping);
