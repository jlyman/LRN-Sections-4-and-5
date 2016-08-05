import React, { PropTypes } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Linking,
	StyleSheet,
} from 'react-native'

import { setCustomerInfo } from '../storageManager'


const SignInScreen = (props) => (
	<View style={styles.container}>
		<View style={styles.formContainer}>
			<Text style={styles.label}>My Name:</Text>
			<TextInput
				style={styles.textbox}
				value={props.name}
				onChangeText={props.onNameUpdate}
			/>

			<Text style={styles.label}>My Account Number:</Text>
			<TextInput
				style={styles.textbox}
				value={props.accountNumber}
				keyboardType="numeric"
				onChangeText={props.onAccountNumberUpdate}
			/>

			<TouchableOpacity
				style={styles.actionButton}
				onPress={() => { goPressHandler(props.navHandler, props.name, props.accountNumber) }}
			>
				<Text style={styles.actionButtonText}>Go</Text>
			</TouchableOpacity>
		</View>

		<Text
			style={styles.externalLink}
			onPress={openHelpPage}
		>
			Forgot your account number?
		</Text>
	</View>
)

SignInScreen.propTypes = {
	name: PropTypes.string,
	accountNumber: PropTypes.string,
	onNameUpdate: PropTypes.func.isRequired,
	onAccountNumberUpdate: PropTypes.func.isRequired,
	navHandler: PropTypes.func.isRequired,
}

function goPressHandler(navHandler, name, accountNum) {
	setCustomerInfo(name, accountNum)
		.then(() => navHandler())
		.catch(ex => {
			console.log('Error storing customer name and account, proceeding anyway. Details:', ex)
			navHandler()
		})
}

function openHelpPage() {
	Linking.openURL('https://www.google.com/')
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#68b8db',
	},
	formContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	label: {
		fontSize: 20,
		marginTop: 36,
		marginBottom: 6,
		color: '#ffffff',
		fontWeight: 'bold',
	},
	textbox: {
		height: 40,
		width: 300,
		color: '#4ba3c9',
		borderWidth: 2,
		borderColor: '#4d96b5',
		borderRadius: 6,
		backgroundColor: '#ffffff',
		paddingHorizontal: 5,
	},
	actionButton: {
		marginTop: 36,
		alignSelf: 'flex-end',
		backgroundColor: '#cb3b27',
	},
	actionButtonText: {
		color: '#ffffff',
		fontSize: 24,
		textAlign: 'center',
		fontWeight: 'bold',
		marginVertical: 10,
		marginHorizontal: 20,
	},
	externalLink: {
		fontSize: 12,
		color: '#dfdfdf',
		textDecorationLine: 'underline',
		alignSelf: 'flex-start',
		marginLeft: 10,
		marginBottom: 10,
	},
})

export default SignInScreen
