import { mapAppDb } from '../../client/IndexedDB';

function useClearAll() {
    window.localStorage.clear();
    mapAppDb.delete();
    location.reload();
};

export {
    useClearAll,
}