import React from 'react';
import Header from '../../components/Header';
import Form from '../../components/Form';
import TableComp from '../../components/Table';
import './style.css';

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="form">
          <Form />
        </section>
        <section className="table">
          <TableComp />
        </section>
      </main>
    </>
  );
}

export default Home;
