const DB_NAME = 'HomeVisitDB';
const DB_VERSION = 1;
const STORE_NAME = 'HomeVisitStore';

const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore(STORE_NAME, { autoIncrement: true });
        };

        request.onerror = (event) => {
            reject('IndexedDB error:', event.target.error);
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
    });
};

const saveData = async (data) => {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    store.add(data);
};

const getData = async () => {
    const db = await openDB();
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    return new Promise((resolve, reject) => {
        const request = store.getAll();

        request.onerror = (event) => {
            reject('IndexedDB error:', event.target.error);
        };

        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
    });
};


export const IndexDbService = {
    saveData,
    getData
}