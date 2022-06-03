import { StyleSheet } from "react-native";
import { colors } from "../../config";
import commonStyle from "../../styles/common.style";

export default StyleSheet.create({
    container:{
        // backgroundColor:colors.white,
        width:'100%',
        height:'100%',
        // marginTop:'10%',
        // marginHorizontal:'10%'
    },
    img:{
        width:99.91,
        height:99.91,
        borderRadius:99.91/2
    },
    address:{
        ...commonStyle.BoldFont,
        fontSize:18,
        color:colors.white,
        marginHorizontal:'2%'
    },
    address1:{
        ...commonStyle.RegularFont,
        fontSize:18,
        color:colors.white,
        marginHorizontal:'2%'
    },
    itemView:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:'10%'
    },
    dot:{
        width:8,
        height:8,
        borderRadius:8/2,
        backgroundColor:colors.white,
    },
    btn:{
        backgroundColor:colors.primary,
        width:309,
        height:47,
        alignSelf:'center',
        marginHorizontal:'10%',
        borderRadius:24,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:'15%'
    },
    loginBtn:{
        ...commonStyle.BoldFont,
        color:colors.white,
    },
    plusView:{
        width: 33,
        height: 33,
        backgroundColor: colors.white,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 33 /2
    },
})