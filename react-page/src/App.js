import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import CarouselBox from "./Components/CarouselBox";
import {Col, Container,Row} from "react-bootstrap";
import logo from './Components/logo192.png'


function App() {
  return (
      <>
        <Header />
          <Container className="section_top">
              <Row>
                  <Col md="9">
                      <img
                        width={150}
                        height={150}
                        className="mr-3"
                        src={logo}
                      />
                      <h5>История появления JavaScript фреймворка React</h5>
                      <p className="text_history">
                          React — это наиболее популярный JavaScript — фреймворк на сегодняшний день, он обладает огромной базой фанатов, которая состоит, как и из профессиональных мастеров, так и новичков.
                          Данная популярность обуславливается простотой, гибкостью и распространенностью фреймворка.
                          React с легкостью может конкурировать с Vue.js, а также с Ember.js и даже с JQuery.
                          Его основной функционал заключается в упрощении работы с элементами пользовательского интерфейса, однако React на этом не заканчивается, ведь на нём уже сейчас можно создавать мобильные приложения для Android и iOS,
                          также при помощи дополнительных программ на нём можно создавать десктопные приложения.
                      </p>
                  </Col>
              </Row>
          </Container>
        <CarouselBox/>
      </>
    );
}

export default App;
