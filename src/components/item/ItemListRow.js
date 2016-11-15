import React from 'react';
import { ListItem } from 'material-ui/List';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { red500 } from 'material-ui/styles/colors';

const styles = {
  lineMobileSize: {
    height: 150,
    fontSize: 60,
    paddingTop: 50
  },
  iconMobileSize: {
    height: 65,
    fontSize: 60,
    width: 65,
    marginTop: -10
  }
};

const ItemListRow = ({ item, onDelete, isMobile }) => {
  return (
        <ListItem style={isMobile ? styles.lineMobileSize : {}}
                  primaryText={item.title}
                  rightIcon={<DeleteIcon hoverColor={red500}
                                         onTouchTap={() => { onDelete(item.id); }}
                                         style={isMobile ? styles.iconMobileSize : {} }
                             />} />
  );
};

ItemListRow.propTypes = {
  onDelete: React.PropTypes.func.isRequired,
  item: React.PropTypes.object.isRequired,
  isMobile: React.PropTypes.bool.isRequired
};

export default ItemListRow;
