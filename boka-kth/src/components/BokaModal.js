import { View, Text, TextInput, Button } from 'react-native';
import React from 'react';
import AppStyles from '../styles/AppStyles';

export default function bokaModal(props) {
  let [boka, setBoka] = React.useState("");
  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.header}>Boka nu</Text>
      <TextInput 
          style={[AppStyles.textInput, AppStyles.darkTextInput]} 
          placeholder='boka'
          value={boka}
          onChangeText={setBoka} />
      <View style={[AppStyles.rowContainer, AppStyles.rightAligned, AppStyles.rightMargin]}>
        <Button title="Avbryt" onPress={props.onClose} />
        <Button title="Bekräfta" onPress={() => {
          props.boka(boka);
          setBoka("");
          props.onClose();
        }} />
      </View>
    </View>
  );
}