import axios from "axios";

const handler = async(params) => {
    params = new URLSearchParams(params)
    return await axios.post('/io.php', params)
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
