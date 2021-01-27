import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
// eslint-disable-next-line import/no-named-as-default
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 550px) {
    margin: auto;
    padding: 15px;
  }
`;

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
                onSubmit={function (infosDoEvento) {
                  infosDoEvento.preventDefault();

                  router.push(`/quiz?name=${name}`);

                  console.log('Sending request through React');
                  // router manda para proxima página
                }}
              >
                <input
                  onChange={function (infosDoEvento) {
                    console.log(infosDoEvento.target.value);
                    // STATE
                    // name = infosDoEvento.target.value

                    setName(infosDoEvento.target.value);
                  }}
                  placeholder="Diz aí seu nome para jogar"
                />
                <button type="submit" disabled={name.length === 0}>
                  {/*  eslint-disable-next-line react/jsx-one-expression-per-line */}
                  Jogar {name}
                </button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Header>
              <h1>Quizes da Galera</h1>
            </Widget.Header>
            <Widget.Content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Scelerisque varius morbi enim nunc. Id neque aliquam vestibulum
                morbi blandit cursus risus at ultrices. Purus in massa tempor
                nec feugiat nisl. In hac habitasse platea dictumst.
              </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GithubCorner projectUrl="https://github.com/viniciusoliveiras/imersaoreact-aluraquiz" />
      </QuizBackground>
    </>
  );
}
