import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Button from '../Component/Button';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Feather name="arrow-left" size={25} color="white" />
        </View>
        <Text style={styles.profil}>Profil</Text>
        <View style={styles.icon}>
          <Ionicons name="share-social-outline" size={25} color="white" />
          <TouchableOpacity onPress={() => props.navigation.navigate('Detail')}>
            <Feather name="user" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <ImageBackground
            source={require('../Asset/Image/dafa.jpeg')}
            style={styles.img}>
            <View style={styles.photo}>
              <View style={styles.icon2}>
                <FontAwesome5 name="camera" size={20} color="white" />
              </View>
            </View>
          </ImageBackground>
          <View style={styles.card}>
            <View style={styles.card2}>
              <Image
                source={require('../Asset/Image/dafa.jpeg')}
                style={styles.img2}
              />
              <View style={styles.title}>
                <Text style={styles.nama}>Satria Dafa</Text>
                <View style={{flexDirection: 'row'}}>
                  <Feather name="star" size={15} color="orange" />
                  <Feather name="star" size={15} color="orange" />
                  <Feather name="star" size={15} color="orange" />
                  <Feather name="star" size={15} color="orange" />
                  <Feather name="star" size={15} color="orange" />
                </View>
              </View>
            </View>
            <View style={styles.job}>
              <Text style={styles.status}>Penulis | Politisi</Text>
              <Text style={styles.quote}>
                "Hidup itu sederhana, kita saja yang membuatnya sulit"
              </Text>
            </View>
            <View style={styles.follow}>
              <View style={{alignItems: 'center', width: '30%'}}>
                <Text style={styles.ket}>Postingan</Text>
                <Text style={styles.isi}>26</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  borderLeftWidth: 1,
                  width: '35%',
                  borderColor: 'white',
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => props.navigation.navigate('Following')}>
                  <Text style={styles.ket}>Mengikuti</Text>
                  <Text style={styles.isi}>26</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  borderLeftWidth: 1,
                  width: '30%',
                  borderColor: 'white',
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center'}}
                  onPress={() => props.navigation.navigate('Follower')}>
                  <Text style={styles.ket}>Pengikut</Text>
                  <Text style={styles.isi}>26</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.poin}>
            <View style={styles.ikon}>
              <FontAwesome5 name="award" size={35} color="orange" />
              <View style={styles.ikon2}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 16, color: '#100F0F'}}>
                  Total Point Anda
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 18, color: 'orange'}}>
                    230
                  </Text>
                  <Text style={{fontSize: 14, color: '#100F0F', marginLeft: 5}}>
                    Klaim Reward
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Feather name="chevron-right" size={30} color="#100F0F" />
            </View>
          </View>
          <View style={styles.lengkap}>
            <Text style={{fontSize: 16, color: '#100F0F'}}>
              Lengkapi Profil Anda 2/3
            </Text>
            <View style={styles.bar}>
              <View style={styles.bar1}></View>
              <View style={styles.bar2}></View>
            </View>
          </View>
          <View style={styles.menu}>
            <Button
              bg="#256D85"
              icon="align-justify"
              text="Semua"
              fungsi={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <Button
              bg="#256D85"
              icon="sunrise"
              text="Idea"
              fungsi={() => {
                props.navigation.navigate('Search');
              }}
            />
            <Button
              bg="#256D85"
              icon="file-text"
              text="Artikel"
              fungsi={() => {
                props.navigation.navigate('Community');
              }}
            />
            <Button
              bg="#256D85"
              icon="bar-chart-2"
              text="Polling"
              fungsi={() => {
                props.navigation.navigate('Chat');
              }}
            />
            <Button
              bg="#256D85"
              icon="edit"
              text="Petisi"
              fungsi={() => {
                props.navigation.navigate('Profile');
              }}
            />
          </View>
          <View
            style={{width: '100%', paddingHorizontal: 20, marginVertical: 10}}>
            <View style={styles.card3}>
              <Image
                source={require('../Asset/Image/dafa.jpeg')}
                style={styles.img3}
              />
              <View style={{marginLeft: 10}}>
                <Text
                  style={{fontSize: 20, color: '#100F0F', fontWeight: '500'}}>
                  Satria Dafa
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 16, color: '#100F0F'}}>
                    19 menit lalu |
                  </Text>
                  <Text style={{fontSize: 16, color: '#256D85', marginLeft: 5}}>
                    Idea
                  </Text>
                </View>
              </View>
            </View>
            <Text style={{fontSize: 16, color: '#100F0F'}}>
              "Hidup itu sederhana, kita saja yang membuatnya sulit"
            </Text>
          </View>
          <View
            style={{width: '100%', paddingHorizontal: 20, marginVertical: 10}}>
            <View style={styles.card3}>
              <Image
                source={require('../Asset/Image/dafa.jpeg')}
                style={styles.img3}
              />
              <View style={{marginLeft: 10}}>
                <Text
                  style={{fontSize: 20, color: '#100F0F', fontWeight: '500'}}>
                  Satria Dafa
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 16, color: '#100F0F'}}>
                    37 menit lalu |
                  </Text>
                  <Text style={{fontSize: 16, color: '#256D85', marginLeft: 5}}>
                    Artikel
                  </Text>
                </View>
              </View>
            </View>
            <Text style={{fontSize: 16, color: '#100F0F'}}>
              "Hidup itu sederhana, kita saja yang membuatnya sulit"
            </Text>
          </View>
          <View
            style={{width: '100%', paddingHorizontal: 20, marginVertical: 10}}>
            <View style={styles.card3}>
              <Image
                source={require('../Asset/Image/dafa.jpeg')}
                style={styles.img3}
              />
              <View style={{marginLeft: 10}}>
                <Text
                  style={{fontSize: 20, color: '#100F0F', fontWeight: '500'}}>
                  Satria Dafa
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 16, color: '#100F0F'}}>
                    55 menit lalu |
                  </Text>
                  <Text style={{fontSize: 16, color: '#256D85', marginLeft: 5}}>
                    Semua
                  </Text>
                </View>
              </View>
            </View>
            <Text style={{fontSize: 16, color: '#100F0F'}}>
              "Hidup itu sederhana, kita saja yang membuatnya sulit"
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#256D85',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profil: {
    color: 'white',
    fontSize: 20,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  img: {
    height: 200,
    width: '100%',
  },
  img2: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  img3: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  photo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
  },
  icon2: {
    backgroundColor: '#256D85',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    height: 220,
    backgroundColor: '#E7F6F2',
    top: '-7%',
    borderRadius: 15,
    elevation: 5,
  },
  card2: {
    paddingHorizontal: 20,
    position: 'absolute',
    marginTop: '-15%',
    flexDirection: 'row',
  },
  card3: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  title: {
    marginTop: '40%',
  },
  job: {
    alignSelf: 'center',
    marginTop: 80,
    width: '60%',
    alignItems: 'center',
  },
  status: {
    fontSize: 16,
    color: '#100F0F',
  },
  quote: {
    textAlign: 'center',
    color: '#100F0F',
    fontSize: 16,
    fontWeight: '500',
  },
  follow: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#256D85',
    marginTop: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 10,
  },
  poin: {
    width: '100%',
    height: 70,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: -35,
  },
  ikon: {
    flexDirection: 'row',
  },
  ikon2: {
    marginLeft: 10,
  },
  lengkap: {
    width: '100%',
    padding: 20,
  },
  bar: {
    marginVertical: 10,
  },
  bar1: {
    width: '100%',
    borderBottomWidth: 4,
    borderColor: 'lightblue',
  },
  bar2: {
    width: '65%',
    borderBottomWidth: 4,
    borderColor: '#256D85',
    marginTop: -5,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#100F0F',
  },
  ket: {
    color: 'white',
    fontSize: 16,
  },
  isi: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
