import * as React from "react";
import "./../assets/scss/App.scss";

const toofy1 = require("./../assets/img/Toofy1.png");
const toofy2 = require("./../assets/img/Toofy2.png");

export interface AppProps {
}

export default class App extends React.Component<AppProps, undefined> {
    render() {
        return (
            <div className="app">
                <span className="toofusText">Toofus</span>
                <div id="fancyText">
                    {Array(26).fill(1).map((el, i) =>
                        <span className="text">Meow!</span>
                    )}
                </div>
                <img className="toofus1" src={toofy1}/>
                <span className="toofusText2">Hims a lazy boi</span>
                <img className="toofus2" src={toofy2}/>
            </div>
        );
    }
}
