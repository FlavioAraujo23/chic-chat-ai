'use client';
import { useAuthContextHook } from '@/context/use-auth-context';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import TypeSelectionForm from './type-selection-form';

type Props = {};

const RegistrationFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const { currentStep } = useAuthContextHook();
  const [onOTP, setOnOTP] = React.useState<string>('');
  const [onUserType, setOnUserType] = React.useState<'owner' | 'student'>(
    'owner'
  );

  setValue('otp', onOTP);

  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      );
    case 2:
    case 3:
  }
  return <div>RegistrationFormStep</div>;
};

export default RegistrationFormStep;
