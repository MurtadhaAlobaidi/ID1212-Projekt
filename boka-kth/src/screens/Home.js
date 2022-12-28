import { View, Text, Button, SafeAreaView, Modal, ActivityIndicator } from 'react-native';
import AppStyles from '../styles/AppStyles';
import { auth, db } from '../config/firebase'
import { signOut } from 'firebase/auth';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import InlineTextButton from '../components/InlineTextButton';
import BookingModal from '../components/BookingModal';
import React from 'react';
import { async } from '@firebase/util';


export default function Home({ navigation }) {

    let [modalVisible, setModalVisible] = React.useState(false);
    let [isLoading, setIsLoading] = React.useState(false);
    let [bookings, setBookings] = React.useState([]);

    let loadBookings = async () => {
        const q = query(collection(db, "bookings"), where("user", "==", auth.currentUser.email));

        const querySnapshot = await getDocs(q);
        let bookings = [];
        querySnapshot.forEach((doc) => {
            let booking = doc.data();
            booking.id = doc.id;
            bookings.push(booking);
        });

        setBookings(bookings);
        setIsLoading(false);
    }

    let book = async (room, start, end) => {
        const docRef = await addDoc(collection(db, "bookings"), {
            roomId: room,
            start: start,
            end: end,
            date:new Date().toLocaleString(),
            user: auth.currentUser.email
        });

        console.log(docRef)
    };

    let showBookings = () => {

    };

    let showContent = () => {
        return (
            <View style={AppStyles.container}>
                {isLoading ? <ActivityIndicator size="large"/> : showBookings()}
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






    // const functions = require('firebase-functions');
    // const admin = require('firebase-admin');
    // admin.initializeApp();

    // exports.resetAppointmentTimes = functions.pubsub.schedule('0 0 * * *').onRun((context) => {
    //     const appointmentTimesCollectionRef = db.database().collection('appointmentTimes');
    //     appointmentTimesCollectionRef.get().then(querySnapshot => {
    //         if (querySnapshot.empty) {
    //             return null;
    //         } else {
    //             let batch = db.database().batch();
    //             querySnapshot.forEach(doc => {
    //                 batch.update(doc.ref, { available: true });
    //             });
    //             return batch.commit();
    //         }
    //     }).catch(error => { console.log(error); });
    // });




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
                <BookingModal
                    onClose={() => setModalVisible(false)}
                    room={book}
                    />
            </Modal>
            <Text style={AppStyles.header}>Boka KTH</Text>
            {auth.currentUser ? showContent() : null}
        </SafeAreaView>
    )
}