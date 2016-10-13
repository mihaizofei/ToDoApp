import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import ItemList from './ItemList';
import AddItem from './AddItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import toastr from 'toastr';

class ItemsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            item: {id:'', title:''},
            saving: false
        };

        this.updateItemState = this.updateItemState.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    updateItemState(event) {
        let item = this.state.item;
        item['title'] = event.target.value;
        return this.setState({item: item});
    }

    saveItem(event) {
        event.preventDefault(); 
        this.setState({saving:true});       
        this.props.actions.saveItem(this.state.item)
            .then(()=>this.resetState())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    resetState() {
        this.setState({item:{id:'', title:''}, 
                       saving: false});
        toastr.success('Item saved');
    }

    render() {
        const {items} = this.props;
        return (
            <MuiThemeProvider>
                <div>
                    <ItemList items={items}/>
                    <AddItem onSave={this.saveItem}
                             onItemChange={this.updateItemState}
                             item={this.state.item}
                             saving={this.state.saving}/>
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