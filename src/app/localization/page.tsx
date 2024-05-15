const devPath = 'http://localhost:3000/localization/api';
const vercelPath = 'https://test-vercel-eight-indol.vercel.app/localization/api'

/* async function getData() {
    "use server"
    const response = await fetch(vercelPath, {
        method: "GET"
    });
    return response.json();
} */

export default async function Localization(){

/*     fetch('http://localhost:3000/localization/api')
    .then((response) => console.log(response.json()))
 */
    //const data = await getData();

    return(
        <>
            <h1>hi</h1>
{/*                 <p>{data.country}</p>
                <p>{data.nome}</p> */}
        </>
    )

}

