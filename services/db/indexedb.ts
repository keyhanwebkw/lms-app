import { openDB, type IDBPDatabase } from "idb"


let dbPromise: Promise<IDBPDatabase<unknown>>;
if (process.client) {
    dbPromise = openDB('mojahaz-app', 1, {
        upgrade(db) {
            db.createObjectStore('keyval');
        },
    })
}

export async function getIndexedDB(key: string) {
    return (await dbPromise).get('keyval', key);
}

export async function setIndexedDB(key: string, val: any) {
    return (await dbPromise).put('keyval', val, key);
}

export async function keysIndexedDB() {
    return (await dbPromise).getAllKeys('keyval');
}

export async function getAllIndexedDB() {
    return (await dbPromise).getAll('keyval');
}

export async function removeItemIndexdDB(key: string) {
    return (await dbPromise).delete('keyval', key)
}
