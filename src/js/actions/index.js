import {add_one,subtract_one} from '../constants'

export function incrementCounter() {
	return {
		type:add_one,
		payload:1
	}
export function decrementCounter() {
	return {
		type:subtract_one,
		payload:1
	}
}