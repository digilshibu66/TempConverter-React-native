import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TemperatureConverterApp = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToCelsius = () => {
    const f = parseFloat(fahrenheit);
    const c = ((f - 32) * 5) / 9;
    setCelsius(c.toFixed(2));
  };

  const convertToFahrenheit = () => {
    const c = parseFloat(celsius);
    const f = (c * 9) / 5 + 32;
    setFahrenheit(f.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Fahrenheit:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter temperature in Fahrenheit"
        value={fahrenheit}
        onChangeText={(text) => setFahrenheit(text)}
      />
      <Button title="Convert to Celsius" onPress={convertToCelsius} />

      <Text style={styles.label}>Enter Celsius:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter temperature in Celsius"
        value={celsius}
        onChangeText={(text) => setCelsius(text)}
      />
      <Button title="Convert to Fahrenheit" onPress={convertToFahrenheit} />

      <Text style={styles.result}>
        Result: {celsius} °C / {fahrenheit} °F
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default TemperatureConverterApp;
