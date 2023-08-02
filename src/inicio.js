import React, {Component} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import { ImageSlider } from "react-native-image-slider-banner";
import Config from './config';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: 'cliente1',
      password: 'cliente1',
      in_request: false,
    };
  }
  handleLogin = () => {
    this.props.navigation.navigate('WorkSpace');
  };
  toLoading = () => {
    this.props.navigation.navigate('Loading');
  };
  render() {
    return (
        <View style={styles.container}>
          <View style={{width: '100%', height: 20}}></View>
          <View style={styles.line}>
            <Text style={styles.textWhite}>Buenos Dias</Text>
            <Text>{'     '}</Text>
            <MaterialCommunityIcons
              name="white-balance-sunny"
              color="yellow"
              size={26}
            />
          </View>
          <View style={{width: '100%', height: 20}}></View>
          <View style={styles.line}>
            <Text style={styles.textWhite}>Aqui puedes ver un resumen de los accesos, inivitaciones, pendientes, entre otros aspectos, de tu condominio</Text>
          </View>
          <View style={{width: '100%', height: 20}}></View>
          <View style={styles.line}>
            <View style={[styles.column, {backgroundColor: 'black'}]}>
              <View style={[styles.line,{width: '80%'}]}>
                  <MaterialCommunityIcons
                    style={{paddingRight: 10}}
                    name="white-balance-sunny"
                    color="yellow"
                    size={26}
                  />
                <View style={styles.columnLeft}>
                  <Text style={[styles.textWhite, {color:'#00ff57'}]}>67 Accesos</Text>
                  <Text style={[styles.textWhite, {color:'gray', fontSize: 10}]}>en los ultimos 7 dias</Text>
                </View>
              </View>
              <View style={{width: '100%', height: 10}}></View>
              <View style={styles.line}>
                <Text style={styles.textWhite}>Resumen de Accesos</Text>
              </View>
              <View style={[styles.line, {marginTop: 20}]}>
                <Text style={[styles.textWhite, {width: '70%', height: 35, textAlign: 'left'}]}>Completados</Text>
                <Text style={[styles.textWhite, {width: '10%', height: 35, textAlign: 'right', color:'#00ff57'}]}>67</Text>
              </View>
              <View style={styles.line}>
                <Text style={[styles.textWhite, {width: '70%', height: 35, textAlign: 'left'}]}>Cancelados</Text>
                <Text style={[styles.textWhite, {width: '10%', height: 35, textAlign: 'right', color:'#00ff57'}]}>5</Text>
              </View>
              <View style={styles.line}>
                <Text style={[styles.textWhite, {width: '70%', height: 35, textAlign: 'left'}]}>Pendientes</Text>
                <Text style={[styles.textWhite, {width: '10%', height: 35, textAlign: 'right', color:'#00ff57'}]}>4</Text>
              </View>
              <View style={styles.line}>
                <Text style={[styles.textWhite, {width: '70%', height: 35, textAlign: 'left'}]}>Pedidos</Text>
                <Text style={[styles.textWhite, {width: '10%', height: 35, textAlign: 'right', color:'#00ff57'}]}>15</Text>
              </View>
            </View>
            <View style={[styles.column, {marginTop: 0}]}>
              <View style={styles.line}>
                <View style={[styles.column, {backgroundColor: 'black', margin: 0}]}>
                  <View style={[styles.line,{width: '80%'}]}>
                      <MaterialCommunityIcons
                        style={{paddingRight: 10}}
                        name="white-balance-sunny"
                        color="yellow"
                        size={26}
                      />
                    <View style={styles.columnLeft}>
                      <Text style={[styles.textWhite, {color:'#00ff57'}]}>2 Inivitaciones</Text>
                      <Text style={[styles.textWhite, {color:'gray', fontSize: 10}]}>en los ultimos 7 dias</Text>
                    </View>
                  </View>
                  <View style={styles.line}>
                    <View style={[styles.column, {margin: 0}]}>
                      <Text style={styles.textWhite}>Individual</Text>
                      <Slider
                        style={{width: '100%', height: 20}}
                        minimumValue={0}
                        maximumValue={100}
                        value={70}
                        minimumTrackTintColor="#d39090"
                        thumbTintColor="#d39090"
                        maximumTrackTintColor="white"
                      />
                    </View>
                  </View>
                  <View style={styles.line}>
                    <View style={[styles.column, {margin: 0}]}>
                      <Text style={styles.textWhite}>Grupal</Text>
                      <Slider
                        style={{width: '100%', height: 20}}
                        minimumValue={0}
                        maximumValue={100}
                        value={30}
                        minimumTrackTintColor="#d39090"
                        thumbTintColor="#d39090"
                        maximumTrackTintColor="white"
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{width: '100%', height: 10}}></View>
              <View style={styles.line}>
                <View style={[styles.column, {backgroundColor: 'black', margin: 0}]}>
                  <View style={[styles.line,{width: '80%'}]}>
                      <MaterialCommunityIcons
                        style={{paddingRight: 10}}
                        name="white-balance-sunny"
                        color="yellow"
                        size={26}
                      />
                    <View style={styles.columnLeft}>
                      <Text style={[styles.textWhite, {color:'#00ff57'}]}>2 Inivitaciones</Text>
                      <Text style={[styles.textWhite, {color:'gray', fontSize: 10}]}>en los ultimos 7 dias</Text>
                    </View>
                  </View>
                  <View style={styles.line}>
                    <Text style={styles.textWhite}>Individual</Text>
                  </View>
                  <View style={styles.line}>
                    <Text style={styles.textWhite}>Grupal</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.line, {height: 150,}]}>
            <View style={[styles.column, {backgroundColor: 'black'}]}>
              <Text style={[styles.textWhite, {fontSize: 20}]}>Finanzas</Text>
                <ImageSlider 
                  data={[
                      {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
                      {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
                      {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
                          ]}
                  autoPlay={false}
                  onItemChanged={(item) => console.log("item", item)}
                  closeIconColor="#fff"
                  caroselImageStyle={{ resizeMode: 'cover', height: 150}}
                />
            </View>
            <View style={[styles.column, {marginTop: 0}]}>
              <View style={styles.line}>
                <View style={[styles.column, {backgroundColor: 'black', margin: 0}]}>
                  <View style={[styles.line,{width: '80%'}]}>
                      <MaterialCommunityIcons
                        style={{paddingRight: 10}}
                        name="white-balance-sunny"
                        color="yellow"
                        size={26}
                      />
                    <View style={styles.columnLeft}>
                      <Text style={[styles.textWhite, {color:'#00ff57'}]}>2 Inivitaciones</Text>
                      <Text style={[styles.textWhite, {color:'gray', fontSize: 10}]}>en los ultimos 7 dias</Text>
                    </View>
                  </View>
                  <View style={styles.line}>
                    <View style={[styles.column, {margin: 0}]}>
                      <Text style={styles.textWhite}>Individual</Text>
                      <Slider
                        style={{width: '100%', height: 20}}
                        minimumValue={0}
                        maximumValue={100}
                        value={70}
                        minimumTrackTintColor="#d39090"
                        thumbTintColor="#d39090"
                        maximumTrackTintColor="white"
                      />
                    </View>
                  </View>
                  <View style={styles.line}>
                    <View style={[styles.column, {margin: 0}]}>
                      <Text style={styles.textWhite}>Grupal</Text>
                      <Slider
                        style={{width: '100%', height: 20}}
                        minimumValue={0}
                        maximumValue={100}
                        value={30}
                        minimumTrackTintColor="#d39090"
                        thumbTintColor="#d39090"
                        maximumTrackTintColor="white"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.line}>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'initial',
    alignContent: 'initial',
    backgroundColor: '#3b3b3b',
    flexDirection: 'column',
  },
  line: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-center',
    flexDirection: 'row',
    paddingBlock: 5,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'flex-start',
    flexDirection: 'column',
    margin: 5,
    borderRadius: 10,
    padding: 5
  },
  columnLeft: {
    flex: 1,
    alignItems: 'initial',
    justifyContent: 'space-center',
    flexDirection: 'column',
  },
  bgBlack: {
    color: 'black',
  },
  textWhite: {
    color: 'white',
  },
  font8: {
    fontSize: 8,
  },
  logo: {
    width: '100%',
    height: '100%',
    marginTop: 10,
    maxHeight: 80,
  },
  input: {
    marginBottom: 30,
    width: 250,
    height: 50,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    color: 'white',
    fontSize: 16,
    fontFamily: Config.quicksand_semibold,
  },
  button: {
    // width: 180,
    marginBottom: 30,
    height: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: 'white',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: Config.quicksand_regular,
  },
});

export default Login;
