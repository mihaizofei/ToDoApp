import Firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyBmLbozEM5LQSiPn3bJOcwHzc2LwuLobB0',
  authDomain: 'todos-fbe67.firebaseapp.com',
  databaseURL: 'https://todos-fbe67.firebaseio.com/'
};
Firebase.initializeApp(config);

const firebaseRef = Firebase.database().ref();

// All calls return promises.
let items = [];

const generateId = () => {
  return items.length === 0 ? 1 : items[items.length - 1].id + 1;
};

class ItemApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      firebaseRef.once('value').then(function(snapshot) {
        snapshot.forEach(function(ss) {
          items.push({ key: ss.getKey(), id: ss.val().id, title: ss.val().title, done: ss.val().done || false });
        });
        resolve(Object.assign([], items));
      });
    });
  }

  static saveItem(item) {
    item = Object.assign({}, item); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {

    // Simulate server-side validation
      const minItemTitleLength = 1;
      if (item.title.length < minItemTitleLength) {
        reject(`Title must be at least ${minItemTitleLength} characters.`);
      }
      if (item.id) {
        const existingItemIndex = items.findIndex((a) => a.id === item.id);
        item.splice(existingItemIndex, 1, item);
      } else {
        item.id = generateId();
        item.key = firebaseRef.push(item).getKey();
        items.push(item);
      }

      resolve(item);
    });
  }

  static doneItem(itemId) {
    return new Promise((resolve, reject) => {
      const index = items.findIndex((a) => a.id === itemId);
      let item = Object.assign({}, items[index]);
      item.done = !item.done;
      items.splice(index, 1, item);
      let itemKey = items[index].key;
      firebaseRef.child(itemKey).update(item);
      resolve(item);
    });
  }

  static markAllDone() {
    return new Promise((resolve, reject) => {
      for (let item of items) {
        let newItem = Object.assign({}, item);
        newItem.done = true;
        const index = items.findIndex((a) => a.id === item.id);
        let itemKey = items[index].key;
        firebaseRef.child(itemKey).update(newItem);
        items.splice(index, 1, newItem);
      }
      resolve();
    });
  }

  static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      const indexOfItemToDelete = items.findIndex(function(item) {
        return item.id === itemId;
      });
      let itemKey = items[indexOfItemToDelete].key;
      items.splice(indexOfItemToDelete, 1);
      firebaseRef.child(itemKey).remove();
      resolve();
    });
  }
}

export default ItemApi;
