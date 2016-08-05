import React from 'react'
import {
	TouchableOpacity,
	Text,
	StyleSheet,
	Platform,
} from 'react-native'


const NavBarRouteMapper = {
	LeftButton: (route, navigator, index, navState) => {
		if (index === 0) return null

		return (
			<TouchableOpacity onPress={() => { navigator.pop() }}>
				<Text style={[styles.navText, styles.backText]}>‹</Text>
			</TouchableOpacity>
		)
	},
	RightButton: (route, navigator, index, navState) => {
		if (route.name === 'ChatScreen') {
			return (
				<TouchableOpacity onPress={() => { navigator.popToTop() }}>
					<Text style={[styles.navText, styles.rightButtonText]}>Done</Text>
				</TouchableOpacity>
			)
		}

		return null
	},
	Title: (route, navigator, index, navState) => (
		<Text style={styles.navText}>
			{(route.title ? route.title : route.name).toUpperCase()}
		</Text>
	),
}

const styles = StyleSheet.create({
	navText: {
		color: '#4b70a7',
		letterSpacing: 2,
		fontSize: Platform.OS === 'ios' ? 16 : 24,
		fontWeight: Platform.OS === 'ios' ? '500' : '300',
		marginVertical: 10,
	},
	backText: {
		fontSize: 36,
		marginTop: Platform.OS === 'ios' ? -5 : 0,
		marginLeft: 10,
	},
})

export default NavBarRouteMapper
