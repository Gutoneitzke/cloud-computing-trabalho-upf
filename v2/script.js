const axios = require('axios').default;

// DATA: 01/08/2020 15:30:00 - 01/08/2020 15:30:08

var requests1 = [
    // LETRA B
    [
        // IPV4
        {
            url: 'https://atlas.ripe.net/api/v2/measurements/10310/results/?start=1596295800&stop=1596295808&format=json',
            result: [],
        },
        // IPV6
        {
            url: 'https://atlas.ripe.net/api/v2/measurements/11310/results/?start=1596295800&stop=1596295808&format=json',
            result: [],
        },
    ],
    // LETRA C
    [
        // IPV4
        {
            url: 'https://atlas.ripe.net/api/v2/measurements/10311/results/?start=1596295800&stop=1596295808&format=json',
            result: []
        },
        // IPV6
        {
            url: 'https://atlas.ripe.net/api/v2/measurements/11311/results/?start=1596295800&stop=1596295808&format=json',
            result: []
        },
    ]
];

// DATA: 25/07/2014 15:30:00 - 25/07/2014 15:30:08

var requests2 = [
    // LETRA B
    [
        // IPV4
        {
            url: 'https://atlas.ripe.net/api/v2/measurements/10310/results/?start=1564068600&stop=1564068608&format=json',
            result: []
        },
        // IPV6
        {
            url: 'https://atlas.ripe.net/api/v2/measurements/11310/results/?start=1564068600&stop=1564068608&format=json',
            result: []
        },
    ],
    // LETRA C
    [
        // IPV4
        {
            url: 'https://atlas.ripe.net/api/v2/measurements/10311/results/?start=1564068600&stop=1564068608&format=json',
            result: []
        },
        // IPV6
        {
            url: '​​​​https://atlas.ripe.net/api/v2/measurements/11311/results/?start=1564068600&stop=1564068608&format=json',
            result: []
        },
    ]
];

async function getData() {
    console.log('01/08/2020 15:30:00 - 01/08/2020 15:30:08')
    await axios.get(requests1[0][0]['url'])
    .then(function (response) {
        requests1[0][0]['result'] = response.data;
        console.log('B - IPV4 = ' + requests1[0][0]['result'].length);
    });

    await axios.get(requests1[0][1]['url'])
    .then(function (response) {
        requests1[0][1]['result'] = response.data;
        console.log('B - IPV6 = ' + requests1[0][1]['result'].length);
    });
    
    await axios.get(requests1[1][0]['url'])
    .then(function (response) {
        requests1[1][0]['result'] = response.data;
        console.log('C - IPV4 = ' + requests1[1][0]['result'].length);
    });
    
    await axios.get(requests1[1][1]['url'])
    .then(function (response) {
        requests1[1][1]['result'] = response.data;
        console.log('C - IPV6 = ' + requests1[1][1]['result'].length);
    });

    console.log('25/07/2014 15:30:00 - 25/07/2014 15:30:08')
    await axios.get(requests2[0][0]['url'])
    .then(function (response) {
        requests2[0][0]['result'] = response.data;
        console.log('B - IPV4 = ' + requests2[0][0]['result'].length);
    });

    await axios.get(requests2[0][1]['url'])
    .then(function (response) {
        requests2[0][1]['result'] = response.data;
        console.log('B - IPV6 = ' + requests2[0][1]['result'].length);
    });
    
    await axios.get(requests2[1][0]['url'])
    .then(function (response) {
        requests2[1][0]['result'] = response.data;
        console.log('C - IPV4 = ' + requests2[1][0]['result'].length);
    });
    
    const urlbug = "https://atlas.ripe.net/api/v2/measurements/11311/results/?start=1564068600&stop=1564068608&format=json";
    
    await axios.get(urlbug)
    .then(function (response) {
        requests2[1][1]['result'] = response.data;
        console.log('C - IPV6 = ' + requests2[1][1]['result'].length);
    });

    return true;
}

getData()
    .then((x) => {
            x ? getNames() : ''
        }
    );

function getNames(){
    console.log('PRIMEIRO PACK');
    for(let g = 0; g < 2; g++)
    {
        for(let j = 0; j < 2; j++)
        {
            var result = requests1[g][j]['result'];
            compareProbes1(g,j,result);
        }
    }
    console.log('-------------');
    console.log('SEGUNDO PACK');
    for(let g = 0; g < 2; g++)
    {
        for(let j = 0; j < 2; j++)
        {
            var prbIds = requests2[g][j]['result'];
            compareProbes2(g,j,prbIds);
        }
    }
    console.log('-------------');
}

function compareProbes1(g,j,data){
    var bipv4 = [];
    var cipv4 = [];
    var bipv6 = [];
    var cipv6 = [];
    var request1 = require('./20200801.json');
    for(let i = 0; i < data.length; i++)
    {
        var result = request1['objects'].find(x => x.id == data[i]['prb_id']);
        if(result)
        {
            if(g == 0 && j == 0)
            {
                bipv4.push({json: result,data: data[i]});
            }
            else if((g == 0 && j == 1))
            {
                bipv6.push({json: result,data: data[i]});
            }
            else if((g == 1 && j == 0))
            {
                cipv4.push({json: result,data: data[i]});
            }
            else if((g == 1 && j == 1))
            {
                cipv6.push({json: result,data: data[i]});
            }
        }
    }
    if(bipv4.length > 0)
    {
        compare(bipv4);
    }
    if(bipv6.length > 0)
    {
        compare(bipv6);
    }
    if(cipv4.length > 0)
    {
        compare(cipv4);
    }
    if(cipv6.length > 0)
    {
        compare(cipv6);
    }
}

function compareProbes2(g,j,data){
    var bipv4 = [];
    var cipv4 = [];
    var bipv6 = [];
    var cipv6 = [];
    var request2 = require('./20140725.json');
    for(let i = 0; i < data.length; i++)
    {
        var result = request2['objects'].find(x => x.id == data[i]['prb_id']);
        if(result)
        {
            if(g == 0 && j == 0)
            {
                bipv4.push({json: result,data: data[i]});
            }
            else if((g == 0 && j == 1))
            {
                bipv6.push({json: result,data: data[i]});
            }
            else if((g == 1 && j == 0))
            {
                cipv4.push({json: result,data: data[i]});
            }
            else if((g == 1 && j == 1))
            {
                cipv6.push({json: result,data: data[i]});
            }
        }
    }
    if(bipv4.length > 0)
    {
        compare(bipv4);
    }
    if(bipv6.length > 0)
    {
        compare(bipv6);
    }
    if(cipv4.length > 0)
    {
        compare(cipv4);
    }
    if(cipv6.length > 0)
    {
        compare(cipv6);
    }
}

function compare(data){
    // aqui está comparando se o FROM da resposta da request é igual ao address_v4 ou address_v6 do JSON
    var qtdNoMesmoPais = 0;
    var qtdEmPaisesDiferentes = 0;
    var qtdIpv4 = 0;
    var qtdIpv6 = 0;
    for(let i = 0; i < data.length; i++)
    {
        if(data[i].data['from'] == data[i].json['address_v4'] || data[i].data['from'] == data[i].json['address_v6'])
        {
            // chamadas para o mesmo pais
            qtdNoMesmoPais++;

            // verifica se tem endereco ipv4
            if(data[i].json['address_v4'])
            {
                qtdIpv4++;
            }

            // verifica se tem endereco ipv6
            if(data[i].json['address_v6'])
            {
                qtdIpv6++;
            }
        }
        else
        {
            // chamadas para paises diferentes
            qtdEmPaisesDiferentes++;
        }
    }
    console.log('**********');
    console.log('Resposta 1 -> ',qtdNoMesmoPais);
    console.log('Resposta 2 -> ',qtdEmPaisesDiferentes);
    console.log('Resposta IPV4 -> ',qtdIpv4);
    console.log('Resposta IPV6 -> ',qtdIpv6);
}
