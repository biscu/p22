import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import {Data, DataText} from "../components/Data/Data";
import Theme from "../components/Theme/Theme.style";
import Block from "../components/Block/Block"
import Spacer from "../components/Spacer/Spacer";
import {Paragraph, Heading1, Heading2} from "../components/Typography/Typography.style"
import Bullet from "../components/Bullet/Bullet";

//import all images
import SizeSelector from "../Images/hm/size-selector.png"
import SizeUpDown from "../Images/hm/size-up-down.png"

function Hm() {
  return (
    <Theme>
        <div className="App">
          <Wrapper>
            <Header 
            hero="HM Product Details Page"
            heading1=""
            paragraph="How we increased overall convertions and dicreased size related returns by releasing different functionality aim at reducing friction during the size selectin experience." 
            />

            <Block
            symbol=""
            heading1="Size Selector Redesign"
            paragraph="The new size selection experience, a broken out selector in the product page replaced the old dropdown that had several pain points" 
            image={SizeSelector}
            />

            <Heading1> What was the problem → How we fixed it </Heading1>
            <Heading2> Header 2 </Heading2>

            <Paragraph>Data from our analytycs reports and usabiiy testing highlighted the following issue with the old size selector: </Paragraph>

            <Bullet text="Visibility of size availability → Moved the selector in the product page"/>
            <Bullet text="Size guide was hard to find, customer expected it to find on the page → With the selector then moved into the page we positioned the sie guide link where  customer where expecti it to find."/>
            <Bullet text="Additional messages, informaion banner and labels were cluttering the selectors"/>
            <Bullet text="The sticky size selector was contexually wrong compared to others selectors"/>

            <Heading1> Qualitatively and quantitavely results </Heading1>

            <Paragraph>We increase Add to bag by <DataText dataText="+1,12%"></DataText> and Conversion Rate in Purchase of <DataText dataText="+2,36%"></DataText></Paragraph>
    
            <Spacer size="120"/>

            <Block
            symbol=""
            heading1="Size Recommendation"
            paragraph="Potential customers were expressing their concern to our CRM team in opening an account with Moneyfarm given the lack of security functionality that is a st." 
            noImage
            />

            <Spacer size="120"/>


            <Block
            symbol=""
            heading1="Size Up and Down"
            paragraph="Potential customers were expressing their concern to our CRM team in opening an account with Moneyfarm given the lack of security functionality that is a st." 
            image={SizeUpDown}
            />



            <Block
            symbol="="
            heading1="Results"
            paragraph="Resulst summary" 
            noImage
            />
            <Data
            data1="+2.4555555%"
            label1="Add to bag"
            data2="+1.4%"
            label2="Return"
            />
            <Data
            data1="+2.4%"
            label1="Add to bag"
            data2="+1.4%"
            label2="Return"
            />
          </Wrapper>
        </div>
      </Theme>
  )
}

export default Hm