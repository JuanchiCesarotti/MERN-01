import {getHeroesById, getHeroesByOwner} from "./08-ImpEx,JS";
import heroes from "../data/heros";

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         const p1 = (getHeroesById(2))
//         // resolve(p1)
//         resolve(p1)
        
//     }, 2000);
// });


// promesa.then((heroe) => {
//     console.log('Heroe:', heroe)
// })
// .catch( err => console.log('err', err))


const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const p1 = (getHeroesById(id))
            // resolve(p1)
            
            if(p1){
                resolve(p1)
            }
            else{
                reject(p1)
            }
            

            
        }, 2000);
    });
}

// getHeroesByIdAsync(10).then((heroe => (console.table( heroe )))).catch(err => (console.log('err', err)))

getHeroesByIdAsync(2).then(console.log).catch(console.log)