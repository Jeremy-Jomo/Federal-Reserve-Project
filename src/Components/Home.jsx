import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://www.fbi.gov/image-repository/jttfjacket.jpg/@@images/image/high" alt="" />
        <Carousel.Caption>
          <h3>Terrorism</h3>
          <p>Violent, criminal acts committed by individuals and/or groups who are inspired by, or associated with, designated foreign terrorist organizations or nations (state-sponsored) </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.fbi.gov/image-repository/cyber-agent.jpeg/@@images/image/high" alt="" />
        <Carousel.Caption>
          <h3>Cyber Crime</h3>
          <p>The FBI is the lead federal agency for investigating cyberattacks by criminals, overseas adversaries, and terrorists.The threat is incredibly serious-and growing.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.fbi.gov/image-repository/suspect-arrest.jpg/@@images/image/high" alt="" />
        <Carousel.Caption>
          <h3>Violent Crime</h3>
          <p>
            The FBI's top priorities are national security threats, but the Bureau continues to play a key role in combating violent crime in large municipalities and local communities across the United States.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
        <img src="https://www.fbi.gov/investigate/counterintelligence/@@images/image/large" alt="" />
        <Carousel.Caption>
          <h3>CounterInteliigence</h3>
          <p>
            The FBI is the lead agency for exposing, preventing, and investigating intelligence activities in the U.S. Because much of today's spying is accomplished by data theft from computer networks, espionage is quickly becoming cyber-based.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
        <img src="https://t4.ftcdn.net/jpg/04/42/33/85/360_F_442338521_1QVCN2ZLgh0Ouzd8VtqzrE48AotKDICv.jpg" alt="" />
        <Carousel.Caption>
          <h3>White-Collar Crimes</h3>
          <p>
            These crimes are not violent, but they are not victimless. White-collar crimes can destroy a company, wipe out a person's life savings, cost investors billions of dollars, and erode the public's trust in institutions.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
        <img src="https://www.shutterstock.com/image-photo/shaking-hands-bribery-female-asia-600nw-2290851869.jpg" alt="" />
        <Carousel.Caption>
          <h3>Public Corruption</h3>
          <p>
            Public corruption is the FBI’s top criminal investigative priority, that includes border corruption, election crimes, international corruption and prison corruption.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
