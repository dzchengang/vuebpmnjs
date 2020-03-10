import axios from 'axios';

export const server = 'http://localhost:8089/';
axios.defaults.timeout = 600000;
export const getAxios = () => {
	var instance = axios.create({
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'post',
		transformRequest: [function(data) {
			let ret = ''
			for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
			}
			return ret
		}],
	});
	return instance;
}
