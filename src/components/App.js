import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
// 1040759329180-j95oqqq4u76uf80oh75t9j8le5vprtlk.apps.googleusercontent.com
const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit" component={StreamEdit} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;