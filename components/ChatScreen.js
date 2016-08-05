import React, { PropTypes } from 'react'
import {
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
	Platform,
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'

import MessageBubble from './MessageBubble'

let scrollHeight
let scrollWindow

const ChatScreen = (props) => {
	const bubbles = props.messages.map((m, i) => <MessageBubble {...m} key={i} />)

	const spacer = Platform.OS === 'ios' ? <KeyboardSpacer /> : null

	return (
		<View behavior="padding" style={styles.container}>
			<ScrollView
				style={styles.bubbleContainer}
				ref={(scrollView) => { scrollWindow = scrollView }}
				onLayout={event => {
					scrollHeight = event.nativeEvent.layout.height
				}}
				onContentSizeChange={(width, height) => {
					if (scrollHeight < height) scrollWindow.scrollTo({ y: height - scrollHeight })
				}}
			>
				{bubbles}
			</ScrollView>

			<View style={styles.messageBoxContainer}>
				<TextInput
					value={props.composingMessage}
					onChangeText={props.onComposeMessageUpdate}
					onSubmitEditing={props.onSendMessage}
					returnKeyType="send"
					style={styles.messageBox}
				/>

				<TouchableOpacity onPress={props.onSendMessage}>
					<Text style={styles.sendButton}>Send</Text>
				</TouchableOpacity>
			</View>

			{spacer}
		</View>
	)
}

ChatScreen.propTypes = {
	messages: PropTypes.array.isRequired,
	composingMessage: PropTypes.string,
	onComposeMessageUpdate: PropTypes.func.isRequired,
	onSendMessage: PropTypes.func.isRequired,
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	bubbleContainer: {
		flex: 1,
	},
	messageBoxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderTopWidth: 1,
		borderTopColor: '#cccccc',
		backgroundColor: '#eeeeee',
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	messageBox: {
		flex: 1,
		height: 40,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#dddddd',
		backgroundColor: '#ffffff',
		paddingHorizontal: 5,
	},
	sendButton: {
		color: 'blue',
		marginLeft: 10,
		marginRight: 5,
		fontSize: 16,
		fontWeight: '500',
	},
})

export default ChatScreen
