import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import Header from "./../../components/Header/Header";
import Contact from "./../../components/Contact/Contact";

export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1517747614396-d21a78b850e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1624280157150-4d1ed8632989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1599158150601-1417ebbaafdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },

    {
      src: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhc2tldGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },

    {
      src: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFza2V0YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1556168505-d00e911d52eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGJhc2tldGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1550171362-62bca9e5ad4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxiYXNrZXRiYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1504305754058-2f08ccd89a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      src: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>SportClub - gallery</title>
      </Helmet>
      <Header title="Gallery" color="orange" />
      <Wrapper>
        <Section>
          {images.map((item, i) => {
            return <Img src={item.src} alt={item.sub} key={i} />;
          })}
        </Section>
        <Section></Section>
        <Contact color="orange" />
      </Wrapper>
    </HelmetProvider>
  );
}

const Wrapper = styled.div`
  width: 90vw;
  margin: 5vw auto;

  @media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 720px;
    margin: 2.5vw auto;
  }

  @media (min-width: 992px) {
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }

  @media (min-width: 1400px) {
    width: 1320px;
  }

  @media (min-width: 1600px) {
    width: 1540px;
  }
`;

const Section = styled.div`
  column-count: 1;

  @media (min-width: 768px) {
    column-count: 2;
    column-gap: 1.5rem;
  }

  @media (min-width: 992px) {
    column-count: 3;
  }

  @media (min-width: 1200px) {
    column-count: 4;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  margin: 0.8rem auto;
  border-radius: 4px;
`;
