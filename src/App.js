// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './loginpage/LoginPage';
import EntryFile from './entryfile/EntryFile';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="container1">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/EntryFile" /> : <LoginPage setLoggedIn={setLoggedIn} />
            }
          />
          <Route path="/EntryFile" element={<EntryFile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
