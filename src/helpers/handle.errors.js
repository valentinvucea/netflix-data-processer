export function getErrorMessage(error) {
    let message = '';

    if (error.response) {
        // Request made and server responded
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        message = error.response.data.message;
    } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
        message = 'No response from server!';
    } else {
        // Something happened in setting up the request that triggered an Error
        message =  error.message;
    }

    return message;
}


