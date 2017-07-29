'use strict';

import React, { Component } from 'react'
import {
  View,
  TouchableHighlight,
  ListView,
  Text
} from 'react-native';

import Styles from './InsidePageStyles';

class InsidePage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data
    return (
      <View style={Styles.container}>
        <Text style={Styles.name}>
          {data.name} - {data.position}
          </Text>
      </View>
    );
  }

}

module.exports = InsidePage;
