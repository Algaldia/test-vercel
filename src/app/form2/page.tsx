"use client"

import { useFormState } from "react-dom";
import { onFormPostAction } from "./action";

export default function Form2(){
    const [state, action] = useFormState(onFormPostAction, {
        message: ""
    })
}