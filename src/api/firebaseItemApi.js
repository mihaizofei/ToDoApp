import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBmLbozEM5LQSiPn3bJOcwHzc2LwuLobB0",
    authDomain: "todos-fbe67.firebaseapp.com",
    databaseURL: "https://todos-fbe67.firebaseio.com/"
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
          items.push( {id: ss.val().id , title: ss.val().title} );
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
       const existingItemIndex = items.findIndex(a => a.id == item.id);
       item.splice(existingItemIndex, 1, item);
    } else {
       item.id = generateId();
       items.push(item);
       firebaseRef.push(item);
    }

    resolve(item);
    });
  }

  static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      const indexOfItemToDelete = items.findIndex(item => {
          item.itemId == itemId;
        });
        items.splice(indexOfItemToDelete, 1);
        resolve();
    });
  }
}

export default ItemApi;