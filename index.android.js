import React, { Component } from 'react'
import {
	AppRegistry,
} from 'react-native'

import App from './components/App'


class ChatNow extends Component {
	render() {
		return (
			<App />
		)
	}
}

AppRegistry.registerComponent('ChatNow', () => ChatNow)
