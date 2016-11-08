import { combineReducers } from 'redux';
//reducers
import auth from './auth';
import goods from './goods';
import goodsGroups from './goods-groups';
import orders from './orders';
import currentContent from './currentContent';
import modal from './../../lib/modal/reducers/modal';

const rootReducer = combineReducers({
	auth,
	goods,
	goodsGroups,
	orders,
	modal,
	currentContent
});

export default rootReducer;