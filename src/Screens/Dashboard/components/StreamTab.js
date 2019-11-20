import React, { Component } from "react";
import { View, FlatList } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import TabsContainer from "AppLevelComponents/UI/TabsContainer";
import SubHeader from "AppLevelComponents/UI/SubHeader";
import ParallaxScroll from "@monterosa/react-native-parallax-scroll";

import Constants from "Helpers/Constants";
import { Colors } from "../../../UIProps/Colors";
import StreamList from "./StockTab/StreamList";


export class StreamTab extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.pageBackground }}>
              <StreamList />
          </View>
        )
    }
}

export default StreamTab
