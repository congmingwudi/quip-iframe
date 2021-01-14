import Styles from "./App.less";

export const DEFAULT_API_VERSION = "46.0";

export default class App extends React.Component {
    constructor(props) {
        super();
    }   

    render() {
        return <div>
            <iframe width="100%" height="600px" frameborder="0" src="https://sdo-demo-main-166ce2cf6b6-17-1762eaa676f.secure.force.com/lightningOut/FlowInQuipLightningOutPage"></iframe>
        </div>;
    }
}