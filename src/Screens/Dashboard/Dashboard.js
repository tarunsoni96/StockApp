import React, { Component } from 'react';
import { View, Text ,StatusBar} from 'react-native';
import CustomText from 'AppLevelComponents/UI/CustomText'
import Container from 'AppLevelComponents/UI/Container'
import TabsContainer from 'AppLevelComponents/UI/TabsContainer'
import SubHeader from '../../AppLevelComponents/UI/SubHeader';
import Constants from "Helpers/Constants";
import TipsTab from './components/TipsTab';
import StreamTab from './components/StreamTab';
import {SceneMap} from 'react-native-tab-view';
import {Colors} from "UIProps/Colors";
const FirstRoute = () => <TipsTab />;
const SecondRoute = () => <StreamTab />;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      visible: false,
      isDrawerOpen: false,
      routes: [
        {key: 'first', title: 'Tips'},
        {key: 'second', title: 'Stream'},
      ],
    };
  }

  tabIndexSetter = index => {
    this.setState({index});
  };

  render() {
    return (
      <Container scroll={false}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />

        <SubHeader hideShadow leftIcon="user" rightIcon='search' type={Constants.header_back_middle_right} title='StockApp' />
        <TabsContainer
          sceneMap={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
          })}
          indexSetter={this.tabIndexSetter}
          state={this.state}
        />

        </Container>
    );
  }
}

export default Dashboard;
