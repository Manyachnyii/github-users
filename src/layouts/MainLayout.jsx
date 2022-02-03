import { Container } from "reactstrap";
import Particles from "react-tsparticles";

import Header from "../Header";

import bg from "../assets/images/coming-soon.jpg";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="wrapper">
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />

        <Container>
          <div className="grid-container">
            <header>
              <Header />
            </header>
            <main className="py-3">{children}</main>
          </div>
        </Container>
      </div>

      <style jsx>{`
        .wrapper {
          background: ${`center/cover no-repeat url("${bg.src}")`};
        }

        .grid-container {
          display: grid;
          grid-template:
            [header-top] "header" [header-bottom]
            [main-top] "main" 1fr [main-bottom];
          width: 100%;
          min-height: 100vh;
        }

        header {
          grid-area: header;
        }

        main {
          grid-area: main;
          z-index: 1;
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
}
