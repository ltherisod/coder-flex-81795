export const productos = [
    // {
    //     // id:'01',NO SE SUBE A MANO EL ID
    //     name:'Random 1',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
    //     stock:20,
    //     price:25000,
    //     category:'nuevos',
    //     img:'https://picsum.photos/200'
    // },
     {
        
        name:'Random 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:24,
        price:35000,
        category:'mas vendidos',
        img:'../img/darth-vader.png'
    },
     {
       
        name:'Random 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:54,
        price:45000,
        category:'ofertas',
        img:'https://i.postimg.cc/B6hrXtjq/D-NQ-NP-2X-790947-MLU74201862127-012024-F.webp'
    },
      {
       
        name:'Random 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum at, assumenda enim quae nulla.',
        stock:14,
        price:65000,
        category:'ofertas',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEgjGu7SUxB4Ggx9sAYNoW5X4xQnO1E-WOA&'
    }

]


let error = false
export const getProducts = ()=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(error){
                reject('Hubo un error intente mas tarde')
            }else{
                resolve(productos)
            }
        }, 3000)
    })
}
export const getItem = (id)=> {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(error){
                reject('Hubo un error intente mas tarde')
            }else{
                //harcodeado
                // resolve(productos[0])
                //dinamico
                let prod = productos.find((prod)=> prod.id === id)
                resolve(prod)
            }
        }, 3000)
    })
}