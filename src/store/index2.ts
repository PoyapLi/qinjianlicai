import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore.ts';

const store = {
    ...recordStore,
    ...tagStore,
};

console.log(store);

export default  store;