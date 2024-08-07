import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  let ans = {};

  try {
    const p = await uploadPhoto();
    const u = await createUser();
    ans = { p, u };
  } catch (err) {
    ans = { p: null, u: null };
  }
  return ans;
}
