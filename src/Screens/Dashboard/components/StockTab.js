import React, { Component } from "react";
import { View, FlatList } from "react-native";
import CustomText from "AppLevelComponents/UI/CustomText";
import Container from "AppLevelComponents/UI/Container";
import TabsContainer from "AppLevelComponents/UI/TabsContainer";
import SubHeader from "AppLevelComponents/UI/SubHeader";
import ParallaxScroll from "@monterosa/react-native-parallax-scroll";

import Constants from "Helpers/Constants";
import { Colors } from "../../../UIProps/Colors";
import StockList from "./StockTab/StockList";


export class StockTab extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.pageBackground }}>
            <ParallaxScroll
              fadeOutParallaxBackground={true}
              // renderParallaxBackground={({ animatedValue }) => <UsersList animatedValue={animatedValue} />}
              parallaxBackgroundScrollSpeed={5}
              parallaxHeight={0}
              parallaxForegroundScrollSpeed={2.5}
            >
              <StockList />
            </ParallaxScroll>
          </View>
        )
    }
}

export default StockTab
