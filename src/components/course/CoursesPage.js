import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        if (this.state.course.title !== '') {
            this.props.actions.createCourse(this.state.course);
        }
    }

    courseRow(course, index) {
        return <ListItem key={index} primaryText={course.title} />;
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <List>
                        {this.props.courses.map(this.courseRow)}
                    </List>
                    <div>
                    <TextField  hintText="Add course"  
                                value={this.state.course.title}
                                onChange={this.onTitleChange}
                                fullWidth/>
                    <RaisedButton fullWidth primary
                                  label="Add" 
                                  onClick={this.onClickSave}/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);