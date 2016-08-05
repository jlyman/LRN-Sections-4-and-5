import { connect } from 'react-redux'

import { updateName, updateAccountNumber } from '../actions'
import SignInScreen from '../components/SignInScreen'


const mapStateToProps = (state) => (
	{
		name: state.name,
		accountNumber: state.accountNumber,
	}
)

const mapDispatchToProps = (dispatch) => (
	{
		onNameUpdate: (value) => {
			dispatch(updateName(value))
		},
		onAccountNumberUpdate: (value) => {
			dispatch(updateAccountNumber(value))
		},
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignInScreen)
