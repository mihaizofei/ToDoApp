import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as itemActions from '../../actions/itemActions';
import ItemList from './ItemList';
import AddItem from './AddItem';
import ListFooterButtons from './ListFooterButtons';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import toastr from 'toastr';

export class ItemsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: { id: '', title: '', done: false },
      saving: false,
      errors: {},
      isMobile: navigator.userAgent.match(/Android/i) || false,
      hideDoneItems: false
    };

    this.updateItemState = this.updateItemState.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.onHideDoneItems = this.onHideDoneItems.bind(this);
    this.onMarkAllItemsDone = this.onMarkAllItemsDone.bind(this);
    this.onDeleteAllDoneItems = this.onDeleteAllDoneItems.bind(this);
    this.doneItem = this.doneItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  updateItemState(event) {
    let item = this.state.item;
    item.title = event.target.value;
    item.done = false;
    return this.setState({ item: item });
  }

  addItemIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.item.title.length < 1) {
      errors.title = 'Item must be at least 1 character.';
      formIsValid = false;
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  saveItem(event) {
    event.preventDefault();

    if (!this.addItemIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.saveItem(this.state.item)
            .then(() => this.resetState())
            .catch((error) => {
              toastr.error(error);
              this.setState({ saving: false });
            });
  }

  editItem(itemId) {
    this.props.actions.editItem(itemId);
  }

  resetState() {
    this.setState({ item: { id: '', title: '' }, saving: false });
    toastr.success('Item saved');
  }

  onHideDoneItems() {
    this.setState({ hideDoneItems: !this.state.hideDoneItems });
  }

  onMarkAllItemsDone() {
    this.props.actions.markAllDone()
        .then(() => toastr.success('All items done'))
        .catch((error) => toastr.error(error));
  }

  onDeleteAllDoneItems() {
    this.props.actions.deleteAllDone()
      .then(() => toastr.success('All done items deleted'))
      .catch((error) => toastr.error(error));
  }

  doneItem(itemId) {
    this.props.actions.doneItem(itemId)
            .then(() => this.itemDone())
            .catch((error) => {
              toastr.error(error);
            });
  }

  updateItem(itemId, title) {
    this.props.actions.updateItem(itemId, title)
      .then(() => toastr.success('Item updated'))
      .catch((error) => toastr.error(error));
  }

  itemDone() {
    toastr.success('Item completed');
  }

  render() {
    const { items } = this.props;
    return (
            <MuiThemeProvider>
                <div>
                    <ItemList items={this.state.hideDoneItems ? items.filter((i) => !i.done) : items}
                              onEditItem={this.editItem}
                              isMobile={this.state.isMobile}
                              onDoneItem={this.doneItem}
                              onUpdateItem={this.updateItem}/>
                    <AddItem onSave={this.saveItem}
                             onItemChange={this.updateItemState}
                             item={this.state.item}
                             saving={this.state.saving}
                             errors={this.state.errors}
                             isMobile={this.state.isMobile}/>
                    <ListFooterButtons onHideDoneItems={this.onHideDoneItems}
                                       onMarkAllItemsDone={this.onMarkAllItemsDone}
                                       onDeleteAllDoneItems={this.onDeleteAllDoneItems}
                                       isMobile={this.state.isMobile}/>
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
