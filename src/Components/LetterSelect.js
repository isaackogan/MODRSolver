import {Autocomplete, TextField} from "@mui/material";
import {Component} from "react";

class LetterSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "letters": ""
        };
    }

    onChangeEvent(event) {
        let value = event.target.value
            .replace(/[^a-z]/gmi, " ").replace(/\s+/g, "")
            .toUpperCase();

        value = Array.from(new Set(value.split(""))).join("")

        if (value.length > 3) {
            value = value.substring(0, 3);
        }

        this.setState({letters: value});
        document.dispatchEvent(new CustomEvent("globalStateUpdate", {detail: {letters: value}}));
    }

    render() {

        return (
            <TextField
                id="outlined-basic"
                label="Letters"
                onChange={(event) => this.onChangeEvent(event)}
                value={this.state.letters}
                variant="outlined"
            />
        )
    }

}

export default LetterSelect;
