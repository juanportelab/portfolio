import React, { useState, useRef } from 'react'
import * as S from './Contact.Styles';
import emailjs from '@emailjs/browser';

const Contact = () => {

const [contactDates, setContactDates] = useState({
    name: "",
    email: "",
    message: "",
    checkedTerms: false
});

const [emptyInputs, setEmptyInputs] = useState(false);
const [sucessSendForm, setSuccessSendForm] = useState(false);
const [errorSendForm, setErrorSendForm] = useState(false);

const form = useRef();

const onSubmit = (e) => {
    //evitar que la página se recarge
    e.preventDefault(); 

    //Validar formulario
    if (contactDates.name === "" || contactDates.email === "" || contactDates.message === "" || contactDates.checkedTerms === false){
        setEmptyInputs(true);
    }
    else {
         //Enviar el formulario
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_USER_ID
        ).then((result) =>{
            setSuccessSendForm(true)
        },
        (error) =>{
            setErrorSendForm(true);
        }
        );
    }
};

  return (
    <S.ContainerContact>
        <S.Title>👋🏻 Contact with me</S.Title>
        <S.ContainerForm>
        {sucessSendForm ? (
            <S.SucessMessage>El formulario se ha enviado correctamente</S.SucessMessage>
        ) : (            
            <S.Form onSubmit={onSubmit} ref={form}>
                <S.InputForm 
                placeholder="Your name" 
                type="text" 
                name="name" 
                onChange={(e) => setContactDates({...contactDates, name:e.target.value})}
                value={contactDates.name}
                ></S.InputForm>
                <S.InputForm 
                placeholder="Your email" 
                type="email" name="email" 
                onChange={(e) => setContactDates({...contactDates, email:e.target.value})}
                value={contactDates.email}></S.InputForm>
                <S.TextArea 
                placeholder="Write your message" 
                name="message" 
                onChange={(e) => setContactDates({...contactDates, message:e.target.value})}
                value={contactDates.message}></S.TextArea>
                <S.ContainerConditions>
                    <input type="checkbox" onChange={(e) => setContactDates({...contactDates, checkedTerms:e.target.checked})}></input>
                    <span>Accept the terms and conditions</span>
                </S.ContainerConditions>
                <S.Button type="submit">Send</S.Button>
            </S.Form>
            )}
        {emptyInputs && (
            <p>Por favor, completa todo los campos y acepta los términos y condiciones.</p>
        )}
        {errorSendForm && (
            <S.TextError>Se ha producido un error</S.TextError>
        )}
        </S.ContainerForm>
        
    </S.ContainerContact>
  );
};

export default Contact