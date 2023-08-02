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
          <View style={styles.line}>
            <View style={[styles.column, {backgroundColor: 'black'}]}>
              <View style={{width: '100%', height: 20}}></View>
                <Image
                  style={styles.itemImg}
                  source={{uri: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'}}
                  resizeMode="contain"
                />
              <View style={{width: '100%', height: 10}}></View>
              <Text style={styles.textWhite}>Armando Fuentes petrovic</Text>
              <View style={{width: '100%', height: 10}}></View>
              <View style={{width: '100%', paddingLeft: 20}}>
                <Text style={{marginLeft: 0, textAlign: 'left', color: 'white'}}>Informacion de Contacto</Text>
                <View style={{width: '100%', height: 10}}></View>
                <Text style={{marginLeft: 0, textAlign: 'left', color: 'white'}}>Celular</Text>
                <Text style={{width: '100%', textAlign: 'left', color:'gray'}}>+591 76005423</Text>
                <View style={{width: '100%', height: 10}}></View>
                <Text style={{marginLeft: 0, textAlign: 'left', color: 'white'}}>C.I.</Text>
                <Text style={{width: '100%', textAlign: 'left', color:'gray'}}>5689458 SC</Text>
                <View style={{width: '100%', height: 10}}></View>
                <Text style={{marginLeft: 0, textAlign: 'left', color: 'white'}}>Direccion</Text>
                <Text style={{width: '100%', textAlign: 'left', color:'gray'}}>MZ40 , casa 7, calle 4</Text>
                <View style={{width: '100%', height: 10}}></View>
                <Text style={{marginLeft: 0, textAlign: 'left', color: 'white'}}>Correo electronico</Text>
                <Text style={{width: '100%', textAlign: 'left', color:'gray'}}>armandofp@gmail.com</Text>
                <View style={{width: '100%', height: 10}}></View>
              </View>
            </View>

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
  itemImg: {
    width: 150,
    height: 150,
    borderRadius: 750,
    backgroundColor: 'red',
  },
});

export default Login;
