// DATA: 01/08/2020

var requests1 = {
    json: require('./20200801.json'),
    result: []
};

// DATA: 25/07/2014

var requests2 = {
    json: require('./20140725.json'),
    result: []
};

getCountryCode();
function getCountryCode()
{
    console.log('PRIMEIRO PACK');
    console.log('Em andamento... aguarde!');
    var countryCodes1 = [];
    for(let i = 0; i < Object.keys(requests1['json']['objects']).length; i++)
    {
        var result = requests1['json']['objects'][i]['country_code'];
        if(!result == false)
        {
            countryCodes1.push(result);
        }
    }
    compare(countryCodes1);

    console.log('SEGUNDO PACK');
    console.log('Em andamento... aguarde!');
    var countryCodes2 = [];
    for(let i = 0; i < Object.keys(requests2['json']['objects']).length; i++)
    {
        var result = requests2['json']['objects'][i]['country_code'];
        if(!result == false)
        {
            countryCodes2.push(result);
        }
    }
    compare(countryCodes2);
}

function compare(location){
    var siglas = {
        NL: 0,
        CW: 0,
        AU: 0,
        MK: 0,
        FR: 0,
        US: 0,
        CZ: 0,
        IN: 0,
        DE: 0,
        PT: 0,
        TR: 0,
        CA: 0,
        FI: 0,
        RU: 0,
        CN: 0,
        HK: 0,
        ZA: 0,
        GR: 0,
        IE: 0,
        GB: 0,
        SE: 0,
        NO: 0,
        RO: 0,
        IT: 0,
        BE: 0,
        CH: 0,
        UA: 0,
        BR: 0,
        JP: 0,
        IR: 0,
        DK: 0,
        AE: 0,
        AT: 0,
        ES: 0,
        SK: 0,
        NA: 0,
        SG: 0,
        TW: 0,
        MY: 0,
        BH: 0,
        TJ: 0,
        VN: 0,
        BY: 0,
        IL: 0,
        BJ: 0,
        BG: 0,
        TM: 0,
        UZ: 0,
        IS: 0,
        LT: 0,
        CO: 0,
        MX: 0,
        SA: 0,
        HU: 0,
        EC: 0,
        PL: 0,
        EE: 0,
        HR: 0,
        KZ: 0,
        NZ: 0,
        AL: 0,
        BA: 0,
        SI: 0,
        RS: 0,
        BF: 0,
        RW: 0,
        CL: 0,
        GH: 0,
        NE: 0,
        UY: 0,
        TG: 0,
        PH: 0,
        MR: 0,
        CG: 0,
        TZ: 0,
        NP: 0,
        MV: 0,
        FM: 0,
        AM: 0,
        KH: 0,
        BT: 0,
        VU: 0,
        TH: 0,
        SR: 0,
        MN: 0,
        GL: 0,
        PK: 0,
        IQ: 0,
        UG: 0,
        PG: 0,
        CD: 0,
        NC: 0,
        MD: 0,
        AF: 0,
        EG: 0,
        CR: 0,
        BD: 0,
        AX: 0,
        LU: 0,
        KG: 0,
        CI: 0,
        VE: 0,
        KE: 0,
        SV: 0,
        GE: 0,
        LS: 0,
        GM: 0,
        ZM: 0,
        SN: 0,
        MW: 0,
        SC: 0,
        LV: 0,
        BZ: 0,
        KW: 0,
        LI: 0,
        TO: 0,
        AR: 0,
        MU: 0,
        DO: 0,
        GT: 0,
        NG: 0,
        ML: 0,
        KY: 0,
        FO: 0,
        GG: 0,
        MM: 0,
        MA: 0,
        ET: 0,
        LR: 0,
        ZW: 0,
        AO: 0,
        JO: 0,
        VI: 0,
        PS: 0,
        JE: 0,
        CU: 0,
        TN: 0,
        JM: 0,
        BO: 0,
        OM: 0,
        DZ: 0,
        GA: 0,
        BI: 0,
        CY: 0,
        MZ: 0,
        LB: 0,
        PE: 0,
        KM: 0,
        TD: 0,
        BW: 0,
        YE: 0,
        MG: 0,
        SZ: 0,
        AZ: 0,
        MC: 0,
        AD: 0,
        WS: 0,
        MH: 0,
        FJ: 0,
        LA: 0,
        LK: 0,
        MT: 0,
        SD: 0,
        SS: 0,
        DJ: 0,
        SO: 0,
        NI: 0,
        GF: 0,
        GP: 0,
        IM: 0,
        CM: 0,
        GD: 0,
        KR: 0,
        PY: 0,
        QA: 0,
        MQ: 0,
        RE: 0,
        BL: 0,
        ME: 0,
        TT: 0,
        PR: 0,
        GQ: 0,
        DM: 0,
        LC: 0,
        ID: 0,
        HN: 0,
        BN: 0,
        CV: 0,
        CK: 0,
        SM: 0,
        LY: 0,
        GU: 0,
        PF: 0,
        NU: 0,
        AS: 0,
        PA: 0,
        GI: 0,
        PW: 0,
        BB: 0,
        SY: 0,
        BM: 0,
        TL: 0,
        GY: 0,
        AG: 0,
        HT: 0,
        VC: 0,
        AW: 0,
        SH: 0,
        SL: 0,
        AQ: 0,
        KN: 0,
        KI: 0,
        SJ: 0,
        NR: 0,
        SX: 0,
        BQ: 0
    };

    for(let i = 0; i < location.length; i++)
    {
        siglas[location[i]]++;
    }

    console.log(siglas);
}