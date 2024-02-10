import React from 'react';
import AddTodosform from './components/forms/add-todo-form';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ListTask from './components/screens/list-task';
import ListProduct from './components/screens/list-products';
import ListCarts from './components/screens/list-carts';

function App({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ListProduct />} />
          <Route path="/hi" element={<AddTodosform />} />
          <Route path="/list-tasks" element={<ListTask />} />
          <Route path="/list-carts" element={<ListCarts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
