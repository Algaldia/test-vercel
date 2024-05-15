async function getData() {
    "use server"
    const response = await fetch('http://localhost:3000/localization/api', {
        method: "GET"
    });
    return response.json();
}

export default async function Localization(){

/*     fetch('http://localhost:3000/localization/api')
    .then((response) => console.log(response.json()))
 */
    const data = await getData();

    return(
        <>
            <h1>hi</h1>
            <p>{data.country}</p>
            <p>{data.nome}</p>
        </>
    )

}

