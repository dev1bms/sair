import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../config';
import commonStyle from '../../styles/common.style';

export default StyleSheet.create({
    content:{
        alignSelf:'center',
        marginVertical:'5%'
    },
    address:{
        ...commonStyle.BlackFont,
        color:colors.black,
        fontSize:16,
        textAlignVertical:'center',
        // marginTop:Platform.OS=='ios'?'12%':'8%',
        // width:'90%',
        alignSelf:'center',
        height:60,
    },
    address1:{
        ...commonStyle.BlackFont,
        color:colors.black,
        fontSize:18,
        textAlignVertical:'center',
        // marginTop:Platform.OS=='ios'?'12%':'8%',
        width:'90%',
        alignSelf:'center',
        height:60,
        
    },
    sideHeader:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'5%',
        height:60,
        justifyContent:'space-between',
        // backgroundColor:'red'
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
        marginTop:'5%'
    },
    loginBtn:{
        ...commonStyle.BoldFont,
        color:colors.white,
    },
    img:{
        width:34,
        height:34,
        borderRadius: 34 / 2
    },
    driver_btn:{
        // borderWidth:1,
        height:35,
        borderRadius:18,
        width:135,
        borderColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.primary
    },
    driver_txt:{
        ...commonStyle.BoldFont,
        fontSize:12,
        color:colors.white
    },
    driver:{
        flexDirection:'row',
        alignItems:'center',
    },
    driverView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        alignSelf:'center',
        width:'90%',
        // borderBottomColor:colors.primary,
        // borderBottomWidth:1,
    },
    dateView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'center',
        width:'90%',
        marginTop:'5%'
    },
    date:{
        ...commonStyle.RegularFont,
        fontSize:14,
        color:colors.dimGray,
    },
    school:{
        ...commonStyle.BoldFont,
        fontSize:14,
        color:colors.dimGray
    },
    modalContainer:{
        backgroundColor:'rgba(0,0,0,0.7)',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    modalConetnt1:{
        padding:'3%',
        borderRadius:20,
        backgroundColor:colors.white,
        width:'80%',
    },
    special_car:{
        borderWidth:1,
        height:35,
        borderRadius:18,
        width:135,
        borderColor:colors.primary,
        justifyContent:'center',
        alignItems:'center'
    },
    special_car_txt:{
        ...commonStyle.BoldFont,
        fontSize:12,
        color:colors.primary
    },
    GoMethodView:{
        alignItems:'center',
        justifyContent:'space-between',
        width:'90%',
        alignSelf:'center',
        flexDirection:'row',
        marginVertical:'5%'
    }
})