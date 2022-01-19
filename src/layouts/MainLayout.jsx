import { Container } from "reactstrap";
import Particles from "react-tsparticles";

import Header from "../Header";

import bg from "../assets/images/coming-soon.jpg";

export default function MainLayout({ children }) {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div className="wrapper">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
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
            <main>{children}</main>
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
        }
      `}</style>
    </>
  );
}
