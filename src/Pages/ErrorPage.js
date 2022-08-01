import Header from "../components/Header/Header";
import Wrapper from "../components/Wrapper/Wrapper";
import Theme from "../components/Theme/Theme.style";

function ErrorPage() {
  return (
    <Theme>
        <div className="App">
          <Wrapper>
            <Header 

            title="Oh no, a 404!"

            subtitle="Too bad"
            />
          </Wrapper>
        </div>
      </Theme>
  )
}

export default ErrorPage