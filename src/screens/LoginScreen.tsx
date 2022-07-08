import React, {useState} from 'react';
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
import {LoginSchemas} from '../interfaces';
import {AuthenticateUser} from '../services';
import {useStore} from '../store';

export const LoginScreen = () => {
  const {authenticatedUser} = useStore();
  const [error, setError] = useState<null | string>(null);

  const initialValues: LoginSchemas = {
    email: '',
    password: '',
  };
  return (
    <>
      <Background />
      <KeyboardAvoidingView
        style={loginStyles.flex1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            AuthenticateUser(values)
              .then(({data}) => {
                authenticatedUser(data.token);
              })
              .catch(() => {
                setError('Invalid email or password');
                setTimeout(() => {
                  setError(null);
                }, 1500);
              });
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
                {error && <Text style={loginStyles.error}>{error}</Text>}
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </>
  );
};
