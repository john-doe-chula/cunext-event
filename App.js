import AppNavigation from './src/navigation';
// import { schedulePushNotification } from './src/hooks/schedulePushNotification';
import { Button, StyleSheet, View } from 'react-native';

import * as Notifications from 'expo-notifications';

const schedulePushNotification = async () => {
  // Request permissions for notifications if not already granted
  const { status } = await Notifications.getPermissionsAsync();
  let permissionStatus = status;

  if (status !== 'granted') {
    const newStatus = await Notifications.requestPermissionsAsync();
    permissionStatus = newStatus.status;
  }

  // Check if permission is granted
  if (permissionStatus !== 'granted') {
    alert('Sorry, we need notification permissions to show this notification.');
    return;
  }

  // Schedule notification in 5 seconds
  const trigger = new Notifications.Trigger({ seconds: 5 });
  const notificationData = {
    title: 'This is a notification!',
    body: 'The button was clicked 5 seconds ago.',
    data: { someData: 'This is some data' }, // Optional data to send with the notification
  };

  await Notifications.scheduleNotificationAsync(notificationData, { trigger });
};

export default function App() {
  return (
    // <AppNavigation />
    <View style={styles.container}>
      <Button title='Notificaiton' onPress={schedulePushNotification}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});