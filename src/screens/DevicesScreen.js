import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RenderImage from '../components/Image';
import Title from '../components/Title';
import color from '../constants/color';

const DeviceScreen = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://203.129.243.94:8086/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            op: 'login',
            emp_id: 'emp222',
            password: 'password',
          }),
        });

        const result = await response.json();
        setUserData(result.message);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  let token = userData.accessToken;

  console.log(token);

  // .then(response => response.json())
  // .then(data => {
  //   token = data.token; // Assuming the token is returned in the response data
  //   console.log('Generated token:', token);
  //   // Use the token for further requests or store it as needed
  //  })
  // .catch(error => {
  //   console.error('Error generating token:', error);
  // });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://203.129.243.94:8086/api/mqtt-service',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              op: 'get_device',
              unit_num: 'U-1',
            }),
          },
        );

        const result = await response.json();
        setData(result.message);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleItemClick = item => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item} onPress={() => handleItemClick(item)}>
      <View>
        <Text style={styles.text}>Device ID: {item.device_id}</Text>
        <Text style={styles.text}>Element Num: {item.element_num}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[color.torons, color.androidGreen]}
      style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <RenderImage></RenderImage>
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {selectedItem && (
                <View>
                  <Title>Details</Title>
                  <Text style={styles.InnerText}>ID: {selectedItem._id}</Text>
                  <Text style={styles.InnerText}>
                    Device ID: {selectedItem.device_id}
                  </Text>
                  <Text style={styles.InnerText}>
                    Element Num: {selectedItem.element_num}
                  </Text>
                  <Text style={styles.InnerText}>
                    Gateway type: {selectedItem.gateway_type}
                  </Text>
                  <Text style={styles.InnerText}>
                    Type: {selectedItem.type}
                  </Text>
                  <Text style={styles.InnerText}>
                    Unit Number: {selectedItem.unit_num}
                  </Text>
                </View>
              )}
              <TouchableHighlight
                style={styles.closeButton}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  item: {
    backgroundColor: color.blue,
    padding: 10,
    marginVertical: 10,
    borderRadius: 14,
  },
  text: {
    color: 'white',
  },
  InnerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    margin: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: color.blue,
    borderRadius: 14,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default DeviceScreen;
