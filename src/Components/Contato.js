import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em Contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>felipemuniz@alu.ufc.br</li>
          <li>(88) 9 9627-7795</li>
          <li>Ali do lado, 111</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
