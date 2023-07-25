import {getHeroesById, getHeroesByOwner} from "../src/bases/08-ImpEx,JS";

const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        const p1 = (getHeroesById(2))
        // resolve(p1)
        resolve(p1)
        
    }, 2000);
});


promesa.then((heroe) => {
    console.log('Heroe:', heroe)
})
.catch( err => console.log('err', err))