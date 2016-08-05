import React from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native'

const SignInScreen = (props) => (
	<View style={styles.container}>
		<View style={styles.formContainer}>
			<Text style={styles.label}>My Name:</Text>

			<Text style={styles.label}>My Account Number:</Text>

			<TouchableOpacity style={styles.actionButton}>
				<Text style={styles.actionButtonText}>Go</Text>
			</TouchableOpacity>
		</View>
		<Text style={styles.externalLink}>Forgot your account number?</Text>
	</View>
)

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
