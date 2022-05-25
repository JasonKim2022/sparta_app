import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import * as Linking from 'expo-linking';
import { ScrollView } from 'react-native-gesture-handler';

export default function AboutPage({navigation,route}) {
    //useState 사용법
    //[state,setState] 에서 state는 이 컴포넌트에서 관리될 상태 데이터를 담고 있는 변수
    //setState는 state를 변경시킬때 사용해야하는 함수

    //모두 다 useState가 선물해줌
    //useState()안에 전달되는 값은 state 초기값
    const [state,setState] = useState([])

    //하단의 return 문이 실행되어 화면이 그려진다음 실행되는 useEffect 함수
    //내부에서 data.json으로 부터 가져온 데이터를 state 상태에 담고 있음
    // const [ready,setReady] = useState(true)

    useEffect(()=>{
        
        //뒤의 1000 숫자는 1초를 뜻함
        //1초 뒤에 실행되는 코드들이 담겨 있는 함수
        setTimeout(()=>{
            //헤더의 타이틀 변경
            navigation.setOptions({
                title:'소개 페이지'
            })  
            // setState(data.tip)
            // setReady(false)
        },0)


    },[])

    const aboutImage = "https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png"

    const link = () => {
        Linking.openURL("https://jason2022.tistory.com")
    }
    return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>HI! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text>
        <View style={styles.textContainer}>
            <Image style={styles.aboutImage} source={{uri:aboutImage}} resizeMode={"cover"}/>
            <Text style={styles.desc01}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
            <Text style={styles.desc02}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>
            <TouchableOpacity style={styles.button} onPress={()=>link()}>
                <Text style={styles.buttonText}>나의 블로그계정</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#1F266A",
        // alignItems:"center"
    },
    title: {
        fontSize:20,
        fontWeight:"700",
        color:"#fff",
        paddingLeft:30,
        paddingTop:50,
        paddingRight:30
    },
    textContainer: {
        width:300,
        height:500,
        backgroundColor:"#fff",
        marginTop:50,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    aboutImage:{
        width:150,
        height:150,
        borderRadius:30
    },
    desc01: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"700",
        marginTop:20,
        paddingLeft:22,
        paddingRight:22

    },
    desc02: {
        textAlign:"center",
        fontSize:15,
        fontWeight:"700",
        padding:22
    },
    button:{
        backgroundColor:"orange",
        padding:20,
        borderRadius:15
    },
    buttonText: {
        color:"#fff",
        fontSize:15,
        fontWeight:"700"
    }
})