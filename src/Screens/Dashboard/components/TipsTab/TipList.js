import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import UsersItem from './UsersItem';
import TipItem from './TipItem';


let data = [
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
    {title:'AAPL',tip:'Good time to buy as iphone 12 is about release'},
]
class TipList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderItems = ({ item, index }) => {
    return (
          <TipItem item={item} />
      );
    };
  render() {
    return (
<View style={styles.container} >

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
  container:{
    backgroundColor:'#fff',
    width:'100%',
  }
}
export default TipList;
