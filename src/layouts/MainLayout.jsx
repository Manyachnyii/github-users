import { Container } from "reactstrap";

import Header from "../Header";

import bg from "../assets/images/coming-soon.jpg";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="wrapper">
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
          background: center/cover no-repeat ${`url("${bg.src}")`};
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
