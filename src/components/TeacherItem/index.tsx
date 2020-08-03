import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/6342828?s=400&u=7d7d56e50bd71c80cb478755d1a40016af641a10&v=4" alt="César Costa"/>
        <div>
          <strong>César Augusto Costa</strong>
          <span>Biologia</span>
        </div>
      </header>
      
      <p>
        Entusiasta das melhores biologias avançadas.
        <br /><br />
        Apaixonado por animaizinhos e por células.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 75,00</strong>
        </p>
        
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;