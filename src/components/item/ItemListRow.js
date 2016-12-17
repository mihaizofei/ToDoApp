import React from 'react';
import { ListItem } from 'material-ui/List';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { red500 } from 'material-ui/styles/colors';

const ItemListRow = (props) => {

  let styles = {
    lineMobile: { height: 150, fontSize: 60, paddingTop: 50, textDecoration: props.item.done ? 'line-through' : '' },
    lineNormal: { textDecoration: props.item.done ? 'line-through' : '' },
    iconMobileSize: { height: 65, fontSize: 60, width: 65, marginTop: -10 }
  };
  return (
        <ListItem style={ props.isMobile ? styles.lineMobile : styles.lineNormal }
                  primaryText={props.item.title}
                  rightIcon={<DeleteIcon hoverColor={red500}
                                         onTouchTap={() => { props.onDeleteItem(props.item.id); }}
                                         style={props.isMobile ? styles.iconMobileSize : {} }
                             />}
                  onClick={() => { props.onDoneItem(props.item.id); }} />
  );
};

ItemListRow.propTypes = {
  onDeleteItem: React.PropTypes.func.isRequired,
  item: React.PropTypes.object.isRequired,
  isMobile: React.PropTypes.bool.isRequired,
  onDoneItem: React.PropTypes.func.isRequired
};

export default ItemListRow;
