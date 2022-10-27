/*
class Carro
{
    constructor (marca, modelo, ano)
    {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    getMarca()
    {
        return this.marca
    }
    getModelo()
    {
        return this.modelo
    }
    getAno()
    {
        return this.ano
    }
}

const carro = new Carro('Fiat', 'Uno', '2015')
console.log(carro.getMarca())
console.log(carro.getModelo())
console.log(carro.getAno())
*/

const Carro = (marca, modelo, ano) => ({
        marca,
        modelo,
        ano,
        getInfo: () => ({marca, modelo, ano})
})

const carro = Carro('Fiat', 'Uno', '2015')
console.log(carro.getInfo())