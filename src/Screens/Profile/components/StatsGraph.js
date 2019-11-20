import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HelperMethods from 'Helpers/Methods'

import { AreaChart, YAxis, Grid } from 'react-native-svg-charts'
import {Colors} from "UIProps/Colors";
import * as shape from 'd3-shape'
const contentInset = { top: 10, bottom: 5 }
class StatsGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[100,200]
    };
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({data:[100,140,150,180, 200]})
    }, 1000);
  }

  render() {
    return (
        <View style={{ height:300,marginTop:10, flexDirection: 'row' }}>
        <YAxis
            data={this.state.data}
            contentInset={contentInset}
            svg={{
                fill: 'grey',
                fontSize: 10,
            }}
            numberOfTicks={7}
            formatLabel={(value) => `${value}K`}
        />
        <View style={{borderWidth:1,borderColor:'rgba(0,0,0,0.3)',marginLeft:10,flex:1,borderTopWidth:0,borderRightWidth:0}} >

          <AreaChart
                data={this.state.data}
                style={{flex:1}}
                curve={shape.curveNatural}
                animate
                animationDuration={600}
                svg={{ fill: Colors.accent,fillOpacity:0.2,stroke:Colors.accent }}
            />
        </View>
    </View>
    );
  }
}

export default StatsGraph;
