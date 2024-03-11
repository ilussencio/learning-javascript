const fun01 = (x) => (x % 2 === 0)? true : false
const fun02 = (x) => {
    let sum = 0;
    x.forEach(num => sum += num);
    return sum / x.length
}
const fun03 = (x) => x.toUpperCase()


console.log(fun01(2))
console.log(fun01(3))
console.log(fun02([10,20,30,40,50]))
console.log(fun03('Lucas Ilussencio da Silva'))