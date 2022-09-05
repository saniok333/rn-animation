import { useRef, useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';

export default function App() {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 250,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: translation }] }]}
    ></Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
});
