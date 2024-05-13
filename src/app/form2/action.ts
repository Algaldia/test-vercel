"use server"

type FormState = {
    message: string;
}

export async function onFormPostAction(prevState : FormState, data : FormData) {
    return {
        message: "form data processed"
    }
}