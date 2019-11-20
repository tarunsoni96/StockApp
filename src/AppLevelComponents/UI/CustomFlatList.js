import React, { Component } from "react";
import { Text, FlatList, RefreshControl, View } from "react-native";
import { Colors } from "UIProps/Colors";
export class CustomFlatList extends Component {
  render() {
    const { refreshing, onRefresh, title, renderItem, data } = this.props;

    return (
      <FlatList
        refreshControl={
          onRefresh ? (
            <RefreshControl
              tintColor={Colors.accent}
              titleColor={Colors.accent}
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[Colors.accent]}
              title={title || "Pull to refresh"}
            />
          ) : (
            undefined
          )
        }
        data={data}
        keyExtractor={(item, index) => index + ""}
        renderItem={renderItem}
      />
    );
  }
}

export default CustomFlatList;
