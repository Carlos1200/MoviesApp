import React from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {Background, MyTextInput} from '../components';
import {loginStyles} from '../theme/loginTheme';
import {loginSchema} from '../schemas';

export const LoginScreen = () => {
  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={loginStyles.flex1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            console.log(values);
          }}
          validationSchema={loginSchema}>
          {({handleSubmit}) => (
            <View style={loginStyles.formContainer}>
              <Text style={loginStyles.title}>Login</Text>
              <MyTextInput
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
              <MyTextInput
                label="Password"
                name="password"
                placeholder="********"
                secureTextEntry={true}
              />
              <View style={loginStyles.buttonContainer}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={loginStyles.button}
                  onPress={handleSubmit}>
                  <Text style={loginStyles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </>
  );
};
