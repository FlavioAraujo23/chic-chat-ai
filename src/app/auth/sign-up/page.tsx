import SignUpFormProvider from '@/components/forms/sign-up/form-provider';
import React from 'react';
import RegistrationFormStep from './../../../components/forms/sign-up/registration-step';
import ButtonHandler from '@/components/forms/sign-up/button-handlers';
import HighlightBar from '@/components/forms/sign-up/highlight-bar';

const SignUp = () => {
  return (
    <section className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFormProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormStep />
            <ButtonHandler />
          </div>
          <HighlightBar />
        </SignUpFormProvider>
      </div>
    </section>
  );
};

export default SignUp;
