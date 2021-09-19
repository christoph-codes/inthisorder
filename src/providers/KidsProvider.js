import React, { createContext, useContext } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useHistory } from 'react-router-dom';
import { firestore } from '../config/firebaseConfig';
import { UserContext } from './UserProvider';

export const KidsContext = createContext();

export const KidsProvider = ({ children }) => {
	const history = useHistory();
	const { user } = useContext(UserContext);

	const [kids, areKidsLoading, kidsErrors] = useCollectionData(
		firestore.collection('users').doc(user?.email).collection('kids')
	);

	const addChild = (childName, childAge, childPin) => {
		console.log('adding child');
		// Check if all fields are completed
		if (childName && childAge && childPin) {
			// Calls firebase data to add new record
			const datenow = Date.now();
			const newUID = datenow + user.authid + childName;
			firestore
				.collection('users')
				.doc(user.email)
				.collection('kids')
				.doc(newUID)
				.set({
					id: newUID,
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

	// Updated necessary fields to a task in firebase
	const updateChild = (childId, fieldsToUpdate) => {
		const dbChild = firestore
			.collection('users')
			.doc(user.email)
			.collection('kids')
			.doc(childId);
		dbChild
			.update({
				...fieldsToUpdate,
				lastUpdated: new Date(),
			})
			.then(() => {
				// TODO: Add toast to notify user of successfully updated task.
			});
	};

	const deleteChild = (childId) => {
		console.log(childId);
		const dbChild = firestore
			.collection('users')
			.doc(user.email)
			.collection('kids')
			.doc(childId);
		dbChild.get().then((doc) => {
			if (doc.exists) {
				dbChild
					.delete()
					.then(() => {
						// TODO: Add toast that the child has been remove successfully.
						console.log('Child removed successfully');
						history.push('/admin/kids');
					})
					.catch((error) => {
						console.log('error', error);
					});
			} else {
				console.log('This child does not exist under your name!');
			}
		});
	};
	if (kidsErrors) {
		console.log('kids errors:', kidsErrors);
	}
	return (
		<KidsContext.Provider
			value={{
				kids,
				areKidsLoading,
				addChild,
				kidsErrors,
				updateChild,
				deleteChild,
			}}
		>
			{children}
		</KidsContext.Provider>
	);
};
