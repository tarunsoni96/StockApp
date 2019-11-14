import React, { Component } from "react";
import { View, Image } from "react-native";
import Fonts from "UIProps/Fonts";
import { Colors } from "../../../../UIProps/Colors";
import CustomText from "AppLevelComponents/UI/CustomText";
import { LineChart, Grid } from "react-native-svg-charts";
const data = [50, 10, 40, 95, -4, -24, 25, 91, 35, 53, -53, 24, 50, -20, -80];

class TipItem extends Component {
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
    const { tip, title } = this.props.item;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{width:'100%'}}>
            <CustomText text={title} font={Fonts.heavy} size={15} color="#000" />
            <CustomText
              text={tip}
              style={{ width: "100%", }}
              color={Colors.light}
              size={14}
            />
          </View>

          {/* <View style={{ flexDirection: "row",justifyContent:'space-around', alignItems: "center" }}>
            <LineChart
              style={{ height: 20, width: 40 }}
              data={data}
              svg={{ stroke: Colors.accent }}
              contentInset={{ top: 20, bottom: 20 }}
            />

<CustomText
              text={'192.0'}
              style={{ width: "90%" }}
              singleLine
              font={Fonts.heavy}
              color={Colors.light}
              size={15}
            />


          </View> */}
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 0,
    paddingVertical: 5,
    marginVertical: 7,
    borderBottomColor: Colors.lighter,
    borderBottomWidth: 1,
    borderRadius: 10,
    marginHorizontal: 15
  },

  secondaryGradient: {
    width: "100%",
    flex: 1,
    marginTop: 30,
    elevation: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  }
};
export default TipItem;
