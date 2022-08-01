import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import {Data, DataText} from "../components/Data/Data";
import Theme from "../components/Theme/Theme.style";
import Block from "../components/Block/Block"
import Spacer from "../components/Spacer/Spacer";
import {P} from "../components/Typography/Typography.style" 

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
            title=""
            subtitle="How we increased overall convertions and dicreased size related returns by releasing different functionality aim at reducing friction during the size selectin experience." 
            />

            <Block
            symbol=""
            title="Size Selector Redesign"
            paragraph="Potential customers were expressing their concern to our CRM team in opening an account with Moneyfarm given the lack of security functionality that is a st." 
            image={SizeSelector}
            />

            <P>As results we increase Add to bag by <DataText dataText="+2.4555555%"></DataText> and <DataText dataText="+2.4555555%"></DataText> of returns.</P>

            <Block
            symbol="="
            title="Results"
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
            data1="+2.4555555%"
            label1="Add to bag"
            data2="+1.4%"
            label2="Return"
            />

            <Spacer size="120"/>

            <Block
            symbol=""
            title="Size Recommendation"
            paragraph="Potential customers were expressing their concern to our CRM team in opening an account with Moneyfarm given the lack of security functionality that is a st." 
            noImage
            />

            <Spacer size="120"/>


            <Block
            symbol=""
            title="Size Up and Down"
            paragraph="Potential customers were expressing their concern to our CRM team in opening an account with Moneyfarm given the lack of security functionality that is a st." 
            image={SizeUpDown}
            />



            <Block
            symbol="="
            title="Results"
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