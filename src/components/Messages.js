import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Message from './Message';

const Messages = ({ match }) => (
  <div>
    <ul>
      {
          [...Array(5).keys()].map(n => {
              return <li key={n}>
                      <Link to={`${match.url}/${n+1}`}>
                        Message {n+1}
                      </Link>
                    </li>;
          })
      }
    </ul>
    <Switch>
      {/* <Route
        path={match.url}
        render={() => 
          <div>
            <h3>Please select a message from above list</h3>
            <p>URL <code><strong>messages/:id</strong></code> does not exist</p>
          </div>
        }
      /> */}
      <Route path={`${match.url}/:id(\\d+)`} component={Message} />
    </Switch>
  </div>
);

export default Messages;