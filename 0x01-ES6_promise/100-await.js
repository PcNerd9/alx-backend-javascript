import { uploadPhoto, createUser } from './utils';

export default async function assynUploadUser() {
	try {
		const photo = await uploadPhoto();
		const user = await createUser();
		return {
			photo: photo,
			user: user
		};
	} catch(err) {
		return {
			photo: null,
			user: null,
		};
	};
}
