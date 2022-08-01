import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import Card from "../components/Card/Card";
import { P } from "../components/Typography/Typography.style"
import Theme from "../components/Theme/Theme.style";
import Block from "../components/Block/Block"
import HMImage from "../Images/Test.jpg";
import { Link } from "react-router-dom";

function Handy() {
  return (
    <Theme>
        <div className="App">
          <Wrapper>
          <Header 
            hero="Handy"
            subtitle="Paragraph" />

            <Block
            symbol="❖"
            title="The problem"
            paragraph="Most of the dictionary apps currently available on the stores are not maintained, don't work, don't offers big number of signs, and overall they provide a poor experience."
            image="HMImage" />

            <Block
            symbol="❖"
            title="The goal"
            paragraph="Design a dictionary app that solves actual problems of people who use sign language every day. Understand their need and goal, propose solutions and validate assumption with testing." />

            <Block
            symbol="❖"
            title="Interviews and survey"
            paragraph="From 5 remote interviews and 120 answers from the survey, I identified three main reasons that drive the learning of BSL." />

            <Block
            symbol="❖"
            title="Personas"
            paragraph="From the analysis of the interviews and survey, I created three personas based on their motivations and level in sign language." />

            <Block
            symbol="❖"
            title="Competitor analysis"
            paragraph="I conducted competitor analysis on other 4 sign language dictionary apps gathered from the survey that helped discover patterns and main pain points.
            " />

            <Block
            symbol="❖"
            title="User feedback on competitors"
            paragraph="User is not guided to understand what is the relevant sign.

            There is no information regarding the use of that sign in a particular area of the UK.
            
            There is no specific description of how to gesture the sign correctly.
            
            There are multiple signs for the same word
            
            Lack of customization: user cannot save signs, or organize them.
            
            User cannot upload his own signs."/>

            <Block
            symbol="❖"
            title="Interpret the findings"
            paragraph="Users from beginner to advanced, use mobile apps to support their continuous learning in sign language (SignBSL.com being one of the most popular). Mobiles apps are not an alternative to in-person courses but rather an additional tool for everyday needs. There a dozen of apps available but they offer poor experience and lack of basic customization functionalities."/>

            <Block
            symbol="❖"
            title="Prioritize"
            paragraph="From the pain point analysis from the competitor analysis and the interviews I listed a series of possible tasks to consider for the first version of the app to achieve the user’s goals."/>

            <Block
            symbol="❖"
            title="Task analysis"
            paragraph="I gathered information on goals and tasks by observing and speaking with users and produced a Hierarchical task analysis diagram. This ensured the app was designed to efficiently and appropriately support the user’s goal."/>

            <Block
            symbol="❖"
            title="Ideation"
            paragraph="Sketching out ideas of how the functionalities might work in the app, how the user would interact with them and build the first draft of information architecture so that the all the functions would be easier to find and made sense for the end-user."/>

            <Block
            symbol="❖"
            title="Wireframing and prototype"
            paragraph="The sketched main functionalities were then connected with a wireframe to get a better overview of the app’s mains domains and navigation, and later on, turned into a working prototype to be tested with real users."/>

            <Block
            symbol="❖"
            title="Defining visuals"
            paragraph="What most of the competitors were missing was a strong and distinctive brand at the support of the product. The app I was designing had to stand out from the crowd of average sign language app. It had to be friendly, reliable and welcoming."/>

            <Block
            symbol="❖"
            title="Card sorting and tree testing"
            paragraph="I tested the information architecture with an unmoderated closed card sorting test and a tree test to validate my assumptions on the navigation and discoverability of the functionalities. 
            Contrary to the assumptions, the card sorting showed that users would position their saved, grouped and uploaded sign under the profile tab. The dictionary tab has been renamed search and in it has been displayed suggested signs and collections based on the user actions and preference, along with curated content from the app."/>

            <Block
            symbol="❖"
            title="What wasn’t working, and how has been improved"
            paragraph="The prototype was then tested with real users to collect feedback on the different functionalities and the overall experience of the app. The first version of the sign screen had all the actions hidden under the ellipsis icons on the top navigation bar, therefore not easily discoverable by the user. In the improved version, all the actions have been rearranged in the layout to be more relevant and actionable in an easy and fast way. The search functionality was too basic. Users wanted to filter out the correct word by definition during the search and be able to also find public collections and other members. 'Dictionary' changed to 'Search' and the user was reminded that signs results were based also on location preference. List view gives fast access to the signs list but it can get repetitive to see multiple signs, especially if inside the same collection. The new full mode can be activated with a toggle and allow to preview any video by long pressing on the thumbnail."/>

            

          </Wrapper>
        </div>
      </Theme>
  )
}

export default Handy