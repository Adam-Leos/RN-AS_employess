'use strict'

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry
} from 'react-native';

import CollectionPage from './app/collection-page/CollectionPage';
import InsidePage from './app/inside-page/InsidePage';

export default class newApp extends Component {

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'CollectionPage':
        return (
          <CollectionPage
            title='Collection Page'
            navigator={navigator}
          />
        )
      case 'InsidePage':
        return (
          <InsidePage
            title='Inside Page'
            {...route.passProps}
            navigator={navigator}
          />
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          title: 'Collection Page',
          id: 'CollectionPage'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }

}

AppRegistry.registerComponent('newApp', () => newApp);
