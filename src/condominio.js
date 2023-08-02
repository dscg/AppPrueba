import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import base64 from 'react-native-base64';
import { SearchBar } from '@rneui/themed';
import Config from './config';

let _isMounted = false;

class Condominio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: null,
      condominios: [],
      arrayholder: [],
      search: '',
    };
  }
  componentDidMount() {
    // const send_json = {};
    // fetch(Config.listarcondominios, {
    //   method: 'POST',
    //     headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Basic ' + base64.encode('admin:1234'),
    //     'X-API-KEY': 'CODEX@123',
    //   },
    //   body: JSON.stringify(send_json),
    // })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   console.log("Condominio responseJson", responseJson);
    //   if (responseJson.estado) {
    //     this.setState({
    //         isLoading: false,
    //         condominios: responseJson.condominios,
    //       },
    //       function () {
    //         this.arrayholder = responseJson.condominios;
    //       },
    //     );
    //   }
    // })
    // .catch((error) => {
    // });
    let datos = [{
          id: 1,
          img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
          nombre: 'La Estrella',
          descripcion: 'Condomino la estrella ofrece diferentes ...',
          costo: '20 dias',
          },{
          id: 2,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU',
          nombre: 'Nuevo horizonte',
          descripcion: 'Contamos con amplias opciones para su estdia ...',
          costo: '20 dias',
        }];
    let that = this;
    this.setState({
        isLoading: false,
        condominios: datos,
      },
      function () {
        this.arrayholder = datos;
      },
    );
  }

  verCondominioDetalle(id_pedido) {
    this.props.navigation.navigate('Condominio Detalle', {
      id_pedido: id_pedido,
    });
  }

  updateSearch = (search) => {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.nombre
        ? item.nombre.toUpperCase()
        : ''.toUpperCase();
      const textData = search.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      condominios: newData,
      search: search,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            paddingTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            color={this.state.isLoad ? 'white' : '#192F6A'}
            onPress={() => this.actualizarRender(this.state.id_cliente)}
            uppercase={false}
            title="      Actualizar      "
          />
        </View>
      );
    }
    return (
      <View style={stylesScreen.center}>
        <SearchBar
          placeholder="Buscar Condominios ..."
          onChangeText={this.updateSearch}
          value={this.state.search}
          // containerStyle={{backgroundColor: 'white', borderWidth: 0,borderColor: 'white',}}
          // inputContainerStyle={{}}
          // inputStyle={{}}
          // leftIconContainerStyle={{}}
          // rightIconContainerStyle={{}}
          lightTheme={true}
        />
        <FlatList
          style={styles.reservaScroll}
          data={this.state.condominios}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => this.verCondominioDetalle(item.id)}
              underlayColor={['lightgray']}
              style={styles.itemContent}>
              <View style={styles.reservaItem}>
                <View style={styles.itemImgContent}>
                  <Image
                    style={styles.itemImg}
                    source={{uri: item.img}}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemInfoTitle}>
                    {item.nombre}
                  </Text>
                  <Text style={styles.itemInfoPagoOnLine}>
                    {item.descripcion}
                  </Text>
                  <Text style={styles.itemInfoTimeSend}>
                    {item.costo}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reservaScroll: {
    flex: 1,
    flexDirection: 'column',
  },
  itemContent: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '96%',
    paddingBottom: 20,
    margin: '2%',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 5,
  },
  reservaItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'start',
    width: '100%',
    height: 110,
    fontSize: 18,
    margin: 10,
    position: 'relative',
  },
  itemImgContent: {
    width: '40%',
    height: '100%',
    // backgroundColor: '#efefef',
  },
  itemImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  itemInfo: {
    width: '50%',
    height: '100%',
    left: 10,
  },
  itemInfoTitle: {
    fontSize: 20
  },
  itemInfoPagoOnLine: {
    fontSize: 16
  },
  itemInfoTimeSend: {
    fontSize: 12
  },
});
const stylesScreen = StyleSheet.create({
  center: {
    flex: 1,
  },
});

export default Condominio;
