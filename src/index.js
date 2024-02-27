import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import { store } from 'store/store';

import { BrowserRouter } from 'react-router-dom';
import App from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
