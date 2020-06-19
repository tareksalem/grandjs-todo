import {Entity, method, property, settings} from "grand-model"
import {TodoInterface} from "../types/index";

@settings({})
class ETodo extends Entity implements TodoInterface{
    @property({type: String, required: true})
    name:string
}


export {ETodo};