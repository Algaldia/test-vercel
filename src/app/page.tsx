"use client"

import { useFormState } from "react-dom";

export default function Home() {

    const [data, formAction] = useFormState(recordInput, {
        name: "",
        age: "",
        email: ""
    });

  return (
    <div>
        <form action={formAction}>
            <label htmlFor="name">
                Name:
            </label>
            <input type="text" id="name" name="name"/>
            <label htmlFor="age">
                Age:
            </label>
            <input type="number" id="age" name="age"/>
            <label htmlFor="email">
                Email:
            </label>
            <input type="text" id="email" name="email"/>
            <input type="submit" />
        </form>
        {data.name && <p>Nome: {data.name}</p>}
        {data.age && <p>Idade: {data.age}</p>}
        {data.email && <p>Email: {data.email}</p>}
    </div>
  );
}

const recordInput = async (previousState: formType, formData : FormData) : Promise<formType> => {
    console.log("Previous recorded state ", previousState);
    const userName = formData.get("name");
    const age = formData.get("age")
    const email = formData.get("email")
    return {
        name: userName?.toString(),
        age: age?.toString(),
        email: email?.toString()
    };
} 

type formType = {
    name: string | undefined;
    age: string | undefined;
    email: string | undefined;
}