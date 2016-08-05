import React, { Component } from 'react'
import {
	AppRegistry,
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import chatNowReducers from './reducers'

let store = createStore(chatNowReducers)


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
