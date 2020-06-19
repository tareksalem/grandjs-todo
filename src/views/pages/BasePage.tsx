const {View} = require("grandjs/lib");
import {Server, validation} from "grandjs";
const Header = View.importJsx("./components/Header.tsx");
const Body = View.importJsx("./components/Body.tsx");

var BasePage = (props: {errorMessage:string, infoMessage: string, validations, data}) => {
    return (
        <html lang="en">
            <Header/>
            <Body errorMessage={props.errorMessage} infoMessage={props.infoMessage} validations={props.validations} data={props.data}/>
        </html>
    )
}


module.exports = BasePage;