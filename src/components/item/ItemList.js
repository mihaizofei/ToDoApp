import React, { PropTypes } from 'react';
import ItemListRow from './ItemListRow';
import { List } from 'material-ui/List';

const ItemList = ({ items, onDelete }) => {
  return (
        <List>
            {items.map((item) => <ItemListRow key={item.id} item={item} onDelete={onDelete}/>)}
        </List>
    );
};

ItemList.propTypes = {
  onDelete: React.PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};

export default ItemList;
