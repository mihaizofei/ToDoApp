import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';

const styles = {
  textFieldMobile: { height: 100, fontSize: 40, flex: 11 },
  textField: { flex: 9 },
  buttonMobile: { height: 100, fontSize: 40, flex: 1 },
  button: { flex: 1, minWidth: 25, height: 36 }
};

const AddItem = ({ onSave, onItemChange, item, saving, errors, isMobile }) => {
  return (
        <div style={{ display: 'flex' }}>
            <TextField value={item.title}
                        hintText="Add item"
                        onChange={onItemChange}
                        errorText={errors.title}
                        onKeyDown={(e) => { if (e.keyCode === 13) { onSave(e); } }}
                        style={isMobile ? styles.textFieldMobile : styles.textField}/>
            <RaisedButton primary
                          disabled={saving}
                          onClick={onSave}
                          icon={<AddIcon />}
                          style={isMobile ? styles.buttonMobile : styles.button}/>
        </div>
  );
};

AddItem.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  onItemChange: React.PropTypes.func.isRequired,
  item: React.PropTypes.object.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object,
  isMobile: React.PropTypes.bool.isRequired
};

export default AddItem;
