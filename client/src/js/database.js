import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
//GET function
export const getDb = async (value) => {
  console.log('GET from the jateDB');
  // Connect to DB and version to use
  const jateDB = await openDB('jate', 1);
  // Create a new transaction and specify the DB and data privileges.
  const tx = jateDB.transaction("jate", "readwrite");
  // Open up desired object store
  const store = tx.objectStore("jate");
  // .getAll() method to get all data from DB
  const request = store.put({ jate: content });
  // Reqest confirmation
  const result = await request;
  console.log("Data saved to the database", result);

}

// PUT function
export const putDb = async (content) => {
  console.log('Put request to update jateDB');
  // Connect to DB and version to use
  const jateDB = await openDB("jate", 1);
  // Create a new transaction and specify the DB and data privileges.
  const tx = jateDB.transaction("jate", "readwrite");
  // Open up desired object store
  const store = tx.objectStore("jate");
   // .getAll() method to get all data from DB
  const request = store.put({ jate: content });
  // Reqest confirmation
  const result = await request;
  console.log("Data saved to the database", result);
};


initdb();
