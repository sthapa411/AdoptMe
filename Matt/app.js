const key = 'cxyhnll5ScFfHdAHD2pKJ0hAOREZIlaSFRx6MnajQy35qxKJVn';

const secret = 'O4kyEkoJkbFd5OfhhPaYja1c8GHtSPyI9W1eCyBc';

var image;

var x = 0;


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

    $("#searchBtn").click(async () => {
        event.preventDefault();

        $("#cards").empty();

        let zipCode = $("#zip").val();
        let type = $("#animalType").val();

        console.log(zipCode + " " + type)


    const resp = await fetch(
        `https://api.petfinder.com/v2/animals?type=${type}&location=${zipCode}`,
        {
            headers: {
                Authorization: `Bearer ${data.access_token}`,
                Accept: '*/*'
            }
        });
    

    const respData = await resp.json();
    renderCard(respData);

    if (respData == null) {

      console.log('retrieving data')
      return sendData(respData)

    } 
    else {

      console.log('success')
      //console.log(respData)
      return respData;

    }
;    });

}

function renderCard(info) {
    console.log(info);

    for(let i in info.animals){
        console.log(info.animals[i].name);

        if(info.animals[i].photos.length != 0) {
            image = info.animals[i].photos[0].full;
        }
        
        $("#cards").append(
            `
            <div>
                <div class="col s6 m6">
                    <div class="card">
                        <div class="card-image">
                            <img id="img${i}" src="${image}" alt="pet">
                        </div>
                        <div class="card-content">
                            <p id="dist${i}">${info.animals[i].name}      ${info.animals[i].distance} Miles away</p>
                            <a id= "fav${i}" class="btn-floating right waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                        <div class="card-action">
                             <a id= "url${i}" href="${info.animals[i].url}">More info</a>
                        </div>
                    </div>
                </div>
            </div>
        `
        );
       x++;
    }
    
    saveData(x);
}

function saveData(count) {

    for(let i = 0; i < count; i++) {
        $("#fav"+i).click(() => {

            $("#cards").append(" <h1> test </h1>");
        
            let fav = [{
                distance: $("#dist" + i).text(),
                image: $("#img" + i).attr("src"),
                url: $("#url" + i).attr("href")
            }]

            console.log(fav);
        });
    }

}



getToken();