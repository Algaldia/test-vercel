export default function Enviroment(){
    const name = process.env.NAME;
    return(
        <h1>Hello, {name}!</h1>
    );
}