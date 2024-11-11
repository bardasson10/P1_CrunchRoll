import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { GlobalStyle } from "./Global/GlobalStyle";
import { CardForm } from "./components/CardForm/index";
import { Header } from "./components/Header/index";
import { ButtonForm } from "./components/ButtonForm";
import barcarrousel from "../P1_CrunchRoll/assets/img/barcarrousel.png";

// Import dos ícones, com tratamento de fallback para View vazia caso o ícone esteja indefinido
import { SiCrunchyroll } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";

// Definindo fallback para cada ícone
const CrunchyrollIcon = SiCrunchyroll || "View";
const HamburgerMenuIcon = RxHamburgerMenu || "View";
const SearchIcon = IoSearchSharp || "View";
const DropdownIcon = IoMdArrowDropdown || "View";
const PlayIcon = IoPlayOutline || "View";
const BookmarkIcon = BsBookmark || "View";

export default function App() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor:"#000000", margin:0, padding:0 }}>
            <View style={GlobalStyle.containerBody}>
                <Header
                    containerStyle={GlobalStyle.header}
                    text=""
                    nav={<HamburgerMenuIcon />}
                    icon={<CrunchyrollIcon style={{ fontSize: 28, position: "absolute", left: 90, color: "#ff640a" }} />}
                    search={<SearchIcon />}
                    photo={<Image source={{ uri: "https://i.pinimg.com/736x/7c/0f/4c/7c0f4c5a46e55ef4ac490d392d56d49f.jpg" }} style={{ width: 32, height: 32, borderRadius: 50 }} />}
                    arrowIcon={<DropdownIcon />}
                />
                <CardForm key={1}
                    containerStyle={GlobalStyle.containerCardPhoto}
                    form={[
                        <Image key={"img"} source={{ uri: "https://store.crunchyroll.com/on/demandware.static/-/Sites-crunchyroll-master-catalog/default/dw8b062149/Home%20Video/9781974751655/9781974751655_1.jpg" }} style={GlobalStyle.CardImage} />
                    ]}
                />

                <View key={2} style={GlobalStyle.ContainerPlay}>
                    <CardForm key={3}
                        containerStyle={GlobalStyle.watchButton}
                        form={[
                            <PlayIcon key={"IconButton"} style={GlobalStyle.PlayIcon} />,
                            <ButtonForm key={"ButtonForm"} title="COMEÇAR A ASSISTIR T1 E1" onPress={() => console.log("Entrou")} />
                        ]}
                    />
                    <CardForm key={4}
                        containerStyle={GlobalStyle.BookMark}
                        form={[<BookmarkIcon key={"bookmark"} />]}
                    />
                </View>

                <View style={{ width: 250, height: 50, justifyContent:'center', alignItems:"center", position:"relative", top:380, marginTop:40, marginBottom:26}}>
                    <Image source={barcarrousel}  />
                </View>

                <Text style={{ fontSize:20, alignSelf:"flex-start", color:"#ffffff", position:"relative", top:355, marginTop:10, marginBottom:10, zIndex:2  }}>Recomendações para Você</Text>
                
                <View key={5} style={GlobalStyle.ContainerSeries}>
                    <ScrollView key={"scroll"} horizontal showsHorizontalScrollIndicator={false} style={{width:"100%"}}>
                        <CardForm key={6} containerStyle={GlobalStyle.CardSeries} form={[<Image key={"s1"} source={{ uri: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg" }} style={{ width:200, height:250 }} />, <Text style={{fontSize: 16, color:"#ffffff"}} >One Piece</Text>]} />
                        <CardForm key={7} containerStyle={GlobalStyle.CardSeries} form={[<Image key={"s2"} source={{ uri: "https://cdn.ome.lt/xvr4Ou-sVAXtty_i_PO2-7CYV4g=/fit-in/837x500/smart/uploads/conteudo/fotos/naruto-anime-poster.jpg" }} style={{ width:200, height:250 }} />, <Text style={{fontSize: 16, color:"#ffffff"}} >Naruto</Text>]} />
                        <CardForm key={8} containerStyle={GlobalStyle.CardSeries} form={[<Image key={"s3"} source={{ uri: "https://psxbrasil.com.br/wp-content/uploads/2021/06/Demon-Slayer-Kimetsu-no-Yaiba-The-Hinokami-Chronicles_2021_06-20-21_001.jpg" }} style={{ width:200, height:250 }} />, <Text style={{fontSize: 16, color:"#ffffff"}} >Demon Slayer</Text>]} />
                        <CardForm key={9} containerStyle={GlobalStyle.CardSeries} form={[<Image key={"s4"} source={{ uri: "https://br.web.img3.acsta.net/pictures/20/09/14/10/31/4875617.jpg" }} style={{ width:200, height:250 }} />, <Text style={{fontSize: 16, color:"#ffffff", display:"flex", flexWrap:'wrap'}} >Jujustu Kaisen</Text>]} />
                        <CardForm key={10} containerStyle={GlobalStyle.CardSeries} form={[<Image key={"s5"} source={{ uri: "https://br.web.img2.acsta.net/pictures/23/10/03/21/32/0107747.jpg" }} style={{ width:200, height:250 }} />, <Text style={{fontSize: 16, color:"#ffffff", display:"flex", flexWrap:'wrap'}} >YuYu Hakusho</Text>]} />
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}
