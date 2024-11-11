import { View, Text, Image, ScrollView } from "react-native";
import { GlobalStyle } from "./Global/GlobalStyle";
import React, { useState } from "react";
import { CardForm } from "./components/CardForm/index";
import { InputForm } from "./components/InputForm/index";
import { Header } from "./components/Header/index";
import { SiCrunchyroll } from "react-icons/si";
import { ButtonForm } from "./components/ButtonForm";
import { Footer } from "./components/Footer";


export default function App() {

  const[login, setLogin] = useState("");
  const[password, setPassword] = useState("");

  return (
    <>
      <ScrollView style={{ flexGrow: 1, backgroundColor: "#000000", margin: 0, padding: 0 }}>
        <View style={GlobalStyle.containerBodyLogin}>
          <Header
            containerStyle={GlobalStyle.headerLogin}
            text="CrunchyRoll"
            nav=""
            icon={<SiCrunchyroll style={{position:"absolute", left:65}}/>}
            search=""
            photo=""
            arrowIcon="" />
          <Text style={GlobalStyle.bodyTexts}>Login</Text>
          <View style={GlobalStyle.containerCardLogin}>
            <CardForm
              form={[
                <InputForm containerStyle={{padding:30, width:320}} key="email" placeholder="Endereço de Email" onChangeText={(text) => setLogin(text)} value={login} />,
                <InputForm containerStyle={{padding:30, width:320}} key="password" placeholder="Senha" onChangeText={(text) => setPassword(text)} value={password}  />,]
              }
            />
          </View>
          <View style={GlobalStyle.containerCardLoginButton}>
            <ButtonForm title="LOGIN" onPress={() => console.log("Entrou")} containerStyle={GlobalStyle.buttonLogin} />
            <ButtonForm title="Voltar" onPress={() => console.log("Entrou")} containerStyle={GlobalStyle.backButton} />
          </View>
          <Footer />
        </View>
      </ScrollView>
    </>
  );
}
