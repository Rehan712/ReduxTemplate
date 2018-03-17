import {add_one,subtract_one} from '../constants';

const counterReducer= function (state=0,action) {
	switch(action.type){
		case add_one:
			return state=state+action.payload
		case subtract_one:
			return state=state-action.payload	
	}
	return state;
};

export default counterReducer;