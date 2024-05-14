export default async function Localization () {

    const country = await fetch("/api/", {
        method: "GET",
    })

    return (
        <h1>Olá</h1>
    )
}