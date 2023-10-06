import axios from "axios";

const handler = async(params) => {
    params = new URLSearchParams(params)
	console.log(`Sending email from ${params?.email}`)
    return await axios.post('https://phpstack-1011481-3573429.cloudwaysapps.com/susan-io.php', params, function (req, res) {

        })
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
