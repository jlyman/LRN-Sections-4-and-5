export function updateName(name) {
	return {
		type: 'UPDATE_NAME',
		name,
	}
}

export function updateAccountNumber(number) {
	return {
		type: 'UPDATE_ACCOUNT_NUMBER',
		number,
	}
}

export function updateComposeMessage(message) {
	return {
		type: 'UPDATE_COMPOSE_MESSAGE',
		message,
	}
}

export function sendMessage(timestamp) {
	return (dispatch, getState) => {
		dispatch({
			type: 'SEND_MESSAGE',
			message: getState().composingMessage,
			timestamp,
		})
	}
}
