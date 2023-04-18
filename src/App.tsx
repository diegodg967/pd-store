import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
