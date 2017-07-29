'use strict';

import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  ListView,
  Text
} from 'react-native';

import Styles from './CollectionPageStyles';
import CollectionData from '../resources/CollectionData';

class CollectionPage extends Component {

  constructor(props) {
    super(props);

    let dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid}
    );

    this.state = {
      dataSource: dataSource.cloneWithRows(CollectionData)
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return (
	    <TouchableHighlight
        onPress={() => this.onRowPressed(rowData)}
	      underlayColor='#ddd'>
	        <View>
    	        <View style={Styles.rowContainer}>
      	          <View  style={Styles.textContainer}>
      	            <Text style={Styles.name}>{rowData.name}</Text>
      	            <Text style={Styles.position}
      	                  numberOfLines={1}>
                      {rowData.position}
                    </Text>
      	          </View>
	            </View>
	            <View style={Styles.separator}/>
          </View>
	    </TouchableHighlight>
	  );
	}

  onRowPressed(rowData) {

    this.props.navigator.push(
      {
        title: 'Inside',
        passProps: {data: rowData},
        id: 'InsidePage'
      }
    );
  }

  render() {
    return (
      <ListView style={Styles.list}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }

}

module.exports = CollectionPage;
