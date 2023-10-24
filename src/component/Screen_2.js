import { useEffect, useState } from "react";
import {Image, Pressable, Text, TextInput, View} from "react-native"

const Screen_2 = ({navigation}) =>{

    const [account,setaccount] =useState({
        user:"",email:"",password:""
    })

    const [listaccount,setlistaccount] = useState([])

    const handleOnchang =(e,id) =>{
        let copystate = {...account};
        copystate[id] = e.target.value;
        setaccount({...copystate})
    }

    const handleSaveAccount = async () =>{
        setlistaccount([...listaccount,account])
       
    }


    useEffect(() =>{
        if(listaccount && listaccount.length>0){
            let listaccountparent = [...listaccount];
            navigation.navigate("screen3",{listaccountparent})
        }
     
    },[listaccount])


    return(
        <View style={{flex:7,alignItems:"center"}}>
            <View style={{flex:3,justifyContent:"center",alignItems:"center"}}>
                <Image style={{width:80,height:80}} source={require('../../assets/DATA/Image 19.png')}/>
                <Text style={{fontFamily:"Roboto",fontSize:30,fontWeight:"700",color:"black"}}>
                    Nice to see you!
                </Text>
                <Text style={{fontFamily:"Roboto",fontSize:17,fontWeight:"500",color:"gray"}}>
                    Create your account
                </Text>

            </View>
            <View style={{flex:4,width:350,alignItems:"center"}}>
                <View style={{width:"100%",height:45,borderWidth:1,borderRadius:10,flexDirection:"row",alignItems:"center",marginBottom:10}}>
                    <Image style={{marginLeft:5,width:20,height:20}} source={require("../../assets/DATA/codicon_account.png")}/>
                    <TextInput style={{width:300,height:43,marginLeft:5,outline:"none",fontFamily:"Roboto",fontSize:17,fontWeight:"500"}}
                    placeholder="Enter your user name"
                    onChange={(e) => handleOnchang(e,"user")}
                    />
                </View>
                <View style={{width:"100%",height:45,borderWidth:1,borderRadius:10,flexDirection:"row",alignItems:"center",marginBottom:10,marginTop:10}}>
                    <Image style={{marginLeft:5,width:20,height:20}} source={require("../../assets/DATA/Vector.png")}/>
                    <TextInput style={{width:300,height:43,marginLeft:5,outline:"none",fontFamily:"Roboto",fontSize:17,fontWeight:"500"}}
                    placeholder="Enter your email address"
                    onChange={(e) => handleOnchang(e,"email")}

                    />
                </View>
                <View style={{width:"100%",height:45,borderWidth:1,borderRadius:10,flexDirection:"row",alignItems:"center",marginBottom:10,marginTop:10}}>
                    <Image style={{marginLeft:5,width:20,height:20}} source={require("../../assets/DATA/lock.png")}/>
                    <TextInput secureTextEntry={true} style={{width:290,height:43,marginLeft:5,outline:"none",fontFamily:"Roboto",fontSize:17,fontWeight:"500"}}
                    placeholder="Enter your password"
                    onChange={(e) => handleOnchang(e,"password")}

                    />
                    <Image style={{marginRight:5,width:20,height:20}} source={require("../../assets/DATA/eye.png")}/>
                </View>
                <View style={{width:"100%",height:45,flexDirection:"row",alignItems:"center",marginBottom:10,marginTop:10}}>
                    <Text style={{fontFamily:"Roboto",fontSize:17,color:"gray"}}>
                        I agree with 
                        <Text style={{fontFamily:"Roboto",fontSize:17,color:"blue"}}> Terms & Conditions</Text>
                    </Text>
                </View>
                <Pressable style={{width:"100%",height:45,flexDirection:"row",alignItems:"center",marginBottom:10,marginTop:10,justifyContent:"center",backgroundColor:"blue",borderRadius:10}}
                    onPress={() => handleSaveAccount()}
                >
                    <Text style={{fontFamily:"Roboto",fontSize:20,fontWeight:"700",color:"white"}}>
                        Continue
                    </Text>
                </Pressable>
            </View>
        </View>
    )

}

export default Screen_2;