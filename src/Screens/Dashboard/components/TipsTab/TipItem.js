import React, { Component } from "react";
import { View, Image } from "react-native";
import Fonts from "UIProps/Fonts";
import { Colors } from "../../../../UIProps/Colors";
import CustomText from "AppLevelComponents/UI/CustomText";
import CustomButton from "AppLevelComponents/UI/CustomButton";
import Divider from "AppLevelComponents/UI/Divider";
import { LineChart, Grid } from "react-native-svg-charts";
import Icons from "../../../../AppLevelComponents/UI/Icons";
const data = [50, 10, 40, 95, -4, -24, 25, 91, 35, 53, -53, 24, 50, -20, -80];

class TipItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      tip,
      title,
      stockType,
      target,
      price,
      sl,
      by,
      date,
      duration
    } = this.props.item;
    return (
      <View style={[styles.container]}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[
              styles.indicator,
              {
                backgroundColor:
                  stockType == "positive"
                    ? Colors.stockPositive
                    : Colors.stockNegative
              }
            ]}
          />

          <View style={{ padding: 10, width: "100%" }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <CustomText
                  text={date}
                  color={"#6D6D6D"}
                  font={Fonts.regular}
                  size={14}
                />
                {stockType == "positive" && (
                  <Icons
                    lib="Material"
                    style={{ marginTop: -4, marginLeft: 10 }}
                    size={21}
                    name="check"
                    color={Colors.stockPositive}
                  />
                )}
              </View>
              <CustomText text={`@${by}`} color={Colors.accent} size={14} />
            </View>

            <CustomText
              text={title}
              font={Fonts.heavy}
              size={15}
              color="#000"
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <CustomText
                text={`Price ${"\u20B9"}${price} `}
                color={"#434343"}
                font={Fonts.regular}
                size={14}
              />

              <Divider />
              <CustomText
                text={`SL ${"\u20B9"}${sl} `}
                color={"#434343"}
                font={Fonts.regular}
                size={14}
              />
              <Divider />

              <CustomText
                text={`Target ${"\u20B9"}${target}`}
                color={"#434343"}
                size={14}
              />
            </View>

            <CustomText
              text={`Duration ${duration}`}
              style={{ width: "100%" }}
              font={Fonts.regular}
              color={Colors.light}
              size={14}
            />

            <CustomText
              text={"BUY"}
              color={Colors.accent}
              font={Fonts.heavy}
              onPress={() => alert("BUY")}
              size={16}
              style={{ marginTop: 5,maxWidth:'16%',padding:5,paddingLeft:0}}
            />

            {/* <CustomText
              text={tip}
              style={{ width: "100%", }}
              color={Colors.light}
              size={14}
            />  */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    marginVertical: 7,
    borderWidth: 0.6,
    borderColor: "#E2E2E2",

    borderRadius: 3,
    marginHorizontal: 15
    // backgroundColor:'#F2F3F6',
    // elevation:1,
    // marginVertical: 7,
    // borderRadius: 3,
    // marginHorizontal: 15,
    // borderWidth: 0.6,
    // borderColor:'#E2E2E2'
    // paddingBottom:10,
  },

  circle: {
    width: 38,
    height: 38,
    borderRadius: 100 / 2,
    backgroundColor: Colors.accent,
    alignItems: "center",
    justifyContent: "center"
  },

  indicator: {
    width: 6,
    borderRadius: 3,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    height: "100%",
    backgroundColor: "green"
  }
};
export default TipItem;
