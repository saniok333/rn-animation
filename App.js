import { useRef, useEffect } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';

export default function App() {
  const firstOpacity = useRef(new Animated.Value(0)).current;
  const secondOpacity = useRef(new Animated.Value(0)).current;
  const thirdOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(1000, [
      Animated.timing(firstOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(secondOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(thirdOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: firstOpacity,
          },
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: secondOpacity,
          },
        ]}
      ></Animated.View>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: thirdOpacity,
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
