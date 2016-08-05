import { connect } from 'react-redux'

import { updateComposeMessage } from '../actions'
import ChatScreen from '../components/ChatScreen'


const mapStateToProps = (state) => (
	{
		composingMessage: state.composingMessage,
	}
)

const mapDispatchToProps = (dispatch) => (
	{
		onComposeMessageUpdate: (value) => {
			dispatch(updateComposeMessage(value))
		},
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChatScreen)
