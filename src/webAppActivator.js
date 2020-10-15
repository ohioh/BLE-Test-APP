import './style';
import App from './components/app';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js')
  .then(registration => console.log('[OHIOH-App:] ServiceWorker was registerd with the scope: ', registration.scope))
  .catch( err => console.error('[OHIOH-APP:] I was not able to register the serviceWorker with the error:', err)  
}       


export default App;
