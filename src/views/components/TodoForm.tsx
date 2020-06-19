import {Server} from "grandjs";

const {View} = require("grandjs");

const Styles = View.createStyle({
    formGroup: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
    },
    formLabel: {
        display: "block",
        marginBottom: "0.5rem",
        width: "100%",
        textAlign: "center"
    },
    formInput: {
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "0.7rem",
        borderBottomRightRadius: "15px 3px",
        borderBottomLeftRadius: "3px 15px",
        border: "solid 3px transparent",
        borderBottom: "dashed 3px #ea95e0",
        fontFamily: "'Gochi Hand', cursive",
        fontSize: "1.5rem",
        color: "rgba(63, 62, 65, 0.7)",
        width: "80%",
        marginBottom: "20px",
    },
    formSubmitButton: {
    padding: 0,
    border: "none",
    transform: "rotate(4deg)",
    transformOrigin: "center",
    fontFamily: "'Gochi Hand', cursive",
    fontSize: "1.5rem",
    textDecoration: "none",
    paddingBottom: "3px",
    borderRadius: "5px",
    boxShadow: "0 2px 0 #494a4b",
    transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    cursor: "pointer",
    outline: "none",
    backgroundColor: "rgba(0, 255, 196, 0.7)",
    alignSelf: "center",
    height: "max-content",
    },
    formButtonSubmitText: {
        background: "#f1f5f8",
        display: "block",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        border: "2px solid #494a4b",
        "&:hover": {
            transition: ".4s all ease-in-out",
            backgroundColor: "rgba(0, 255, 196, 0.7)"
    
        }
    }
})

const TodoForm = () => {
    const classes = Styles();
    return (
        <form action="/todo" method="POST">
        <style src={classes.style}/>
                <div className={classes.formGroup}>
                    <label className={classes.formLabel}>~ Today I need to ~</label>
                    <input placeholder={"write todo name here"} className={classes.formInput} required type="text" name="name"/>
                    <button type="submit" className={classes.formSubmitButton}>
                        <span className={classes.formButtonSubmitText}>Submit</span>
                    </button>
                </div>
            </form>
    )
}

module.exports = TodoForm;