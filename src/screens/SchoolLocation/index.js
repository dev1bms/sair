import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {Icon} from '../../components';
import {colors, images} from '../../config';
import styles from './styles';
import {Tab, TabView, Card, Header, SearchBar, FAB} from 'react-native-elements';
import {
  VStack,
  HStack,
  Modal,
  Actionsheet,
  useDisclose,
  Box,
  Avatar,
  Divider,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {borderRadius, width, colorStyle} from 'styled-system';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MapView, {
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
  Callout,
} from 'react-native-maps';

const SchoolLocation = props => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [viewCoordinate, setViewCoordinate] = useState({
    latitude: 24.2505644,
    longitude: 55.7582294,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221,
  });
  const [search, setSearch] = useState('');

  return (
    <View style={{width: '100%', height: '100%', flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={{flex: 1}}>
        <MapView
          // showsUserLocation={true}
          followsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={{flex: 1}}
          initialRegion={viewCoordinate}
          //   region={viewCoordinate}
        />
        <HStack
          style={{
            position: 'absolute',
            top: 100,
            left: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon
              name="keyboard-arrow-right"
              color="#000"
              type="material"
              size={30}
            />
          </Pressable>
          {/* <Text style={styles.address1}>الذهاب بسيارتك الخاصة</Text> */}
          {/* <VStack
            style={{
              backgroundColor: '#D9E8E8',
              // height: hp('10%'),
              width: wp('80%'),
              borderRadius: 15,
            }}>
            <SearchBar
              placeholder="ابحث هنا"
              onChangeText={setSearch}
              value={search}
              lightTheme={true}
              theme={{containerStyle: ''}}
              containerStyle={{
                backgroundColor: '#D9E8E8',
                borderColor: '#F2F2F2',
                borderTopColor: '#F2F2F2',
                borderBottomColor: '#F2F2F2',
                paddingHorizontal: 20,
              }}
              inputContainerStyle={{backgroundColor: '#FFF', borderRadius: 15}}
              inputStyle={{backgroundColor: '#FFF', textAlign: 'right'}}
              onSubmitEditing={() => alert('Submitted!')}
            />
            <Divider style={{backgroundColor: '#D9E8E8'}} />
            <HStack
              style={{
                justifyContent: 'space-evenly',
                width: '95%',
                alignSelf: 'center',
                paddingVertical: 10,
              }}>
              <VStack space={2} alignItems="center">
                <FAB
                  size="small"
                  icon={
                    <Image
                      style={{width: wp('5%'), height: wp('5%')}}
                      source={images.awesome_school}
                    />
                  }
                  color="#9FD49D"
                />
              </VStack>
              <VStack space={2} alignItems="center">
                <FAB
                  size="small"
                  icon={
                    <Image style={styles.img} source={images.mahada_school} />
                  }
                  color="#DEC8E5"
                />
              </VStack>
              <VStack space={2} alignItems="center">
                <FAB
                  size="small"
                  icon={
                    <Image style={styles.img} source={images.sanena_school} />
                  }
                  color="#E6B9A9"
                />
              </VStack>
            </HStack>
          </VStack> */}
        </HStack>
        <VStack
          style={{
            height: hp('25%'),
            width: '100%',
            backgroundColor: colors.primary,
          }}>
          <HStack
            style={{
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              backgroundColor: colors.primary,
              height: 10,
              bottom: 10,
            }}
          />
          <HStack style={{backgroundColor: colors.primary, marginBottom: 15}}>
            <Text
              style={[
                styles.address1,
                {color: colors.white, paddingHorizontal: 10},
              ]}>
              استعراض خريطة المدرسة
            </Text>
          </HStack>
          <VStack
            style={{
              backgroundColor: colors.white,
              flex: 1,
              paddingHorizontal: 25,
              paddingTop: 10,
            }}>
            <HStack justifyContent="flex-start">
              <Avatar size="sm" source={images.my_avatar} />
              <HStack>
                <VStack>
                  <Text
                    style={[
                      styles.address1,
                      {color: colors.dimGray, textAlign: 'left', fontSize: 16},
                    ]}>
                    مدرسة الطلائع /بسيارتك الخاصة
                  </Text>
                  <Text
                    style={[
                      styles.address1,
                      {color: colors.dimGray, textAlign: 'left'},
                    ]}>
                    الخميس 8 اكتوبر , 2021
                  </Text>
                  <HStack>
                    <Icon
                      name="clock"
                      type="feather"
                      size={13}
                      color={colors.dimGray}
                    />
                    <Text
                      style={[
                        styles.address1,
                        {color: colors.dimGray, textAlign: 'left'},
                      ]}>
                      الوقت المتوقع للوصول 22 د
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            </HStack>
            {/* <Pressable onPress={() => navigation.navigate('Home')} style={styles.btn}>
              <Text style={styles.loginBtn}> عودة للصفحة الرئيسية </Text>
            </Pressable> */}
          </VStack>
        </VStack>
      </View>
    </View>
  );
};

export default SchoolLocation;