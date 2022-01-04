import React, { ReactChild, Suspense, useRef } from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { theme } from './src/constants/theme';
import { ThemeProvider } from './src/hooks/useTheme';
import Navigator from "./src/pages/Navigator";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import store, { persistor } from "./src/store";
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import config from './src/config';
import { IRootReducer } from './src/store/reducers';
import { getAccessToken } from './src/store/selectors/auth.selectors';

const { width, height } = Dimensions.get('window');

const ReduxBlocker = () => {
  const backgroundColor = useRef("#16152F").current; 
  return <SafeAreaView style={[ styles.container, { backgroundColor }]}></SafeAreaView>;
};

type ApolloClientWrapperProps = { children: ReactChild };


const ApolloClientWrapper: React.FC<ApolloClientWrapperProps> = ({ children }) => {
  const state = useSelector((state:IRootReducer) => state);
  const accessToken = getAccessToken(state);
  
  const link = new HttpLink({
    uri: `${config.api.url}/graphql`,
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    }
  })

  const client = new ApolloClient({ link, cache: new InMemoryCache() });

  return (
    <ApolloProvider client={client}>
      { children }
    </ApolloProvider>
  )
}

export default function App() {
  return (
      <ReduxProvider store={store}>
        <PersistGate loading={<ReduxBlocker/>} persistor={persistor}>
          <ApolloClientWrapper>
            <ThemeProvider value={theme}>
              <Suspense fallback={<></>}>
                <Navigator />
              </Suspense>
            </ThemeProvider>
          </ApolloClientWrapper>
        </PersistGate>
      </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: width,
      height: height,
  },
});
