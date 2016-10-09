import React, {PropTypes} from 'react';
import ItemListRow from './ItemListRow';
import {List} from 'material-ui/List';

const ItemList = ({items}) => {
    return (
        <List>
            {items.map(item => <ItemListRow key={item.id} item={item}/>)}
        </List>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired
};

export default ItemList;