import React, { Component } from "react";
import { View, FlatList, TouchableWithoutFeedback } from "react-native";
import StreamItem from "./StreamItem";
import { withNavigation } from "react-navigation";
import CustomFlatList from "../../../../AppLevelComponents/UI/CustomFlatList";

let data = [
  {
    userImage:
      "https://www.portrait101.com/wp-content/uploads/2013/10/natural-man-before-portrait-retouching-500x730.jpg",
    tip: "Positive outlook of HDFC by 2020",
    name: "Vinay",
    stock: "INFY"
  }
];

class StreamList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItems = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback onPress={() => this.navigateProfile(item)}>
        <View>
          <StreamItem item={item} />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  navigateProfile(item) {
    this.props.navigation.navigate("profile", { userImage: item.userImage });
  }

  onRefresh = () =>{
    this.setState({refreshing:false})
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomFlatList onRefresh={this.onRefresh} refreshing={this.state.refreshing} renderItem={this.renderItems} data={data} />
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%"
  }
};
export default withNavigation(StreamList);
