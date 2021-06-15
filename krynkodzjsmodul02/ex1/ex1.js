let min = Number(prompt('Min'))
let max = Number(prompt('Max'))
let sum = 0;

for (let i = min; max > i; max--){
    min += max
}

alert(`Sum: ${min}`)



