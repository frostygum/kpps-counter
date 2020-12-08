import {
  Route,
  Switch,
  HashRouter as Router
} from 'react-router-dom';
import { Navbar } from './components';
import styled from 'styled-components';

// Routes Settings Here :
import routes from './config/routes';

import './App.css';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const MobileWrapper = styled.div`
  width: 480px;
`

function App() {
  return (
    <Router>
      <Switch>
        <Wrapper>
          <MobileWrapper>
            <Navbar />
            {
              routes.map((route, idx, props) =>
                <Route
                  path={route.path}
                  component={route.component}
                  key={idx}
                  exact={route.exact}
                  {...props}
                />
              )
            }
          </MobileWrapper>
        </Wrapper>
      </Switch>
    </Router>
  );
}

export default App;
