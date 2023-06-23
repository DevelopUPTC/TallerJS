const movies = [
    {"id":534,"title":"El Padrino","awards":7},
    {"id":755,"title":"La Momia","awards":2},
    {"id":182,"title":"Benhur","awards":12},
    {"id":963,"title":"No me quedo","awards":0},
    {"id":234,"title":"Colección de Huesos","awards":6},
    {"id":893,"title":"Sueños de Fuga","awards":1},
    {"id":482,"title":"Retroceder Jamas","awards":2},
]

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //return resolve("Muuy pero muy Bien")
        return reject("Ohhh!, algo ha salido mal")
    },2000)
})

myPromise.then( msg => msg )
.then( m => console.log(m.concat(" lo estas haciendo Supeer")))
    .catch((error)=>console.log(error))

console.log("************END************")

const findById = ( id )=>{
    return movies.find( movie => movie.id == id )
}


const promiseFind = (id)=>{
    return findById(id)    
}

console.log(promiseFind(534))