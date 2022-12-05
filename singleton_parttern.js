// singleton pattern giúp code chỉ được khởi tạo 1 lần duy nhất
function Process(state) {
  this.state = state;
}

const Singleton = (function () {
  let instance;
  return function (state) {
    if (!instance) {
      instance = new Process(state);
    }
    return instance;
  };
})();

const p1 = new Singleton("p1");
const p2 = new Singleton("p2");
console.log(p1, p2);
