import {getAxios,server} from '../common'

export const requestSaveUser = params => {
	return getAxios().post(`${server}/user/addUser`,params).then(res => res.data);
};
