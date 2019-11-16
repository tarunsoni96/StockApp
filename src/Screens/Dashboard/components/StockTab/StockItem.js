import React, { Component } from "react";
import { View, Image } from "react-native";
import Fonts from "UIProps/Fonts";
import { Colors } from "../../../../UIProps/Colors";
import CustomText from "AppLevelComponents/UI/CustomText";
import { LineChart, Grid } from "react-native-svg-charts";
import {Transition} from 'react-navigation-fluid-transitions';

const data = [50, 10, 40, 95, -4, -24, 25, 91, 35, 53, -53, 24, 50, -20, -80];

class StockItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const headerColorsMain = Colors.headerMain;
    const headerColorsSecondary = Colors.headerSecondary;
    const { headerType } = this.props;
    let gradientPropsMain = {
      start: { x: -2.4, y: 5 },
      end: { x: 1.25, y: 1 },
      locations: [0.6, 1],
      colors: headerColorsMain
    };

    let gradientPropsNavigational = {
      colors: headerColorsMain,
      locations: [0.45, 1]
    };

    let gradientSettings =
      headerType == "main" ? gradientPropsMain : gradientPropsNavigational;
    const { tip,userImage, name,stock } = this.props.item;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row",width:'100%',  }}>
        <Transition shared={'userImage'}>
          <Image source={{uri:userImage}} style={{width:50,height:50,borderRadius:100}} />
          </Transition>
          <View style={{marginLeft:5,marginVertical:6,flex:1}}>
          <CustomText text={`@${name}`} color={Colors.accent} size={14} />
          {/* <CustomText text={`${stock}`} color={'#000'} size={14} /> */}
          <CustomText text={`${tip}`} style={{}} color={'#000'} size={14} />

          </View>
        </View>
      </View>
    );
  }
}

const styles = {

 
  container: {
    marginVertical: 7,
    borderWidth:0.6,
    borderColor:'#E2E2E2',
    borderRadius: 3,
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    marginHorizontal: 15,
  },

};
export default StockItem;
