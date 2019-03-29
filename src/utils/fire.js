import { db } from '../../firebase';

export const getDataOnce = (name, callback) => {
  db.ref(name).once('value', callback);
};

export const getData = (name, callback) => {
  db.ref(name).on('value', callback);
};
