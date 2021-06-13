let perf = prompt('Test num')

PerfectNum(perf)


function PerfectNum(perf){
    for (let num, prime = 2;; prime++) {
        if(PrimeNum(prime)){
            if(perf < (num = 2**(prime-1) * (2**prime - 1))){
                alert('Unperfect')
                break
            }
            if(perf == num){
                alert('Perfect')
                break
            }
        }
    }
}

function PrimeNum(prime){
    for (let i = 2; i**2 <= prime; i++) {
        if(prime % i == 0){
            return false
        }
    }
    return true
}

