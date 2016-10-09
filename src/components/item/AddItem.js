import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AddItem = ({onSave, onItemChange, item}) => {
    return (
        <div>
            <TextField  value={item.title}
                        hintText="Add item"
                        onChange={onItemChange}  
                        fullWidth/>
            <RaisedButton fullWidth primary
                          onClick={onSave}
                          label="Add"/>
                    </div>
    );
};

AddItem.propTypes = {
    onSave: React.PropTypes.func.isRequired,
    onItemChange: React.PropTypes.func.isRequired,
    item: React.PropTypes.object.isRequired
};

export default AddItem;