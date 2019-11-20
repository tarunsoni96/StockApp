import React, { Component } from "react";
import { TouchableOpacity, View, StatusBar, ScrollView } from "react-native";
import Container from "AppLevelComponents/UI/Container";
import { Colors } from "UIProps/Colors";
import EStyleSheet from "react-native-extended-stylesheet";
import CustomText from "AppLevelComponents/UI/CustomText";
import Divider from "AppLevelComponents/UI/Divider";
import SubHeader from "../../AppLevelComponents/UI/SubHeader";
import Fonts from "UIProps/Fonts";
import ProfilePic from "AppLevelComponents/UI/ProfilePic";
import Constants from "Helpers/Constants";
import HelperMethods from "Helpers/Methods";
import StatsGraph from "./components/StatsGraph";

let titleSize = 19;
export class Profile extends Component {
  state = {};

  render() {
    const { userName, userImage } = this.props.navigation.state.params || {};
    return (
      <Container padding={0}>
        <SubHeader type={Constants.header_back} title="@Vinay" />

        <View style={{ alignItems: "center", marginTop: 15 }}>
          <ProfilePic pic={userImage} />
        </View>

        <View style={{ padding: 10 }}>
          <CustomText
            text={"About"}
            size={titleSize}
            font={Fonts.heavy}
            style={{ marginTop: 20 }}
            color="#000"
          />

          <CustomText
            text={`Info about the ueser Info about the ueser Info about the ueser Info about the ueser Info about the ueser`}
            color="#000"
          />
          <CustomText
            text={"Stats"}
            size={titleSize}
            font={Fonts.heavy}
            style={{ marginTop: 20 }}
            color="#000"
          />

          <StatsGraph />

          <CustomText
            text={"Success Rate"}
            size={titleSize}
            font={Fonts.heavy}
            style={{ marginTop: 20 }}
            color="#000"
          />

          <CustomText text={`90%`} color="#000" />

          <CustomText
            text={"Total Tips"}
            size={titleSize}
            font={Fonts.heavy}
            style={{ marginTop: 20 }}
            color="#000"
          />

          <CustomText text={"340"} color="#000" />

          <CustomText
            text={`Pricing`}
            style={{ marginTop: 20 }}
            font={Fonts.heavy}
            size={titleSize}
            color="#000"
          />

          <CustomText text={`${"\u20B9"}1000, Which includes: `} color="#000" />

          <CustomText
            text={` - Monthly Blogs`}
            style={{ marginTop: 10 }}
            font={Fonts.medium}
            size={16}
            color="#000"
          />

          <CustomText
            text={` - Tutorial Videos`}
            style={{ marginTop: 5 }}
            font={Fonts.medium}
            size={16}
            color="#000"
          />

          <CustomText
            text={`Expertise Areas`}
            style={{ marginTop: 20 }}
            font={Fonts.heavy}
            size={titleSize}
            color="#000"
          />

          <CustomText
            text={` - Bank Nifty`}
            style={{ marginTop: 10 }}
            font={Fonts.medium}
            size={16}
            color="#000"
          />

          <CustomText
            text={` - Equity`}
            style={{ marginTop: 5 }}
            font={Fonts.medium}
            size={16}
            color="#000"
          />

          <CustomText
            text={` - Commodity`}
            style={{ marginTop: 5 }}
            font={Fonts.medium}
            size={16}
            color="#000"
          />
        </View>
      </Container>
    );
  }
}

const styles = {
  infoContainer: {
    padding: 10,
    backgroundColor: "#fff",
    elevation: 4,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center"
  }
};
export default Profile;
