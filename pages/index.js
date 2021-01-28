import React, { useState } from 'react';
// import styled from 'styled-components';
// import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
// eslint-disable-next-line import/no-named-as-default
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('RETORNO DO useState', name, useState);

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <form
                onSubmit={(infosDoEvento) => {
                  infosDoEvento.preventDefault();

                  router.push(`/quiz?name=${name}`);

                  console.log('Sending request through React');
                  // router manda para proxima página
                }}
              >
                <Input
                  name="nomeDoUsuario"
                  onChange={(infosDoEvento) => {
                    setName(infosDoEvento.target.value);
                  }}
                  placeholder="Diz aí seu nome para jogar =)"
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Jogar ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Header>
              <h1>Quizes da Galera</h1>
            </Widget.Header>
            <Widget.Content>
              <p>[ EM DESENVOLVIMENTO ]</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GithubCorner projectUrl="https://github.com/viniciusoliveiras/imersaoreact-aluraquiz" />
      </QuizBackground>
    </>
  );
}
