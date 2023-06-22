import {View, StyleSheet, TextInput} from 'react-native';

const CustomInput = ({placeHolder, value, setValue}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeHolder}
        secureTextEntry={placeHolder === 'password' ? true : false}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {},
});
