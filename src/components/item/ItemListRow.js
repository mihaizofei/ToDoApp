import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {ListItem} from 'material-ui/List';

const ItemListRow = ({item}) => {
    return (
        <ListItem primaryText={item.title} />
    );
};

ItemListRow.propTypes = {
    item: PropTypes.object.isRequired
};

export default ItemListRow;