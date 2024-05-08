import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
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
  const {onEdit,onLogOut, modal, onNavigation, setModal} = useUserProfile();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.mainRow}>
          <View style={styles.userView}>
            <Image
              source={imageIndex.userProfile}
              style={styles.profieImg}
              resizeMode="cover"
            />
            <Text style={styles.name}>Raghva Gurjar</Text>
            <Text style={styles.gmailText}>RamGurjar1408@gmail.com</Text>
            <Button
              label="Edit Profile"
              onPress={onEdit}
              containerStyle={styles.editcontainerStyle}
              nameTextStyle={styles.editTitle}
            />
          </View>
          <Text style={styles.profileText}>Profile</Text>
          <FlatList
            data={UserProfileList}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={item => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.cardView}
                  onPress={() => {
                    if (item?.item?.name == 'Logout') {
                      setModal(true);
                    }
                    {
                      onNavigation(item?.item?.navigateTo);
                    }
                  }}>
                  <Image
                    source={item?.item?.image}
                    style={styles.nextImg}
                    tintColor={color.label}
                    resizeMode="cover"
                  />
                  <Text style={styles.title}>{item.item.name}</Text>
                  <Image
                    source={imageIndex.next}
                    style={styles.nextImg}
                    tintColor={color.label}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              );
            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
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
                onPress={() => {
                  setModal(false);
                }}
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
