import React, { Component } from "react";
import { View, FlatList } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import TabsContainer from "AppLevelComponents/UI/TabsContainer";
import SubHeader from "AppLevelComponents/UI/SubHeader";
import ParallaxScroll from "@monterosa/react-native-parallax-scroll";

import Constants from "Helpers/Constants";
import { Colors } from "../../../UIProps/Colors";
import UsersList from "./TipsTab/UsersList";
import TipList from "./TipsTab/TipList";

class TipsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.pageBackground }}>
          <TipList />
      </View>
    );
  }
}

export default TipsTab;
