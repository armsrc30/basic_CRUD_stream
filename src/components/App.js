import React from "react";
//Switch shows a matching route when its the first that it comes to, rather than showing both
//  /streams/new and /streams/:id, it'll only show /streams/new
import { Switch, Router, Route} from "react-router-dom";

import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'



//Using plaint Router instead of BrowserRouter
//BrowserRouter controls history. In Router, we control history (HashRouter is a third option)
const App = () => {
    return(
        <div className="ui container">
            <Router history={history}>
                <div> 
                    <Header />
                    <Switch>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/new" exact component={StreamCreate}/>
                        <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                        <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                        <Route path="/streams/:id" exact component={StreamShow}/>
                    </Switch>
                </div>
            </Router>
        </div>
    ) 
}

export default App;