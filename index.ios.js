import React, { Component } from 'react'
import {
	AppRegistry,
} from 'react-native'

import MainScreen from './components/MainScreen'
import SignInScreen from './components/SignInScreen'

class ChatNow extends Component {
	render() {
		return (
			<SignInScreen />
		)
	}
}

AppRegistry.registerComponent('ChatNow', () => ChatNow)
