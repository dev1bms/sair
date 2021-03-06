import { StyleSheet } from 'react-native';
import { colors } from '../../config';
import commonStyle from '../../styles/common.style';

export default StyleSheet.create({
    avatar:{
        width:33,
        height:33,
        borderRadius: 33 / 2
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:'10%',
        paddingHorizontal:'5%'
    },
    sideHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%'
    },
    address:{
        ...commonStyle.BoldFont,
        fontSize:15,
        color:colors.black,
        marginHorizontal:'5%',
        textAlign:'center',
        textAlignVertical:'center'
    },
   img:{
       width:314.12,
       height:218.35,
       alignSelf:'center',
       marginTop:'15%'
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
    marginVertical:'5%'
    },
    loginBtn:{
        ...commonStyle.BoldFont,
        color:colors.white,
    },
    hello:{
        ...commonStyle.RegularItalicFont,
        fontSize:16,
        color:colors.dimGray,
        textAlign:'center',
        textAlignVertical:'center'
    },
    view:{
        alignSelf:'center',
        borderBottomColor:colors.borderGrey,
        borderBottomWidth:1,
        width:'100%',
        height:35,
        alignItems:'center',
        justifyContent:'center'
    }
})