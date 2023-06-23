function sum(x , y){
    return x + y
}

function isPair(n){
    return n % 2 == 0
}

function isCousing( n ){
    let cousing = true
    let cont = 2
    while( cont <= n / 2 && cousing ){
        cousing = !( n % cont++ == 0)
    }

    return cousing
}

exports.cousing = isCousing
exports.isPair = isPair
exports.sum = sum