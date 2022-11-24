import styled from "styled-components";
import SwitchSelect from "./Components/SwitchSelect";
import LetterSelect from "./Components/LetterSelect";
import {Component} from "react";
import {Button} from "@mui/material";

const ClaimBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClaimRow = styled.div`

`;

class App extends Component {

    SET1 = {
        "All": true,
        "Some": false
    }

    SET2 = {
        "Are": true,
        "Not": false
    }

    constructor(props) {
        super(props);
        this.state = {
            letters: ""
        }
    }

    componentDidMount() {
        document.addEventListener("globalStateUpdate", (event) => {
            if (event?.detail?.letters) {
                this.setState({letters: event.detail.letters});
            }
        })
    }

    render() {
        let letters = this.state.letters.split("");
        let set1 = Object.keys(this.SET1);
        let set2 = Object.keys(this.SET2);

        return (
            <div>
                <ClaimBox>
                    <LetterSelect />
                </ClaimBox>
                <ClaimBox>
                    <ClaimRow><SwitchSelect opts={set1} /> <SwitchSelect opts={letters}/> <SwitchSelect opts={set2} /> <SwitchSelect opts={letters}/></ClaimRow>
                    <ClaimRow><SwitchSelect opts={set1} /> <SwitchSelect opts={letters}/> <SwitchSelect opts={set2} /> <SwitchSelect opts={letters}/></ClaimRow>
                    <ClaimRow><SwitchSelect opts={set1} /> <SwitchSelect opts={letters}/> <SwitchSelect opts={set2} /> <SwitchSelect opts={letters}/></ClaimRow>
                </ClaimBox>
                <Button variant="contained">Check Argument</Button>

            </div>
        );

    }
}

export default App;
