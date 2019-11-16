import React, { Component } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import UsersItem from "./UsersItem";
import TipItem from "./TipItem";
import NetworkAwareContent from "AppLevelComponents/UI/NetworkAwareContent";

import { getTips } from "ServiceProviders/ApiCaller";
class TipList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isApiCall: false,
      data: [],
      refreshing: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ isApiCall: true });
    getTips()
      .then(resp => {
        this.setState({ refreshing: false, isApiCall: false, data: resp });
      })
      .catch(err => {
        this.setState({ isApiCall: "failed" });
      });
  }

  renderItems = ({ item, index }) => {
    return <TipItem item={item} />;
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    this.getData();
  };
  render() {
    return (
      <View style={styles.container}>
        <NetworkAwareContent
          data={this.state.data}
          apiFunc={this.getData}
          isApiCall={this.state.isApiCall}
        >
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                title="Pull to refresh"
              />
            }
            nestedScrollEnabled
            data={this.state.data}
            keyExtractor={(item, index) => index + ""}
            renderItem={this.renderItems}
          />
        </NetworkAwareContent>
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
export default TipList;
