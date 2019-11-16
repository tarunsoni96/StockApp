import React, { Component } from 'react';
import { Text, Dimensions } from 'react-native';
import {TabView, SceneMap,TabBar} from 'react-native-tab-view';
import {Colors} from "UIProps/Colors";
import 'Helpers/global'
class TabsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'first', title: 'Upcoming shifts'},
        {key: 'second', title: 'Second'},
      ],
    };
  }

  render() {
    const {sceneMap,indexSetter} = this.props
    return (
      <TabView
      // swipeEnabled={false}
      nestedScrollEnabled
          renderTabBar={props => (
            <TabBar
              {...props}
              labelStyle={{ color: '#000',  }}
              indicatorStyle={{backgroundColor: Colors.accent,height:3.2,alignSelf:'center'}}
              indicatorContainerStyle={{alignSelf:'center',marginLeft:0}}
              style={{backgroundColor: Colors.primary,justifyContent:'center',elevation:10 }}
            />
          )}
          navigationState={this.props.state}
          renderScene={sceneMap}
          onIndexChange={index => indexSetter(index) }
          initialLayout={{width: global.deviceWidth}}
        />
    );
  }
}

export default TabsContainer;
