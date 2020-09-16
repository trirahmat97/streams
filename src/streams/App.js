import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';

import StreamList from './components/StreamList';
import StreamShow from './components/StreamShow';
import StreamCreate from './components/StreamCreate';
import StreamEdit from './components/StreamEdit';
import StreamDelete from './components/StreamDelete';

import Header from './Header';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={StreamList} />
                        <Route path='/streams/new' exact component={StreamCreate} />
                        <Route path='/streams/edit/:id' exact component={StreamEdit} />
                        <Route path='/streams/delete/:id' exact component={StreamDelete} />
                        <Route path='/streams/:id' exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;