let min = prompt('Min')
let max = prompt ('Max')

let arr = []
PerfectNum()

function PerfectNum(){
    for (let num = 0, prime = 2; num <= max; prime++) {
        if(PrimeNum(prime)){
            if( (num = (2**(prime-1)) * (2**prime - 1)) >= min){
                arr.push(num)
            }
        }
    }
    alert(arr)
}

function PrimeNum(prime){
    for (let i = 2; i**2 <= prime; i++) {
        if(prime % i == 0){
            return false
        }
    }
    return true
}
