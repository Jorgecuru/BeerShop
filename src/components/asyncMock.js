import AmberAle from '../Imagenes/AmberAle.png'
import BLONDE from '../Imagenes/BLONDE.jpg'
import IPA from '../Imagenes/AmericanIPA.png'
import BarneyWine from '../Imagenes/BarneyWine.png'


const products = [
    {
        id: '1',
        name: 'Blonde Ale',
        price: 500,
        category: 'CERVEZAS SUAVES',
        description: 'Cerveza rubia de amargor leve y cuerpo ligero',
        img:BLONDE,
        stock: 100,

    },

    {
        id: '2',
        name: 'Amber Ale',
        price: 500,
        category: 'CERVEZAS ROJAS',
        description: 'Cerveza rojiza de cuerpo intenso',
        img:AmberAle,
        stock: 100,

    },

    {
        id: '3',
        name: 'American Ipa',
        price: 500,
        category: 'CERVEZAS AMARGAS',
        description: 'Cerveza Dorada con mucho amargor',
        img: IPA,
        stock: 100,

    },

    {
        id: '4',
        name: 'Barney Wine',
        price: 500,
        category: 'CERVEZAS FUERTES',
        description: 'Cerveza color caramelo Añejada en barricas',
        img:BarneyWine,
        stock: 100,

    },



]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}