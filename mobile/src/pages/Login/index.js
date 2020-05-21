import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Background from '~/components/Background';
import { Container, Form, FormInput } from './styles';
import Colors from '~/constants/Colors';
import Imagens from '~/constants/Images';
import Loading from '~/components/Loading';

import { signInRequest } from '~/store/modules/auth/actions';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    if (!email || !senha) {
      alert('Informe seu Email e Senha');
    } else {
      setLoading(true);
      dispatch(signInRequest(email, senha));
    }
  }

  return (
    <Background>
      <Container>
        <Image source={Imagens.LOGO} />
        <Text style={styles.Welcome}>Olá, Seja Bem-Vindo(a).</Text>
        <Text style={styles.TextCredencias}>Entre com suas Credenciais.</Text>
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity style={styles.buttonEntrar} onPress={handleSubmit}>
            <Text style={{ color: Colors.COLORS.WHITE }}>Entrar</Text>
          </TouchableOpacity>
        </Form>
      </Container>
      <Loading loading={loading} message="Validando credenciais..." />
    </Background>
  );
}

const styles = StyleSheet.create({
  buttonEntrar: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.COLORS.BUTTON_SUCESS,
  },
  Welcome: {
    color: Colors.COLORS.WHITE,
    fontWeight: 'bold',
    marginTop: 15,
  },
  TextCredencias: {
    color: Colors.COLORS.WHITE,
    fontWeight: 'bold',
  },
});
