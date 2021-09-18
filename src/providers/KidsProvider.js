import React, { createContext, useContext } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../config/firebaseConfig';
import { UserContext } from './UserProvider';

export const KidsContext = createContext();

export const KidsProvider = ({ children }) => {
	const { user } = useContext(UserContext);

	const [kids, areKidsLoading, kidsErrors] = useCollectionData(
		firestore.collection('users').doc(user?.email).collection('kids')
	);

	const addChild = (childName, childAge, childPin) => {
		console.log('adding child');
		// Check if all fields are completed
		if (childName && childAge && childPin) {
			// Calls firebase data to add new record
			firestore
				.collection('users')
				.doc(user.email)
				.collection('kids')
				.add({
					name: childName,
					age: childAge,
					parentid: user.authid,
					pin: childPin,
					createdon: new Date(),
				})
				.then(() => {
					// TODO: Add Toast Message that child has been added.
				});
		} else {
			console.log('You must complete all fields');
		}
	};
	return (
		<KidsContext.Provider
			value={{ kids, areKidsLoading, addChild, kidsErrors }}
		>
			{children}
		</KidsContext.Provider>
	);
};
