import { useRef, useEffect } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';

export default function App() {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: translation.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
            }),
            transform: [{ translateX: translation }],
          },
        ]}
      ></Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 100,
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
});
