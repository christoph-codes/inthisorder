export const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			const newUser = {
				loggedInStatus: true,
				accountType: action.type,
				email: action.email,
				familyCode: action.familyCode,
				familyName: action.familyName,
				fname: action.fname,
				lname: action.lname,
				authid: action.authid,
			};
			console.log('User Added');
			return {
				...state,
				newUser,
			};
		case 'CLEAR_USER':
			console.log('User Cleared');
			return {
				user: {
					state,
				},
			};
		default:
			return state;
	}
};
