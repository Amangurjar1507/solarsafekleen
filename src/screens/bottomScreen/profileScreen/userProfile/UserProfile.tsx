import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  CustomStatusbar,
  ModalComponent,
} from '../../../../components/componentsIndex';
import styles from './userProfile.style';
import color from '../../../../theme/color';
import imageIndex from '../../../../assets/imageIndex';
import {UserProfileList} from './constData';
import useUserProfile from './useUserProfile';

const UserProfile = () => {
  const {onEdit, userData, onLogOut, modal, onNavigation, setModal} = useUserProfile();

  const renderHeader = () => (
    <View style={styles.userView}>
      <Image
        source={imageIndex.userProfile}
        style={styles.profieImg}
        resizeMode="cover"
      />
      <Text style={styles.name}>Raghva Gurjar</Text>
      <Text style={styles.gmailText}>
        {userData?.email}
      </Text>
      <Button
        label="Edit Profile"
        onPress={onEdit}
        containerStyle={styles.editcontainerStyle}
        nameTextStyle={styles.editTitle}
      />
    </View>
  );

  const renderItem = ({ item }:any) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.cardView}
      onPress={() => {
        if (item.name === 'Logout') {
          setModal(true);
        }
        onNavigation(item.navigateTo);
      }}>
      <Image
        source={item.image}
        style={styles.nextImg}
        tintColor={color.label}
        resizeMode="cover"
      />
      <Text style={styles.title}>{item.name}</Text>
      <Image
        source={imageIndex.next}
        style={styles.nextImg}
        tintColor={color.label}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <FlatList
        data={UserProfileList}
        keyExtractor={(item, index) => `${index}`}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mainRow}
      />
      <ModalComponent animationType="none" visible={modal}>
        <TouchableOpacity
          style={styles.modalView}
          onPress={() => setModal(false)}>
          <View style={styles.mainModal}>
            <View style={styles.borderWidth} />
            <Text style={styles.logOut}>Log out</Text>
            <Text style={styles.text}>Are you sure you want to log out?</Text>
            <View style={styles.buttView}>
              <Button
                label="Yes, Logout"
                containerStyle={styles.containerStyle}
                onPress={onLogOut}
              />
              <Button
                label="Cancel"
                containerStyle={styles.containerCancel}
                onPress={() => setModal(false)}
                nameTextStyle={styles.nameTextStyle}
              />
            </View>
          </View>
        </TouchableOpacity>
      </ModalComponent>
    </View>
  );
};

export default UserProfile;
