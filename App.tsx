import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './src/constants/theme';
import { ThemeProvider } from './src/hooks/useTheme';
import Navigator from "./src/pages/Navigator";

export default function App() {
  return (
      <ThemeProvider value={theme}>
        <Navigator />
      </ThemeProvider>
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
