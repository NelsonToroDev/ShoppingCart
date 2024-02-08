import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filtersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 2.1 Wrap the whole application with the context provider
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
