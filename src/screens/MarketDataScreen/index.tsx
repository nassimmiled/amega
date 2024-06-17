import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import {scale, verticalScale} from 'react-native-size-matters';

import {theme} from '~/themes';

const {colors} = theme;
interface IMarketData {
  label: string;
  price: number;
  quantity: number;
  timestamp: string;
}

interface IChartData {
  value: number;
}

export const MarketDataScreen = () => {
  const [marketData, setMarketData] = useState<IMarketData[]>([]);
  const [chartData, setChartData] = useState<IChartData[]>([]);

  useFocusEffect(
    useCallback(() => {
      const ws = new WebSocket(
        'wss://stream.binance.com:443/ws/btcusdt@aggTrade',
      );

      ws.onopen = () => {
        const subscribeMessage = {
          method: 'SUBSCRIBE',
          params: ['btcusdt@aggTrade'],
          id: 1,
        };
        ws.send(JSON.stringify(subscribeMessage));
      };

      ws.onmessage = e => {
        const data = JSON.parse(e.data);
        const newMarketData = {
          label: data.s,
          price: parseFloat(data.p),
          quantity: parseFloat(data.q),
          timestamp: data.T,
        };

        if (data.s) {
          setMarketData(prevData => {
            return [...prevData, newMarketData];
          });

          setChartData(prevData => {
            return [...prevData, {value: parseFloat(data.q)}];
          });
        }
      };

      ws.onclose = () => {};

      return () => {
        ws.close();
      };
    }, []),
  );

  if (!chartData?.length || !marketData?.length) {
    return (
      <View style={styles.container}>
        <Text> Connecting ...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        <LineChart
          data={chartData}
          width={Dimensions.get('window').width - scale(70)}
          height={verticalScale(250)}
          color={colors.primary}
          hideAxesAndRules
          thickness={1.5}
          adjustToWidth={true}
          isAnimated={true}
          stepChart={false}
          hideDataPoints={true}
          curved={true}
          dataPointsColor={colors.primary}
          maxValue={0.7}
        />
      </View>
      <ScrollView>
        {marketData.reverse().map((data, index) => (
          <Text key={index}>
            {`${data.label} | ${data.price} | ${data.quantity} | ${data.timestamp}`}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  chart: {
    marginTop: scale(5),
    paddingVertical: scale(10),
  },
});
