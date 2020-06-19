import {Server} from "grandjs";
const {View} = require("grandjs");
import {ITodo} from "../../models/todo"

const Styles = View.createStyle({
    section: {
        width: "95%",
        margin: "auto"
    },
    title: {
        padding: "0.2rem 1.2rem",
        backgroundColor: "rgba(0, 255, 196, 0.7)",
        fontFamily: "'Gochi Hand', cursive",
        fontSize: "2rem",
    },
    listItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#7eedd42b",
        fontFamily: "'Gochi Hand', cursive",
        fontSize: "1.5rem",
    },
    list: {
        padding: 0
    },
    deleteButton: {
        cursor: "pointer",
        background: "red",
        color: "white",
        padding: "5px",
        outLine: "none",
        border: "1px solid #cecece",
        fontFamily: "'Gochi Hand', cursive",
        fontSize: "1.5rem",
        "&:hover": {
            color: "black",
            transition: ".2s all ease-in-out",
        }
    },
    itemName: {
        padding: 5
    }
})

const ItemsList = (props:{data:ITodo[]}) => {
    const classes = Styles();
    return (
        <div className={classes.section}>
            <h3 className={classes.title}>Items List</h3>
            <ul className={classes.list}>
                {props.data ? props.data.map((item) => {
                    return (
                        <li className={classes.listItem}>
                    <span className={classes.itemName}>{item.name}</span>
                    <button className={classes.deleteButton} onClick={`handleDelete('${item._id}')`}>Delete</button>
                </li>
                    )
                }) : null}
            </ul>
            <style src={classes.style}/>
            <script>
            {
                `
                    function handleDelete(id) {
                        fetch('/todo/' + id, {method: "DELETE"}).then(() => {
                            return window.location = "/"
                        }).catch(err => {
                            return window.location = "/"
                        })
                    }
                `
            }
            </script>
        </div>
    )
}


module.exports = ItemsList;