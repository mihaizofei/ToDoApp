import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AddItem = ({onSave, onItemChange, item, saving}) => {
    return (
        <div>
            <TextField  value={item.title}
                        hintText="Add item"
                        onChange={onItemChange}  
                        fullWidth/>
            <RaisedButton fullWidth primary
                          disabled={saving}
                          onClick={onSave}
                          label={saving ? "Adding..." : "Add"}/>
        </div>
    );
};

AddItem.propTypes = {
    onSave: React.PropTypes.func.isRequired,
    onItemChange: React.PropTypes.func.isRequired,
    item: React.PropTypes.object.isRequired,
    saving: React.PropTypes.bool
};

export default AddItem;