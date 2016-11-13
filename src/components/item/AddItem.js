import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AddItem = ({ onSave, onItemChange, item, saving, errors }) => {
  return (
        <div>
            <TextField value={item.title}
                        hintText="Add item"
                        onChange={onItemChange}
                        fullWidth
                        errorText={errors.title}
                        onKeyDown={(e) => { if (e.keyCode === 13) { onSave(e); } }}/>
            <RaisedButton fullWidth primary
                          disabled={saving}
                          onClick={onSave}
                          label={saving ? 'Adding...' : 'Add'}/>
        </div>
  );
};

AddItem.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  onItemChange: React.PropTypes.func.isRequired,
  item: React.PropTypes.object.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default AddItem;
