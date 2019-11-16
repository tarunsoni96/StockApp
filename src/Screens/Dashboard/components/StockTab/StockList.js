import React, { Component } from "react";
import { View, FlatList,TouchableWithoutFeedback } from "react-native";
import StockItem from "./StockItem";
import { withNavigation } from "react-navigation";

let data = [
  {
    userImage:
      "https://www.portrait101.com/wp-content/uploads/2013/10/natural-man-before-portrait-retouching-500x730.jpg",
    tip: "Positive outlook of HDFC by 2020",
    name:'Vinay',
    stock:'INFY',
  },
];

class StockList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItems = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback onPress={()=>this.navigateProfile(item)}>
  <View>

    <StockItem item={item} />
  </View>
      </TouchableWithoutFeedback>
    )
  };

  navigateProfile(item){
    this.props.navigation.navigate('profile',{userImage:item.userImage})
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index + ""}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "#fff",
    flex:1,
    width: "100%"
  }
};
export default withNavigation(StockList)
