import {Image, Pressable, Text, TextInput, View} from "react-native"

const Screen_3 = ({navigation,route}) =>{

    console.log('check route',route)

    return(
        <View style={{flex:10}}>
            <View style={{flex:3}}>
            <Image style={{height:"100%",width:"100%"}} source={require("../../assets/DATA/Image 20.png")}/>
            </View>
            <View style={{flex:7,borderRadius:20}}>
                <View style={{flex:3,justifyContent:"center"}}>
                    <Text style={{fontFamily:"Roboto",fontSize:30,fontWeight:"700",color:"black",margin:30}}>
                        Welcome!
                    </Text>
                </View>
                <View style={{flex:3,alignItems:"center"}}>
                <View style={{width:350,height:45,borderWidth:1,borderRadius:10,flexDirection:"row",alignItems:"center",marginBottom:10,marginTop:10}}>
                    <Image style={{marginLeft:5,width:20,height:20}} source={require("../../assets/DATA/Vector.png")}/>
                    <TextInput style={{width:300,height:43,marginLeft:5,outline:"none",fontFamily:"Roboto",fontSize:17,fontWeight:"500"}}
                    placeholder="Enter email"
                    />
                </View>
                <View style={{width:350,height:45,borderWidth:1,borderRadius:10,flexDirection:"row",alignItems:"center",marginBottom:10,marginTop:10}}>
                    <Image style={{marginLeft:5,width:20,height:20}} source={require("../../assets/DATA/lock.png")}/>
                    <TextInput secureTextEntry={true} style={{width:290,height:43,marginLeft:5,outline:"none",fontFamily:"Roboto",fontSize:17,fontWeight:"500"}}
                    placeholder="Enter password"
                    />
                    <Image style={{marginRight:5,width:20,height:20}} source={require("../../assets/DATA/eye.png")}/>
                </View>   
                </View>
                <View style={{flex:1,alignItems:"center"}}>
                    <Pressable style={{width:350,height:45,backgroundColor:"blue",borderRadius:20,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontFamily:"Roboto",fontSize:20,fontWeight:"700",color:"white"}}>
                            Login
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )

}

export default Screen_3;