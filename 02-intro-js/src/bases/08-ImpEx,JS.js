// // import {heroes} from './data/heros'
import  heroes, {owners}  from '../data/heros'



export const  getHeroesById = (id) => {
    // return heroes.find(((heroe) => {
    //     if (heroe.id === id)
    //     {
    //         return true;
    //     }
    //     else
    //     {
    //         return false;
    //     }
        
    // }))
    return heroes.find((heroes) => heroes.id === id)
}

export const getHeroesByOwner = (owner) => {
   return heroes.filter(heroes =>{
    if(heroes.owner === owner){
        return true;
    }
   })
}

// console.log(getHeroesByOwner('Marvel'))
// console.log(owners)