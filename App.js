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
              inputRange: [0, 50, 100],
              outputRange: [0, 1, 0],
            }),
            transform: [
              { translateX: translation },
              {
                rotate: translation.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
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
