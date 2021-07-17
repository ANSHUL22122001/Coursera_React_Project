import { dish } from '../shared/dishes';

export const Dishes = (state = dish, action) => {
    switch(action.type){
        default:
            return state;
    }
}