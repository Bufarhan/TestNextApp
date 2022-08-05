import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


export default ({ Component, pageProps }) => {

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Component {...pageProps} />
    </QueryClientProvider>

  )

}