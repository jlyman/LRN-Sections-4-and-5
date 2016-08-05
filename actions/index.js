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
