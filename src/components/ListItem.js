import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation  } from 'react-native';
import {CardSection} from './common/CardSection';
import * as actions from '../actions';
import {connect} from 'react-redux'; 

class ListItem extends Component{

    componentWillUpdate(){
        LayoutAnimation.spring(); 
    }

    renderDescription(){
        if(this.props.expanded){
            return (
                <CardSection>
                    <Text style={{flex: 1  }}>this.props.library.description</Text>
                </CardSection>
            );
        }
    }

    render(){
    const {titleStyle} = styles;
    const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback onPress{() => this.prop.selectLibrary(id)} >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription() }
                </View>
            </TouchableWithoutFeedback>
        );
    };

}

const styles = {
    titleStyle: {
        paddingLeft: 15,
        fontSize: 18
    }
};

const mapStateToProps = (state, ownProps)  => {
    const expanded = state.selectLibraryId === ownProps.library.id;

    return { expanded  };
}

export default connect(mapStateToProps , actions)(ListItem) ; 
