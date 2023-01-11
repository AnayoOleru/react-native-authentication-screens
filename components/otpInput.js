import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../theme/colors';

export default OtpInput = ({}) => {
  const [num1,setNum1] = useState('')
  const [num2,setNum2] = useState('')
  const [num3,setNum3] = useState('')
  const [num4,setNum4] = useState('')

  let firstTextInput = '';
  let secondTextInput = '';
  let thirdTextInput = '';
  let fourTextInput = '';

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="-"
        keyboardType="phone-pad"
        style={{...styles.inputStyle,borderColor:num1?colors.primary:colors.inputBg}}
        ref={input => {
          firstTextInput = input;
        }}
        onChangeText={(event) => { event && secondTextInput.focus() 
          setNum1(event)
        }}
        onBlur={()=>{
          firstTextInput.setNativeProps({
            style: { borderColor:"#848688" }
          }) 
        }}
        onFocus={()=>{
          firstTextInput.setNativeProps({
            style: { borderColor:colors.primary }
          }) 
        }}
        maxLength={1}
      />
      <TextInput
        placeholder="-"
        keyboardType="phone-pad"
        style={{...styles.inputStyle,borderColor:num2?colors.primary:colors.inputBg}}
        ref={input => {
          secondTextInput = input;
        }}
        onChangeText={(event) => { event && thirdTextInput.focus() 
          setNum2(event) }}
        onKeyPress={({ nativeEvent: { key: keyValue } }) => {
          if (keyValue === 'Backspace') {
              firstTextInput.focus();
          }
        }}
        onBlur={()=>{
          secondTextInput.setNativeProps({
            style: { borderColor:"#848688" }
          }) 
        }}
        onFocus={()=>{
          secondTextInput.setNativeProps({
            style: { borderColor:colors.primary }
          }) 
        }}
        maxLength={1}
      />
      <TextInput
        placeholder="-"
        keyboardType="phone-pad"
        style={{...styles.inputStyle,borderColor:num3?colors.primary:colors.inputBg}}
        ref={input => {
          thirdTextInput = input;
        }}
        onChangeText={(event) => { event && fourTextInput.focus() 
          setNum3(event) }}
        onKeyPress={({ nativeEvent: { key: keyValue } }) => {
          if (keyValue === 'Backspace') {
              secondTextInput.focus();
          }
        }}
        onBlur={()=>{
          thirdTextInput.setNativeProps({
            style: { borderColor:"#848688" }
          }) 
        }}
        onFocus={()=>{
          thirdTextInput.setNativeProps({
            style: { borderColor:colors.primary }
          }) 
        }}
        maxLength={1}
      />
      <TextInput
        placeholder="-"
        keyboardType="phone-pad"
        style={{...styles.inputStyle,borderColor:num4?colors.primary:colors.inputBg}}
        onChangeText={(event) => {setNum4(event)}}
        ref={input => {
          fourTextInput = input;
        }}
        onKeyPress={({ nativeEvent: { key: keyValue } }) => {
          if (keyValue === 'Backspace') {
              thirdTextInput.focus();
          }
        }}
        onBlur={()=>{
          fourTextInput.setNativeProps({
            style: { borderColor:"#848688" }
          }) 
        }}
        onFocus={()=>{
          fourTextInput.setNativeProps({
            style: { borderColor:colors.primary }
          }) 
        }}
        maxLength={1}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:"100%",
    paddingHorizontal:"8%",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  inputStyle:{
    borderWidth:.7,
    borderColor:"#848688",
    textAlign: "center",
    fontSize:moderateScale(24),
    height:moderateScale(55),
    width:moderateScale(54),
    borderRadius:5,
  },
});
