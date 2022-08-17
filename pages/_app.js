import 'tailwindcss/tailwind.css';
import { useForm, FormProvider } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import PageWrapper from '../components/layout/PageWrapper';
import '../styles/global.css';
import { store, persistor } from '../store';

function MyApp({ Component, pageProps }) {
  const methods = useForm();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <FormProvider {...methods}>
          <PageWrapper>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 5000,
              }}
            />
            <Component {...pageProps} />
          </PageWrapper>
        </FormProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
