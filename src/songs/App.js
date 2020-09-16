import React from 'react';
import SingleList from './components/SingleList';
import SongDetail from './components/SongDetail';


const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <div><SingleList /></div>
                </div>
                <div className="column four wide">
                    <div><SongDetail /></div>
                </div>
            </div>
        </div>
    )
}

export default App;