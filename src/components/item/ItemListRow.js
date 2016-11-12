import React from 'react';
import { ListItem } from 'material-ui/List';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { red500 } from 'material-ui/styles/colors';

const ItemListRow = ({ item, onDelete }) => {
  return (
        <ListItem primaryText={item.title}
                  rightIcon={<DeleteIcon hoverColor={red500}
                                         onTouchTap={() => { onDelete(item.id); }}
                             />} />
    );
};

ItemListRow.propTypes = {
  onDelete: React.PropTypes.func.isRequired,
  item: React.PropTypes.object.isRequired
};

export default ItemListRow;
