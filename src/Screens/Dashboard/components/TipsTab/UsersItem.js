import React, { Component } from "react";
import { View, Image } from "react-native";
import { Colors } from "../../../../UIProps/Colors";
import CustomText from "AppLevelComponents/UI/CustomText";
import Divider from "AppLevelComponents/UI/Divider";
import LinearGradient from "react-native-linear-gradient";
import Svg, { Line } from "react-native-svg";
class UsersItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const colorSelectedMain = Colors.headerMain;
    const colorUnselected = ['#fff','#fff'];
    const headerColorsSecondary = Colors.headerSecondary;
    const headerColorsSecondaryUnselected = ['#F1EFF9','#FCFBFE'];
    const { userImage, name,selected } = this.props.item;
    return (
      
      <LinearGradient
        colors={this.props.selected ? colorSelectedMain : colorUnselected}
        style={[styles.container, { marginBottom:10,elevation:5, }]}
      >
        <View style={styles.container}>
          <Image
            source={{ uri: userImage }}
            resizeMode="cover"
            style={{ width: 80, height: 80, marginTop: 20, borderRadius: 10 }}
          />

          <LinearGradient
            colors={this.props.selected ?headerColorsSecondary :headerColorsSecondaryUnselected }
            style={styles.secondaryGradient}
          >
            <CustomText text={name}  color={this.props.selected ? '#fff': '#000' } />
          </LinearGradient>
        </View>
      </LinearGradient>
    );
  }
}

const styles = {
  container: {
    alignItems: "center",
    width: 110,
    height: 170,
    borderRadius: 10,
    marginHorizontal: 14
  },

  secondaryGradient: {
    width: "100%",
    flex:1,
    marginTop:30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  }
};
export default UsersItem;
