import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let ans = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    ans = { photo, user };
  } catch (err) {
    ans = { photo: null, user: null };
  }
  return ans;
}
