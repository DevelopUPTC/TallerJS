class Dish{
    constructor(name,calories,value){
        this.name = name
        this.calories = calories
        this.value = value
    }

    setName( name ){
        this.name = name
    }

    getName(){
        return this.name
    }

    toString(){
        return `name=${this.name},calories=${this.calories},value=${this.value} `
    }
}

module.exports = Dish