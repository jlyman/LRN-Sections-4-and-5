import React, { Component } from 'react'
import {
	AppRegistry,
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import chatNowReducers from './reducers'

let store = createStore(chatNowReducers, applyMiddleware(thunk))


class ChatNow extends Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>

		)
	}
}

AppRegistry.registerComponent('ChatNow', () => ChatNow)
