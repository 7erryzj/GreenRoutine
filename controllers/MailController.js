import {
    Animated,
} from 'react-native';


export function generateData() {
    var data = [{
        key: '0',
        text: 'item 0'
      }, {
        key: '1',
        text: 'item 1'
      }, {
        key: '2',
        text: 'item 2'
      }];

      return data;
}

export function rowSwipeAnimate() {
    var value = {};
    Array(20)
    .fill('')
    .forEach((_, i) => {
        value[`${i}`] = new Animated.Value(0);
    });

    return value;
}