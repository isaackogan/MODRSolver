import {Component} from "react";
import {MenuItem, Select} from "@mui/material";

class SwitchSelect extends Component {

    constructor(props) {
        super(props);

    }

    getSelects(choices) {
        let items = [];
        for (let choice of choices) {
            items.push(
                <MenuItem key={Math.random()} value={choice}>{choice}</MenuItem>
            )
        }
        return items;
    }

    render() {

        return (
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                defaultValue={this.props.opts[0]}
            >
                {this.getSelects(this.props.opts)}
            </Select>
        )
    }
}

export default SwitchSelect;
