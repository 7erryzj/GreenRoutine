import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import BottomDrawer from 'rn-bottom-drawer';
import { Dropdown } from 'react-native-material-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

 
const TAB_BAR_HEIGHT = 20;
 
class cusBottomDrawer extends Component {
  render() {
    const { label, data, onChangeText } = this.props;
    return (
      <BottomDrawer
        containerHeight={200}
        startUp={false}
      >
        <View>
          <View style={{ flex: 1, alignItems:"center" }}>
            <Ionicons
              name="md-remove"
              size={30}
            />
          </View>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry..</Text>
            <Dropdown
            label={label}
            data={data}
            //dropdownPosition={1}
            onChangeText={()=>onChangeText()}
          />
        </View>
      </BottomDrawer>
    )
  } 
}
cusBottomDrawer.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    onChangeText: PropTypes.func.isRequired
  };


export default cusBottomDrawer;