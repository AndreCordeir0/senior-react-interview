import axios from "axios";
import { Question } from "../models/question";

export async function getQuestions(numeroQuestoes:string):Promise<Question>{
    const API:string = 'https://opentdb.com/api.php';
    const QUERY_PARAM:string = '?amount=';

    return (await axios.get(`${API}/${QUERY_PARAM}${numeroQuestoes}`)).data;
}