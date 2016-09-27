import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const items = [
  {
    id: 1,
    title: "Paine"
  },
  {
    id: 2,
    title: "Lapte"
  },
  {
    id: 3,
    title: "Oua"
  },
  {
    id: 4,
    title: "Carne"
  },
  {
    id: 5,
    title: "Iaurt"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  return items[items.length - 1].id + 1;
};

class ItemApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static saveItem(item) {
    item = Object.assign({}, item); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minItemTitleLength = 1;
        if (item.title.length < minItemTitleLength) {
          reject(`Title must be at least ${minItemTitleLength} characters.`);
        }

        if (item.id) {
          const existingItemIndex = items.findIndex(a => a.id == item.id);
          item.splice(existingItemIndex, 1, item);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new items in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          item.id = generateId();
          items.push(item);
        }

        resolve(item);
      }, delay);
    });
  }

  static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfItemToDelete = items.findIndex(item => {
          item.itemId == itemId;
        });
        items.splice(indexOfItemToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ItemApi;