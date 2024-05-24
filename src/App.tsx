import './App.css'
import Nav_page from './components/Nav_page'
import '@fontsource/roboto/500.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'rsuite/dist/rsuite.min.css';
import 'rsuite/Table/styles/index.css'


const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Nav_page />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
