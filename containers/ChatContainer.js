import { connect } from 'react-redux'

import { updateComposeMessage, sendMessage, receivedMessage } from '../actions'
import ChatScreen from '../components/ChatScreen'


const mapStateToProps = (state) => (
	{
		messages: state.messages,
		composingMessage: state.composingMessage,
	}
)

const mapDispatchToProps = (dispatch) => (
	{
		onComposeMessageUpdate: (value) => {
			dispatch(updateComposeMessage(value))
		},
		onSendMessage: () => {
			dispatch(sendMessage(new Date()))
		},
		onReceivedMessage: (message) => {
			dispatch(receivedMessage(message))
		},
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ChatScreen)
