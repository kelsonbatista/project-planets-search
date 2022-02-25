import React from 'react';
import Header from '../../components/Header';
import FormApp from '../../components/FormApp';
import TableApp from '../../components/TableApp';
import './style.css';

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="form">
          <FormApp />
        </section>
        <section className="table">
          <TableApp />
        </section>
      </main>
    </>
  );
}

export default Home;
