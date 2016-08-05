import React from 'react'
import {
	AsyncStorage,
} from 'react-native'

const storageNameKey = '@ChatNow:name'
const storageAccountNumKey = '@ChatNow:accountNum'


export function setCustomerInfo(name, accountNumber) {
	return AsyncStorage.multiSet([
		[storageNameKey, name],
		[storageAccountNumKey, accountNumber],
	])
}

export function getCustomerInfo() {
	return new Promise((resolve, reject) => {
		AsyncStorage.multiGet([
			storageNameKey,
			storageAccountNumKey,
		])
		.then(result => resolve({
			name: result[0][1],
			accountNumber: result[1][1],
		}))
		.catch(ex => reject(ex))
	})
}

export function clearCustomerInfo() {
	AsyncStorage.clear()
}

window.safelyClearStorage = clearCustomerInfo
