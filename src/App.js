import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
//yarn add @tanstack/react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      {/* youtube class + context */}
      <YoutubeApiProvider>
        {/* tanstack query */}
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
