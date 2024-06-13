import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import UserTypeCard from './user-type-card';

type TypeSelectionProps = {
  register: UseFormRegister<FieldValues>;
  userType: 'owner' | 'student';
  setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>;
};

const TypeSelectionForm = ({
  register,
  setUserType,
  userType,
}: TypeSelectionProps) => {
  return (
    <>
      <h2 className="text-gravel md:text-4xl font-bold">Crie uma conta</h2>
      <p>
        Nos fale um pouco mais sobre você!! O que você faz? Vamos fazer sua{' '}
        <br /> experiência ser incrivel.
      </p>
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="Owner"
        title="Eu sou o dono do negócio"
        text="Configurando minha conta para minha empresa"
      />
      <UserTypeCard
        register={register}
        setUserType={setUserType}
        userType={userType}
        value="student"
        title="Eu sou um estudante"
        text="Procurando aprender mais sobre essa ferramenta"
      />
    </>
  );
};

export default TypeSelectionForm;
