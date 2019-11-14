import React, { Component } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import UsersItem from "./UsersItem";

let data = [
  {
    userImage:
      "https://www.portrait101.com/wp-content/uploads/2013/10/natural-man-before-portrait-retouching-500x730.jpg",
    name: "Sam"
  },
  {
    userImage:
      "https://missygoldwynphotography.com/wp-content/uploads/2019/08/Layer-8-1-364x291.png",
    name: "Andy"
  },
  {
    userImage:
      "https://2arwdp1dlwob2ihy4u33bv5f-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/headshots-chicago-6.jpg",
    name: "Wane"
  },
  {
    userImage:
      "https://www.sv-photography.co.uk/img/formal-business-photography-650px.jpg",
    name: "Ron"
  }
];
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "Sam",
      loading:true,
    };
  }

  renderItems = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => this.setSelected(item)}>
        <UsersItem
          selected={item.name == this.state.selectedUser}
          item={item}
        />
      </TouchableOpacity>
    );
  };

  setSelected(item){
    this.setState({selectedUser:item.name,loading:true})
    setTimeout(()=>{
      this.setState({loading:false})
    },2000)
  }
  render() {
    return (
      <View style={{ marginTop: 13, marginBottom: 10, zIndex: 10000 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          nestedScrollEnabled
          data={data}
          extraData={this.state}
          keyExtractor={(item, index) => index + ""}
          renderItem={this.renderItems}
        />
      </View>
    );
  }
}

export default UsersList;
