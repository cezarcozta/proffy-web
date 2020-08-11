import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface ITeacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  cost: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: ITeacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  async function createNewConnection() {
    try {
      await api.post('connections', {
        user_id: teacher.id
      });
    } catch (error) {
      throw new Error();
    }
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      
      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>{teacher.cost}</strong>
        </p>
        
        <a
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`} 
          type="button"
        >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;