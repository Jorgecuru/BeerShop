const products = [
    {
        id: '1',
        name: 'BLONDE ALE',
        price: 500,
        category: 'CERVEZAS SUAVES',
        description: 'Cerveza rubia de amargor leve y cuerpo ligero',

    },

    {
        id: '2',
        name: 'Amber Ale',
        price: 500,
        category: 'CERVEZAS ROJAS',
        description: 'Cerveza rojiza de cuerpo intenso',

    },

    {
        id: '3',
        name: 'IPA',
        price: 500,
        category: 'CERVEZAS AMARGAS',
        description: 'Cerveza Dorada con mucho amargor',

    }



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
