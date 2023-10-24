import {Image, Pressable, Text, View} from "react-native"

const Screen_1 = () =>{
    return(
        <View style={{flex:10,alignItems:"center"}}>
            <View style={{flex:7,justifyContent:"center"}}>
                <Image style={{height:"100%",width:350,borderRadius:20}} source={require("../../assets/DATA/Container 17.png")}/>
            </View>
            <View style={{flex:3,justifyContent:"space-around",width:350}}>
                <Text style={{fontFamily:"Roboto",fontSize:25,fontWeight:"600",color:"black"}}>Boost Productivity</Text>
                <Text style={{fontFamily:"Roboto",fontSize:17,fontWeight:"600",color:"gray"}}>Simplify tasks, boost producttivity</Text>
                <Pressable style={{width:"100%",backgroundColor:"blue",height:45,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontFamily:"Roboto", fontSize:17,color:"white",fontWeight:"700"}}>
                        Sign up
                    </Text>
                </Pressable>
                <Pressable style={{width:"100%",height:45,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontFamily:"Roboto", fontSize:17,color:"gray",fontWeight:"700"}}>
                        Login
                    </Text>
                </Pressable>
            </View>
        </View>
    )

}

export default Screen_1;