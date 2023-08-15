import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyC2-sYZmAjHgd3O5sAFc3zH5_0BW_vaROk',
  authDomain: 'twitter-test-7b157.firebaseapp.com',
  projectId: 'twitter-test-7b157',
  storageBucket: 'twitter-test-7b157.appspot.com',
  messagingSenderId: '536402928379',
  appId: '1:536402928379:web:f2dbb7af62a8046b85c65e',
  measurementId: 'G-XWY3L27VQZ',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const User = db.collection('users');
