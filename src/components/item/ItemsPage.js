import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import TextField from 'material-ui/TextField';
import ItemList from './ItemList';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';

class ItemsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            item: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
    }

    onTitleChange(event) {
        const item = this.state.item;
        item.title = event.target.value;
        this.setState({item: item});
    }

    onClickAdd() {
        if (this.state.item.title !== '') {
            this.props.actions.createItem(this.state.item);
        }
    }

    render() {
        const {items} = this.props;
        return (
            <MuiThemeProvider>
                <div>
                    <ItemList items={items}/>
                    <div>
                    <TextField  hintText="Add item"  
                                value={this.state.item.title}
                                onChange={this.onTitleChange}
                                fullWidth/>
                    <RaisedButton fullWidth primary
                                  label="Add" 
                                  onClick={this.onClickAdd}/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

ItemsPage.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(itemActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);