import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import Card from "../components/Card/Card";
import Theme from "../components/Theme/Theme.style";
import { Link } from "react-router-dom";

// Import images

import SizeSelector from "../Images/hm/size-selector.png"

function Home() {
  return (
    <Theme>
        <div className="App">
          <Wrapper>
            <Header 
            title="I'm Davide — a digital product designer creating inclusive products with empathy, research and data, matching user needs with business requirements."
            subtitle="Research and qualitatively testing? Check! Design System creation and maintaincance in Figma? Check! Results oriented strategy with stakeholders? Check!
            I worked with:"
            />
            <Link to="/hm">
                <Card 
                  title="H&#38;M"
                  image={SizeSelector} 
                />
            </Link>
            <Link to="/moneyfarm">
                <Card 
                  title="Moneyfarm"
                  image={SizeSelector} 
                />
            </Link>
            <Link to="/handy">
                <Card 
                  title="Handy"
                  image={SizeSelector} 
                />
            </Link>
          </Wrapper>
        </div>
      </Theme>
  )
}

export default Home