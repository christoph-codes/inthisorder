import React, { createContext, useContext } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useHistory } from 'react-router-dom';
import { firestore } from '../config/firebaseConfig';
import { ToastContext } from './ToastProvider';
import { UserContext } from './UserProvider';

export const KidsContext = createContext();

export const KidsProvider = ({ children }) => {
	const history = useHistory();
	const { user } = useContext(UserContext);
	const { setToast } = useContext(ToastContext);

	const [kids, areKidsLoading, kidsErrors] = useCollectionData(
		firestore.collection('users').doc(user?.email).collection('kids')
	);

	const addChild = (childName, childAge, childPin, errorSetter) => {
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
					errorSetter('');
					setToast(
						'Successful',
						'Child has been successfully added.',
						'mint'
					);
				})
				.catch((err) => {
					errorSetter(err.message);
				});
		} else {
			errorSetter('You must complete all fields');
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
				setToast('Successful', 'Successfully updated the task', 'mint');
			});
	};

	const deleteChild = (childId, errorSetter) => {
		// TODO: Error setter when child deletion becomes a thing.
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
						errorSetter('');
						setToast(
							'Successful',
							'Child removed successfully',
							'secondary'
						);
						history.push('/admin/kids');
					})
					.catch((error) => {
						errorSetter('error', error);
					});
			} else {
				errorSetter('This child does not exist under your name!');
			}
		});
	};
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
