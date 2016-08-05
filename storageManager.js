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
