import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Alert, ScrollView } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {

  const navigation = useNavigation();  
  const [orders, SetOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();

  const fetchData = () =>{
    setIsLoading(true);
    fetchOrders()
     .then(response => SetOrders(response.data))
     .catch(() => Alert.alert('Erro ao carregar dados!'))
     .finally(() => setIsLoading(false));
  }

  const handleOnPress = (order: Order) =>{
    navigation.navigate('OrderDetails',{
      order,
    });
  }

 useEffect(() => {
  if(isFocused){
    fetchData();
  }
 },[isFocused]);

  return (
    <>
    <Header />
    <ScrollView style={styles.container}>  
      {isLoading ? (
        <Text>Buscando Pedidos...</Text>
      ) : (
        orders.map(order=>(
        <TouchableNativeFeedback
          key = {order.id}
          onPress = {() => handleOnPress(order)}
        >
        <OrderCard order={order}/>
        </TouchableNativeFeedback>
      )))}
    </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container:{
    paddingRight: '5%',
    paddingLeft:  '5%',
  }
});
export default Orders;