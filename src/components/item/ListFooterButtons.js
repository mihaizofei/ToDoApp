import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DeleteAllDoneIcon from 'material-ui/svg-icons/action/delete-forever';
import MarkAllDoneIcon from 'material-ui/svg-icons/action/done-all';
import HideDoneIcon from 'material-ui/svg-icons/action/done';

const styles = {
  mobile: { height: 100, flex: 1 },
  normal: { margin: 5, marginTop: 12, flex: 1 }
};

const ListFooterButtons = (props) => {
  return (
    <div style={{ display: 'flex' }}>
        <RaisedButton primary
                      icon = {<HideDoneIcon />}
                      style={props.isMobile ? styles.mobile : styles.normal}
                      onClick = {props.onHideDoneItems}/>
        <RaisedButton primary
                      icon = {<MarkAllDoneIcon />}
                      style={props.isMobile ? styles.mobile : styles.normal}
                      onClick = {props.onMarkAllItemsDone}/>
        <RaisedButton primary
                      icon = {<DeleteAllDoneIcon />}
                      style={props.isMobile ? styles.mobile : styles.normal}
                      onClick = {props.onDeleteAllDoneItems}/>
    </div>
  );
};

export default ListFooterButtons;
