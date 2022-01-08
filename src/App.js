import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
     { name: "Projects", description: "Websites"},
     { name: "Resume", description: "Download resume here" },
  ]);
 const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <About></About>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}

export default App;