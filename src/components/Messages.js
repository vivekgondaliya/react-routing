import React from 'react';
import {Link} from 'react-router-dom';

const Messages = () => (
  <ul>
    {
        [...Array(5).keys()].map(n => {
            return <li key={n}>
                    <Link to={`messages/${n+1}`}>
                      Message {n+1}
                    </Link>
                  </li>;
        })
    }
  </ul>
);

export default Messages;