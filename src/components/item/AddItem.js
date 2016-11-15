import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  mobileSize: {
    height: 120,
    fontSize: 50
  }
};

const AddItem = ({ onSave, onItemChange, item, saving, errors, isMobile }) => {
  return (
        <div>
            <TextField value={item.title}
                        hintText="Add item"
                        onChange={onItemChange}
                        fullWidth
                        errorText={errors.title}
                        onKeyDown={(e) => { if (e.keyCode === 13) { onSave(e); } }}
                        style={isMobile ? styles.mobileSize : {}}/>
            <RaisedButton fullWidth primary
                          disabled={saving}
                          onClick={onSave}
                          label={saving ? 'Adding...' : 'Add'}
                          style={isMobile ? styles.mobileSize : {}}
                          labelStyle={isMobile ? styles.mobileSize : {}}/>
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
