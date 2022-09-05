import { useRef, useEffect } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';

export default function App() {
  const translation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translation.x, {
        toValue: 250,
        useNativeDriver: true,
      }),
      Animated.timing(translation.y, {
        toValue: 250,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            { translateX: translation.x },
            { translateY: translation.y },
          ],
        },
      ]}
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
