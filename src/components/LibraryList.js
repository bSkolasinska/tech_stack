import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import {ListView} from 'react-native';

class LibraryList extends Component{

    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library){
        return <ListItem library={library}/>
    }
     
    render(){
        return (
            <ListView dataSource={this.dataSource} renderRow={this.renderRow}/>
        );
    }
}

const mapStateToProp = state => {
   return { libraries: state.libraries  }
};

export default connect(mapStateToProp)(LibraryList); 