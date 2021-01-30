/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz/index';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <>
      <ThemeProvider theme={dbExterno.theme}>
        <QuizScreen
          externalQuestions={dbExterno.questions}
          externalBg={dbExterno.bg}
        />
      </ThemeProvider>

      {/* <pre style={{ color: 'black' }}>
        {JSON.stringify(dbExterno.questions, null, 4)}
      </pre> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  const dbExterno = await fetch(
    `https://${projectName}.${githubUser}.vercel.app/api/db`,
  )
    .then((respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        return respostaDoServidor.json();
      }

      throw new Error('Falha em entregar os dados');
    })
    .then((respotaConvertidaEmObjeto) => respotaConvertidaEmObjeto)
    .catch(() => {});

  // console.log('dbExterno:', dbExterno);
  // console.log('Infos que o Next dá para a gente', context.query.id);

  return {
    props: { dbExterno },
  };
}
