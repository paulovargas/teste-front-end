// pages/index.tsx
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Nav from "../Nav";
import Header from "../Header";
import { useRouter } from "next/router";
import Main from "../Main";
import FormContainer from "../styles/agendarConsulta/FormContainer";
import { useForm, SubmitHandler } from "react-hook-form";
import Form from "../styles/agendarConsulta/Form";
import Input from "../styles/agendarConsulta/Input";
import Label from "../styles/agendarConsulta/Label";
import FormBottom from "../styles/agendarConsulta/FormBottom";
import FormTitle from "../styles/agendarConsulta/FormTitle";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const FormAgendarConsulta: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div>
      <FormTitle>
        <h1>Preencha o formulário abaixo para agendar sua consulta</h1>
      </FormTitle>
      <FormContainer>
        <Label>Nome</Label>
        <Input>
          <input defaultValue="Digite o seu nome" {...register("example")} />
          <input {...register("exampleRequired", { required: true })} />
        </Input>
        <Label>Sobrenome</Label>
        <Input>
          <input defaultValue="Digite o seu nome" {...register("example")} />
          <input {...register("exampleRequired", { required: true })} />
          <FormBottom>
            <input type="submit" />
          </FormBottom>
        </Input>

        {/* <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input>
            <input defaultValue="Digite o seu nome" {...register("example")} />
            <input {...register("exampleRequired", { required: true })} />
            <input type="submit" />
          </Input>
          {/* errors will return when field validation fails  
        </Form> */}
      </FormContainer>
    </div>
  );
};

export default FormAgendarConsulta;
