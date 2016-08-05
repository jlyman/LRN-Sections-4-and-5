import { connect } from 'react-redux'

import { rehydrateNameAndAccountNum } from '../actions'
import App from '../components/App'


const mapStateToProps = (state) => (
	{
		name: state.name,
		accountNumber: state.accountNumber,
	}
)

const mapDispatchToProps = (dispatch) => (
	{
		onRehydrateFromLocalStorage: (name, accountNumber) => {
			dispatch(rehydrateNameAndAccountNum(name, accountNumber))
		},
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
