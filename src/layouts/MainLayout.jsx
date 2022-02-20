import { Container, Row } from "reactstrap";

import Header from "../components/Header";

export default function MainLayout({ children }) {
  return (
    <Container>
      <Row>
        <div className="grid-container">
          <header>
            <Header />
          </header>
          <main>{children}</main>
        </div>
      </Row>

      <style jsx>{`
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
        }
      `}</style>
    </Container>
  );
}
