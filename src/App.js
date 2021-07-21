import { Route, Switch }  from 'react-router-dom'

import AllQoutes from './pages/AllQoutes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';


function App() {
  return (
   <Switch>
     <Route path="/quotes" exact>
        <AllQoutes />
     </Route>
     <Route path="/quotes/:quotedId" >
        <QuoteDetail />
     </Route>
     <Route path="/new-quotes">
        <NewQuote />
     </Route>
   </Switch>
  );
}

export default App;
