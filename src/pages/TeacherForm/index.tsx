import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warnIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';


const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incível que você quer dar aulas."
        description="O Primeiro passo é preencher esse fomulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo"/>

          <Input name="avatar" label="Avatar"/>

          <Input name="whatsapp" label="Whatsapp"/>

          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Seus à aula</legend>

          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]}
          />

          <Input name="cost" label="Custo da hora/aula"/>
        </fieldset>

        <footer>
          <p>
            <img src={warnIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar Cadastro
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;