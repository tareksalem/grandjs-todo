
import {Server} from "grandjs";
const {View} = require("grandjs");
const TodoForm = View.importJsx("./components/TodoForm.tsx");
const ItemsList = View.importJsx("./components/ItemsList.tsx");
let Styles = View.createStyle({
    body: {
        backgroundColor: "#08103d"
    },
    cardContainer: {
        backgroundColor: "#f1f5f8",
        backgroundImage: "radial-gradient(#bfc0c1 7.2%, transparent 0)",
        backgroundSize: "25px 25px",
        width: "60%",
        height: "auto",
        overflowY: "scroll",
        margin: "5em auto",
        boxShadow: "4px 3px 7px 2px #00000040",
        padding: "10px",
        borderRadius: "10px"
    },
    heading: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1rem",
    },
    headingTitle: {
        transform: "rotate(2deg)",
        padding: "0.2rem 1.2rem",
        borderRadius: "20% 5% 20% 5%/5% 20% 25% 20%",
        backgroundColor: "rgba(0, 255, 196, 0.7)"
    },
    message: {
        padding: 5,
        textAlign: "center",
        margin: "10px auto",
        width: "95%"
    },
    errorMessage: {
        backgroundColor: "#ff0000ba",
        color: "white"
    },
    infoMessage: {
        backgroundColor: "#a9db80b3"
    },
    warningMessage:  {
        backgroundColor: "#ffa700ba",
        color: "white"
    }
})

const Body = (props:{errorMessage:string, infoMessage:string, validations:{keyName: string, message: string, currenValue:string}[], data}) => {
    const classes = Styles()
    return (
        <body className={classes.body}>
        <style src={classes.style}/>
        <style>
        @import url('https://fonts.googleapis.com/css?family=Gochi+Hand');
        </style>
        <div className={classes.cardContainer}>
            <div className={classes.heading}>
                <h1 className={classes.headingTitle}>Grandjs To-Do List App</h1>
            </div>
            {props.errorMessage ? <p className={[classes.message, classes.errorMessage].join(" ")}>{props.errorMessage}</p>: null}
            {props.infoMessage ? <p className={[classes.message, classes.infoMessage].join(" ")}>{props.infoMessage}</p>: null}
            {props.validations && props.validations.length > 0 ?
                props.validations.map((error) => {
                    return <p className={[classes.message, classes.warningMessage].join(" ")}>{error.message}</p>
                })
                :
                null
            }
            <TodoForm/>
            <ItemsList data={props.data}/>
        </div>
        </body>
    )
}


module.exports = Body;