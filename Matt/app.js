const key = 'cxyhnll5ScFfHdAHD2pKJ0hAOREZIlaSFRx6MnajQy35qxKJVn';

const secret = 'O4kyEkoJkbFd5OfhhPaYja1c8GHtSPyI9W1eCyBc';

async function getToken() {
    let parm = new URLSearchParams();

    parm.append("grant_type", "client_credentials")
    parm.append("client_id", key);
    parm.append("client_secret",secret)

    const petToken = await fetch(
        'https://api.petfinder.com/v2/oauth2/token',
        {
            method: 'POST',
            body: parm
        }
    )

    let obj = await petToken.json();


    console.log(obj);
     sendData(obj)
}
async function sendData(data) {
    console.log(data.access_token);

    const resp = await fetch(
        'https://api.petfinder.com/v2/animals',
        {
            headers: {
                Authorization: `Bearer ${data.access_token}`,
                Accept: '*/*'
            }
        });
    

    const respData = await resp.json();

    if (respData == null) {

      console.log('retrieving data')
      return sendData(respData)

    } 
    else {

      console.log('success')
      console.log(respData)
      return respData;

    }
    
}


getToken();