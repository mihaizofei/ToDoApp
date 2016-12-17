import React, { PropTypes } from 'react';
import ItemListRow from './ItemListRow';
import { List } from 'material-ui/List';

const ItemList = ({ items, onDeleteItem, isMobile, onDoneItem }) => {
  return (
        <List>
            {items.map((item) => <ItemListRow key={item.id}
                                              item={item}
                                              onDeleteItem={onDeleteItem}
                                              isMobile={isMobile}
                                              onDoneItem={onDoneItem}/>)}
        </List>
  );
};

ItemList.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
  onDoneItem: PropTypes.func.isRequired
};

export default ItemList;
