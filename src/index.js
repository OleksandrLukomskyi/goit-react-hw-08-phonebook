import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'store/store';

import { BrowserRouter } from 'react-router-dom';
import App from 'components/App/App';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
