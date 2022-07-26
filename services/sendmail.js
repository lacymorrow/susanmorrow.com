import axios from "axios";

const handler = async(params) => {
    params = new URLSearchParams(params)
    return await axios.post('http://lacymorrow.com/clients/susanmorrow/io.php', params, {headers: "Access-Control-Allow-Origin: *"})
        .then(function(response) {
            console.log('response: ', response);
            return response
        })
        .catch((error) => {
            console.log(error);
            return false
        });
}

export default handler
