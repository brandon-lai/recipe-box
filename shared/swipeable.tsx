import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  I18nManager,
  Alert,
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';

interface ActionProps {
  deleteFunction: Function;
  itemKey: string;
}

interface ActionState {
}

export default class AppleStyleSwipeableRow extends Component<ActionProps, ActionState> {
  constructor(props) {
    super(props);
  }

  private renderRightAction = (
    text: string,
    color: string,
    x: number,
    progress: Animated.AnimatedInterpolation
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    const pressHandler = () => {
      this.props.deleteFunction(this.props.itemKey);
      // Alert.alert(this.props.itemKey.toString());
    };

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  private renderRightActions = (
    progress: Animated.AnimatedInterpolation,
    _dragAnimatedValue: Animated.AnimatedInterpolation
  ) => (
    <View
      style={{
        width: 192,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      }}>
      {/* {this.renderRightAction('More', '#C8C7CD', 192, progress)} */}
      {this.renderRightAction('Share', '#ffab00', 128, progress)}
      {this.renderRightAction('Delete', '#dd2c00', 64, progress)}
    </View>
  );

  private swipeableRow?: Swipeable;

  private updateRef = (ref: Swipeable) => {
    this.swipeableRow = ref;
  };
  private close = () => {
    this.swipeableRow?.close();
  };
  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        enableTrackpadTwoFingerGesture
        leftThreshold={30}
        rightThreshold={40}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    elevation: 3,
    flex: 1,
    justifyContent: 'center',
    borderRadius: 6,
    shadowOffset: { width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 6,
    marginHorizontal: 4
  },
});

/*
https://github.com/software-mansion/react-native-gesture-handler/blob/master/examples/Example/src/swipeable/AppleStyleSwipeableRow.tsx
*/