module.exports = {
   Fatorial,
}

function Fatorial(n){
    if (n === 1){
        return 1
    }else{
        return n * Fatorial(n-1)
    }
}