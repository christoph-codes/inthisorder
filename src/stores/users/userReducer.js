import { signIn, signOut } from './userActions';
import { SIGN_IN, SIGN_OUT } from './user_action_types';

export const initialUser = {
	loggedInStatus: false,
	accountType: null,
	email: '',
	familyCode: '',
	familyName: '',
	fname: '',
	lname: '',
	authid: '',
};

export const userReducer = (user = initialUser, action) => {
	switch (action.type) {
		case SIGN_IN:
			console.log('User Signed In');
			return signIn(action.email, action.password, user);
		case SIGN_OUT:
			console.log('User Signed Out');
			return signOut();
		default:
			console.log('Something went wrong...');
			throw new Error();
	}
};

export default userReducer;
