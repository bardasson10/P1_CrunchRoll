import { View, Text, Image} from "react-native";
import { GlobalStyle } from "./Global/GlobalStyle";
import React from "react";
import { CardForm } from "./components/CardForm/index";
import { InputForm } from "./components/InputForm/index";
import { Header } from "./components/Header/index";
import { SiCrunchyroll } from "react-icons/si";
import { ButtonForm } from "./components/ButtonForm";
import { Footer } from "./components/Footer";


export default function AppLogin() {
  return (
    <>
      <View style={GlobalStyle.containerBody}>
        <Header
        containerStyle={GlobalStyle.header}
        text="CrunchyRoll" nav=""
        icon={<SiCrunchyroll />}
        search=""
        photo=""
        arrowIcon=""/>
        <Text style={GlobalStyle.bodyTexts}>Login</Text>
        <View style={GlobalStyle.containerCardLogin}>
          <CardForm
            form={[
            <InputForm key="email" placeholder="Endereço de Email" onChangeText={(event) => event} value=""/>,
            <InputForm key="password" placeholder="Senha" onChangeText={(event) => event} value=""/>,]
          }
          />
        </View>
        <ButtonForm title="LOGIN" onPress={() => console.log("Entrou")} containerStyle={GlobalStyle.buttonLogin}/>
        <ButtonForm title="Voltar" onPress={() => console.log("Entrou")} containerStyle={GlobalStyle.backButton}/>
        <Footer/>
      </View>
    </>
  );
}
