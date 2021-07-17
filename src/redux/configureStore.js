import {createStore, combineReducers} from 'redux';
import {Dishes} from './dishes';
import {leaders} from './leaders';
import {promotions} from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            promotions: promotions,
            leaders: leaders
        })
    );

    return store;
}