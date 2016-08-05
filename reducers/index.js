import { combineReducers } from 'redux'

function name(state = '', action) {
	switch (action.type) {
	default:
		return state
	}
}

function accountNumber(state = '', action) {
	switch (action.type) {
	default:
		return state
	}
}

const chatNowReducers = combineReducers({
	name,
	accountNumber,
})

export default chatNowReducers
