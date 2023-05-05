import axios from "axios";

export default async function handler(req, res) {

let dataResults;
    axios(`http://api.nessieisreal.com/enterprise/accounts?key=849a25883814fe37bdea249865b7c807`).then(data => {
        dataResults = data.data.results
        res.status(200).json({ dataResults });
    })


}