import AppNavigation from './src/navigation';
import { AuthProvider } from './src/provider/AuthProvider';
export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}

