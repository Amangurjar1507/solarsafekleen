import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Defaultdata} from './Defaultdata';
import {styles} from './paymentMethod.style';
import {
  Button,
  CustomStatusbar,
  Header,
} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import usePaymentMethod from './usePaymentMethod';
import PaymentCard from '../../../components/card/paymentCard/PaymentCard';

const PaymentMethod = () => {
  const {onPayment, handleSelectItem, selectedItem, setSelectedItem} =
    usePaymentMethod();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <Header
        backIconsShown
        lable="Payment Method"
        lableStyle={styles.lableStyle}
      />
      <View style={styles.continueView}>
        <View style={styles.rowView}>
          <FlatList
            data={Defaultdata}
            style={styles.flatList}
            renderItem={({item, index}) => {
              return (
                <PaymentCard
                  item={item}
                  isSelected={selectedItem != index}
                  onSelectItem={() => handleSelectItem(index)}
                />
              );
            }}
          />
        </View>

        <View style={styles.modalView}>
          <View style={styles.orderView}>
            <Text style={styles.orderText}>Order Summary</Text>
            <View style={styles.texRow}>
              <Text style={styles.subTotal}>Subtotal</Text>
              <Text style={styles.prices}>$156.00</Text>
            </View>
            <View style={styles.texRow}>
              <Text style={styles.subTotal}>Est.Tax</Text>
              <Text style={styles.prices}>$12.00</Text>
            </View>
            <View style={styles.border}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalSub}>$168</Text>
            </View>
            <Button
              onPress={onPayment}
              label="Payment Now"
              containerStyle={styles.containerStyle}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentMethod;
