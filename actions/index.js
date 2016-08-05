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
