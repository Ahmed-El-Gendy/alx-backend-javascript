import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let ans = {};

  try {
    const photo = await uploadPhoto();
    const u = await createUser();
    ans = { photo, u };
  } catch (err) {
    ans = { photo: null, u: null };
  }
  return ans;
}
