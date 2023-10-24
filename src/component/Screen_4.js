import { Image, Pressable, Text, View } from "react-native";

const objlist = [
    {id:1,name:"Occaecat est deserunt tempor offici",price:"2.99",size:"",img:require('../../assets/DATA/Image 7 (4).png')},
    {id:2,name:"Occaecat est deserunt tempor offici",price:"2.99",size:"",img:require('../../assets/DATA/Image 7.png')},
    {id:4,name:"Occaecat est deserunt tempor offici",price:"2.99",size:"",img:require('../../assets/DATA/Image 7 (2).png')},
    {id:4,name:"Occaecat est deserunt tempor offici",price:"2.99",size:"",img:require('../../assets/DATA/Image 7 (1).png')},
]

const Screen_4 =() =>{

    return(
        <View style={{flex:1,alignItems:"center"}}>
            <Image style={{width:350,height:200}} source={require("../../assets/DATA/Container 7 (3).png")}/>
            <View style={{width:350,marginTop:10,flexDirection:"row"}}>
                {
                    objlist.map((item,index) =>{
                        return(
                            <Pressable style={{width:"23%",height:80,backgroundColor:"gray",borderRadius:10,marginLeft:5,justifyContent:"center",alignItems:"center"}}>
                                <Image style={{width:40,height:40}} source={item.img}/>
                            </Pressable>
                        )
                    })
                }
            </View>
            <Text style={{marginRight:"auto",marginLeft:30,marginTop:10,fontFamily:"Roboto",fontSize:30,fontWeight:"700",color:"blue"}}>
                $2,95
            </Text>
            <View style={{marginRight:"auto",marginLeft:30,marginTop:10,width:350,height:100}}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{fontFamily:"Roboto",fontSize:30,fontWeight:"700",color:"black",}}>
                    Product Name
                </Text>
                <Text>
                    4.5
                    <Image style={{width:30,height:30}} source={require('../../assets/DATA/Rating 3.png')}/>
                </Text>
            </View>
            
            <Text style={{fontFamily:"Roboto",fontSize:17,fontWeight:"700",color:"gray",}}>
            Occaecat est deserunt tempor offici
            </Text>
            </View>
            
        </View>
    )
}

export default Screen_4;