import { Route, Switch, Redirect }  from 'react-router-dom'

import AllQoutes from './pages/AllQoutes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
   <Switch>
     <Route path='/' exact>
       <Redirect to='/quotes' />
     </Route>
     <Route path="/quotes" exact>
        <AllQoutes />
     </Route>
     <Route path="/quotes/:quoteId" >
        <QuoteDetail />
     </Route>
     <Route path="/new-quotes">
        <NewQuote />
     </Route>
   </Switch>
   </Layout>
  );
}

export default App;
