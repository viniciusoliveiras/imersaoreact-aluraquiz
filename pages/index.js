import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";
import GithubCorner from "../src/components/GithubCorner";
import QuizBackground from "../src/components/QuizBackground";
import Head from "next/head";

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// `;

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
  return (
    <>
      <Head>
        {/*  Primary Meta Tags  */}
        <title>Vini Quiz</title>
        <meta name="title" content={db.title} />
        <meta
          name="description"
          content={db.description}
        />

        {/*  Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://imersaoreact-aluraquiz.viniciusoliveiras.vercel.app/"
        />
        <meta property="og:title" content="Vini Quiz" />
        <meta
          property="og:description"
          content={db.description}
        />
        <meta property="og:image" content={db.bg} />

        {/*  Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://imersaoreact-aluraquiz.viniciusoliveiras.vercel.app/"
        />
        <meta property="twitter:title" content={db.title} />
        <meta
          property="twitter:description"
          content={db.description}
        />
        <meta property="twitter:image" content={db.bg} />
      </Head>

      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
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
        <GithubCorner projectUrl="https://github.com/viniciusoliveiras" />
      </QuizBackground>
    </>
  );
}
