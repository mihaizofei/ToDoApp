import React from 'react';
import { ListItem } from 'material-ui/List';
import EditIcon from 'material-ui/svg-icons/image/edit';
import { blue500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

class ItemListRow extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { title: this.props.item.title };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleBlur(event) {
    this.props.onUpdateItem(this.props.item.id, this.state.title);
  }

  render() {
    let styles = {
      lineMobile: { height: 150, fontSize: 60, paddingTop: 50,
        textDecoration: this.props.item.done ? 'line-through' : '' },
      lineNormal: { textDecoration: this.props.item.done ? 'line-through' : '' },
      iconMobileSize: { height: 65, fontSize: 60, width: 65, marginTop: -10 }
    };
    return (
          this.props.item.inEdit ?
          <TextField style={{ width: '100%' }}
                    value={this.state.title}
                    id={this.props.item.id.toString()}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}/>
          :
          <ListItem style={ this.props.isMobile ? styles.lineMobile : styles.lineNormal }
                    primaryText={this.props.item.title}
                    rightIcon={<EditIcon hoverColor={blue500}
                                        onTouchTap={() => { this.props.onEditItem(this.props.item.id); }}
                                        style={this.props.isMobile ? styles.iconMobileSize : {} }/>
                              }
                    onClick={() => { this.props.onDoneItem(this.props.item.id); }}
                    key={this.props.item.id.toString()}/>
    );
  }
}

ItemListRow.propTypes = {
  onEditItem: React.PropTypes.func.isRequired,
  item: React.PropTypes.object.isRequired,
  isMobile: React.PropTypes.bool.isRequired,
  onDoneItem: React.PropTypes.func.isRequired
};

export default ItemListRow;
