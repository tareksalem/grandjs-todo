import {Document, model, Schema, Model} from "mongoose"
import {TodoInterface} from "../types/index";
import {ETodo} from "../entities/todo";
import { Entity } from "grand-model";

interface ITodo extends Entity, TodoInterface, Document{
    
}

const TodoSchema = new Schema({
    name: {type: String, required: true}
})



const Todo = model<ITodo>("Todo", TodoSchema);


export {Todo, ITodo, Model, ETodo, TodoInterface}



