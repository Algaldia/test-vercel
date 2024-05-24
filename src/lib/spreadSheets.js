"use server"

import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

function connectingToGoogle() {
    const private_key = process.env.PRIVATE_KEY;
    const client_email = process.env.CLIENT_EMAIL;
    const sheetID = process.env.SHEET_ID;

    const SCOPES = [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive.file',
    ];
    try{
        const jwt = new JWT({
            email: client_email,
            key: private_key,
            scopes: SCOPES,
        });
        const doc = new GoogleSpreadsheet(sheetID, jwt);
        return doc;
    }catch(error){
        return error
    }
}

export async function exportingData(){
    const doc = connectingToGoogle();
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    sheet.setHeaderRow(["name", "age"]);
    const tranferArray = [{
        name: "Diego",
        age: "35"
    },{
        name: "Jomar",
        age: "60"
    }]
    sheet.addRows(tranferArray);
}

/* export async function exportingData(){
    const doc = connectingToGoogle();
    const run = async() => {
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        sheet.setHeaderRow(["id", "name", "src", "developer", "pt-released", "pt-description", "pt-genres", "en-released", "en-description", "en-genres", "es-released", "es-description", "es-genres", "thumb", "horizontalFullscreen"]);
        const tranferArray = []
        gameData.map((value) => {
            tranferArray.push({
                id: value.id,
                name: value.name,
                src: value.src,
                developer: value.developer,
                "pt-released": value.pt.released,
                "pt-description": value.pt.description,
                "pt-genres": value.pt.genres.join(","),
                "en-released": value.en.released,
                "en-description": value.en.description,
                "en-genres": value.en.genres.join(","), 
                "es-released": value.es.released, 
                "es-description": value.es.description, 
                "es-genres": value.es.genres.join(","), 
                "thumb": value.thumb, 
                "horizontalFullscreen": value.horizontalFullscreen
            })
        });
        sheet.addRows(tranferArray);
    }
    run() 
} */

export async function retreavingData() {
    let response = [];
    const doc = connectingToGoogle();
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0];
    (await sheet.getRows()).map((value) => {
        response.push(value.toObject())
    })
    return response;
/*     (await sheet.getRows({offset: ((value - 1)* 3) , limit: 3})).map((value) => {
        response.push((value.toObject()))
    });
    response.map((value) => {
        response2.push({
            id: value.id,
            en: value.english,
            pt: value.portuguese,
            es: value.spanish
        })
    })
    return response2; */
}