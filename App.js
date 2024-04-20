import { usePushNotification } from './src/hooks/usePushNotification';
import AppNavigation from './src/navigation';
import CreateEvent from './src/screens/CreateEvent';

export default function App() {
  const {expoPushToken, notification} = usePushNotification();

  return (
    <CreateEvent/>
    // <AppNavigation />
  );
}

