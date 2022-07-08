import React from 'react';
import {ErrorMessage, useField} from 'formik';
import {KeyboardTypeOptions, Platform, Text, TextInput} from 'react-native';
import {loginStyles} from '../theme/loginTheme';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  [key: string]: any;
}

export const MyTextInput = ({
  keyboardType = 'default',
  label,
  name,
  placeholder,
  secureTextEntry = false,
  ...props
}: Props) => {
  const [field, meta, helpers] = useField({name});
  return (
    <>
      <Text style={loginStyles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.4)"
        keyboardType={keyboardType}
        underlineColorAndroid="white"
        style={[
          loginStyles.inputField,
          Platform.OS === 'ios' && loginStyles.inputFielIOS,
        ]}
        selectionColor="white"
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        onChangeText={helpers.setValue}
        onBlur={() => helpers.setTouched(!meta.touched)}
        value={field.value}
        {...props}
      />
      <ErrorMessage name={name}>
        {errorMessage => <Text style={loginStyles.error}>{errorMessage}</Text>}
      </ErrorMessage>
    </>
  );
};
