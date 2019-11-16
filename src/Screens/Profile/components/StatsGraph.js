import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import {Colors} from "UIProps/Colors";

const data = [100,140,150,180, 200]
const contentInset = { top: 10, bottom: 5 }
class StatsGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ height:300,marginTop:10, flexDirection: 'row' }}>
        <YAxis
            data={data}
            contentInset={contentInset}
            svg={{
                fill: 'grey',
                fontSize: 10,
            }}
            numberOfTicks={7}
            formatLabel={(value) => `${value}K`}
        />
        <View style={{borderWidth:1,borderColor:'rgba(0,0,0,0.3)',marginLeft:10,flex:1,borderTopWidth:0,borderRightWidth:0}} >

        <LineChart
            style={{ flex: 1,  }}
            data={data}
            svg={{ stroke: Colors.accent }}
            // contentInset={contentInset}
        >
            {/* <Grid  /> */}
        </LineChart>
        </View>
    </View>
    );
  }
}

export default StatsGraph;
