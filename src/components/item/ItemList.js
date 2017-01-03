import React, { PropTypes } from 'react';
import ItemListRow from './ItemListRow';
import { List } from 'material-ui/List';

const ItemList = ({ items, onEditItem, isMobile, onDoneItem, onUpdateItem }) => {
  return (
        <List>
            {items.map((item) => <ItemListRow key={item.id}
                                              item={item}
                                              onEditItem={onEditItem}
                                              isMobile={isMobile}
                                              onDoneItem={onDoneItem}
                                              onUpdateItem={onUpdateItem}/>)}
        </List>
  );
};

ItemList.propTypes = {
  onEditItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
  onDoneItem: PropTypes.func.isRequired,
  onUpdateItem: PropTypes.func.isRequired
};

export default ItemList;
