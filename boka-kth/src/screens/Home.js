import { View, Text, Button, SafeAreaView, Modal } from 'react-native';
import AppStyles from '../styles/AppStyles';
import { auth, db } from '../config/firebase'
import { signOut } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import InlineTextButton from '../components/InlineTextButton';
import BokaModal from '../components/BokaModal';
import React from 'react';


export default function Home({ navigation }) {

    let  [modalVisible, setModalVisible] = React.useState(false);

    let boka = async (boka) => {
        const docRef = await addDoc(collection(db, "bokning"), {
            startTid: boka,
            rum: "320",
            Datum:new Date().toLocaleString(),
            user: auth.currentUser.email
        });

        console.log(docRef)
    };

    let showContent = () => {
        return (
            <View style={AppStyles.container}>
                <Button 
                    title="Boka ett rum" 
                    onPress={() => setModalVisible(true)} 
                    color="#f7b267" style={AppStyles.loginButton} />
            </View>
        );
    };

    let logout = () => {
        signOut(auth).then(() => {
            navigation.popToTop();
        });
    }
    return (
        <SafeAreaView style={AppStyles.container}>
            <View style={[AppStyles.rowContainer, AppStyles.rightAligned]}>
                <InlineTextButton text="Mina bokningar" onPress={() => navigation.popToTop()}/>
                <Button title='Sign out' onPress={logout} style={AppStyles.logoutButton}/>
            </View>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}>
                <BokaModal
                    onClose={() => setModalVisible(false)}
                    boka={boka}/>
            </Modal>
            <Text style={AppStyles.header}>Boka KTH</Text>
            {auth.currentUser ? showContent() : null}
        </SafeAreaView>
    )
}