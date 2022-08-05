import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import Theme from "../components/Theme/Theme.style";
import Block from "../components/Block/Block"


//Import all the images
import Hero from "../Images/moneyfarm-2fa/00-2fa-hero.webp";
import Feedback from "../Images/moneyfarm-2fa/01-2fa-customers-feedback.webp";
import Requirements from "../Images/moneyfarm-2fa/02-2fa-requirements.webp";
import UserJourney from "../Images/moneyfarm-2fa/03-2fa-user-journey.webp";
import EnApp from "../Images/moneyfarm-2fa/04-2fa-enrolment.webp";
import EnWeb from "../Images/moneyfarm-2fa/05-2fa-enrolment-web.webp";
import LoginWeb from "../Images/moneyfarm-2fa/06-2fa-login-web.webp";
import ScanCode from "../Images/moneyfarm-2fa/07-2fa-scan-code.webp";
import SecurityBa from "../Images/moneyfarm-2fa/08-2fa-security-ba.webp";
import EnWebBa from "../Images/moneyfarm-2fa/09-2fa-enrolment-web-ba.webp";
import DisEn from "../Images/moneyfarm-2fa/10-2fa-disenrolment.webp";


function Moneyfarm() {
  return (
    <Theme>
        <div className="App">
          <Wrapper>
            <Header 
            hero="Test 2.0 A 2FA experience for Moneyfarm"
            heading1="2022・UI"
            paragraph="Paragraph" />

            <Block
            symbol="❖"
            heading1="The problem"
            paragraph="Relying solely on a regular login using email and password is a potential security risk for our customers. In addition to that, for certain customers, the perceived risk of not having two-factor authentication is very high, leading to a decrease in trust of the Moneyfarm platform and the company as a whole."
            image={Hero}
            />

            <Block
            symbol="❖"
            heading1="The goal"
            paragraph="Provide an easy to use solution for two-factor authentication login, leveraging the MultiFactor capabilities of our authentication provider Auth0."
            noImage />

            <Block
            symbol="❖"
            heading1="Gathering customer's feedbacks"
            paragraph="Potential customers were expressing their concern to our CRM team in opening an account with Moneyfarm given the lack of security functionality that is a standard in the financial domain. Current customers kept asking for this new layer of security in the app reviews." 
            image={Feedback}
            />

            <Block
            symbol="❖"
            heading1="Gathering requirements"
            paragraph="We gathered with product owners and developers to understand the scope of the project, the feasibility given by our third-party provider, and the desired outcome of the feature."
            image={Requirements}
            />

            <Block
            symbol="❖"
            heading1="Mapping the user journey"
            paragraph="I started mapping out the user journey while asking questions the various expert such as developers and product owners. The journey flow was then divided into main flows." 
            image={UserJourney}
            />

            <Block
            symbol="❖"
            heading1="The enrolment on App"
            paragraph="Enabling the second factor was possible straight from the mobile app installed on the desired device to be used as authentication."
            image={EnApp}
            />

            <Block
            symbol="❖"
            heading1="The enrolment on Web"
            paragraph="If the user would activate the two-factor from the browser the main difference with the app journey would be the scan of the QR code, necessary to pair the mobile device with the user account."
            image={EnWeb}
            />

            <Block
            symbol="❖"
            heading1="The login on web"
            paragraph="To login into the web app with a 2FA active the user needed to authorize the access on the paired device. A notification would display the attempted login and the location."
            image={LoginWeb}
            />

            <Block
            symbol="❖"
            heading1="Other options to login"
            paragraph="We considered the cases where the user could not receive a notification to login and added two additional functionalities on the mobile app."
            image={ScanCode}
            />

            <Block
            symbol="❖"
            heading1="The security screen needed some clean up"
            paragraph="With the increase of functionalities in the security screen, it became much harder for the user to easily scan and find the desired item in the list. I redesigned the screen taking in consideration layout, common used patterns and iconography."
            image={SecurityBa}
            />

            <Block
            symbol="❖"
            heading1="The app wasn't mentioned on web"
            paragraph="During the first iteration of the flow, I assumed our users had already our app installed, and that they knew it was required to enable the two-factor authentication. Well, they didn't. At the beginning of the flow, I added another step inviting the user to download the app."
            image={EnWebBa}
            />

            <Block
            symbol="❖"
            heading1="App confirmation was needed for the disenrollment"
            paragraph="If the user decided to disable the second factor, a notification would be sent to the paired device to confirm. We discovered that this was a logic coming from our third-party tool. This wasn't indeed mentioned in the modal and some of the early users were confused by that, by clicking the button nothing would really happen. I changed the illustrations, copy and removed the buttons to prompt the user to check their phone to confirm."
            image={DisEn}
            />



          </Wrapper>
        </div>
      </Theme>
  )
}

export default Moneyfarm