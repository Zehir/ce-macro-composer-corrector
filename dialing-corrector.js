const xapi = require('xapi');
const BreakException = {};

const config = {
    enableTransformList: [
        'renavisio.scopia1',
        'renavisio.codian01',
        'renavisio.codian02',
        'renavisio.codian03',
        'renavisio.codian04',
        'renavisio.codian05'
    ]
};


const transformList = {
    // Renavisio
    'renavisio.scopia1': [{
        name: "Pont Scopia SIP Salle de test",
        matchRemote: /^9999@(195\.98\.238\.109|194\.214\.202\.146|sipvisio1\.renater\.fr|mgmt\.visio\.renater\.fr)$/,
        replaceRemote: "729999@mgmt.visio.renater.fr",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Scopia SIP (avec numero salle)",
        matchRemote: /^(\d{6})@(sipvisio1\.renater\.fr|195\.98\.238\.109)$/,
        replaceRemote: "$1@mgmt.visio.renater.fr",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Scopia H323 (avec numero salle) mauvais protocole",
        matchRemote: /^(\d{6})@(mgmt\.visio\.renater\.fr|194\.214\.202\.146)$/,
        replaceRemote: "$1@mgmt.visio.renater.fr",
        matchProcol: 'SIP',
        replaceProcol: 'H323'
    }, {
        name: "Pont Scopia IP SIP direct ou DNS",
        matchRemote: /^(195\.98\.238\.109|sipvisio1\.renater\.fr(|@(.*))|mgmt\.visio\.renater\.fr(|@(.*)))$/,
        replaceRemote: "194.214.202.146",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Scopia IP direct H323 mauvais protocole",
        matchRemote: /^194\.214\.202\.146$/,
        replaceRemote: "194.214.202.146",
        matchProcol: 'SIP',
        replaceProcol: 'H323'
    }],
    'renavisio.codian01': [{
        name: "Pont Codian SIP (avec numero salle)",
        matchRemote: /^(\d{4})@(sipvisio3\.renater\.fr|195\.98\.238\.111)$/,
        replaceRemote: "$1@ccmsem01.renater.fr",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian H323 (avec numero salle) mauvais protocole",
        matchRemote: /^(\d{4})@(ccmsem01\.renater\.fr|194\.214\.202\.181)$/,
        replaceRemote: "$1@ccmsem01.renater.fr",
        matchProcol: 'SIP',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian SIP direct",
        matchRemote: /^(195\.98\.238\.111|sipvisio3\.renater\.fr(|@(.*))|ccmsem01\.renater\.fr(|@(.*)))$/,
        replaceRemote: "194.214.202.181",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian IP direct H323 mauvais protocole",
        matchRemote: /^194\.214\.202\.181$/,
        replaceRemote: "194.214.202.181",
        matchProcol: 'SIP',
        replaceProcol: 'H323'
    }],
    'renavisio.codian02': [{
        name: "Pont Codian SIP (avec numero salle)",
        matchRemote: /^(\d{4})@(sipvisio4\.renater\.fr|195\.98\.238\.112)$/,
        replaceRemote: "$1@ccmsem02.renater.fr",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian H323 (avec numero salle) mauvais protocole",
        matchRemote: /^(\d{4})@(ccmsem02\.renater\.fr|194\.214\.202\.182)$/,
        replaceRemote: "$1@ccmsem02.renater.fr",
        matchProcol: 'SIP',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian SIP direct",
        matchRemote: /^(195\.98\.238\.112|sipvisio4\.renater\.fr(|@(.*))|ccmsem02\.renater\.fr(|@(.*)))$/,
        replaceRemote: "194.214.202.182",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian IP direct H323 mauvais protocole",
        matchRemote: /^194\.214\.202\.182$/,
        replaceRemote: "194.214.202.182",
        matchProcol: 'SIP',
        replaceProcol: 'H323'
    }],
    'renavisio.codian03': [{
        name: "Pont Codian SIP (avec numero salle)",
        matchRemote: /^(\d{4})@(sipvisio5\.renater\.fr|195\.98\.238\.113)$/,
        replaceRemote: "$1@ccmsem03.renater.fr",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian H323 (avec numero salle) mauvais protocole",
        matchRemote: /^(\d{4})@(ccmsem03\.renater\.fr|194\.214\.202\.183)$/,
        replaceRemote: "$1@ccmsem03.renater.fr",
        matchProcol: 'SIP',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian SIP direct",
        matchRemote: /^(195\.98\.238\.113|sipvisio5\.renater\.fr(|@(.*))|ccmsem03\.renater\.fr(|@(.*)))$/,
        replaceRemote: "194.214.202.183",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian IP direct H323 mauvais protocole",
        matchRemote: /^194\.214\.202\.183$/,
        replaceRemote: "194.214.202.183",
        matchProcol: 'SIP',
        replaceProcol: 'H323'
    }],
    'renavisio.codian04': [{
        name: "Pont Codian SIP (avec numero salle)",
        matchRemote: /^(\d{4})@(sipvisio6\.renater\.fr|195\.98\.238\.114)$/,
        replaceRemote: "$1@ccmsem04.renater.fr",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian H323 (avec numero salle) mauvais protocole",
        matchRemote: /^(\d{4})@(ccmsem04\.renater\.fr|194\.214\.202\.184)$/,
        replaceRemote: "$1@ccmsem04.renater.fr",
        matchProcol: 'SIP',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian SIP direct",
        matchRemote: /^(195\.98\.238\.114|sipvisio6\.renater\.fr(|@(.*))|ccmsem04\.renater\.fr(|@(.*)))$/,
        replaceRemote: "194.214.202.184",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian IP direct H323 mauvais protocole",
        matchRemote: /^194\.214\.202\.184$/,
        replaceRemote: "194.214.202.184",
        matchProcol: 'SIP',
        replaceProcol: 'H323'
    }],
    'renavisio.codian05': [{
        name: "Pont Codian SIP (avec numero salle)",
        matchRemote: /^(\d{4})@(sipvisio8\.renater\.fr|195\.98\.238\.116)$/,
        replaceRemote: "$1@ccmsem05.renater.fr",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian H323 (avec numero salle) mauvais protocole",
        matchRemote: /^(\d{4})@(ccmsem05\.renater\.fr|194\.214\.202\.185)$/,
        replaceRemote: "$1@ccmsem05.renater.fr",
        matchProcol: 'SIP',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian SIP direct",
        matchRemote: /^(195\.98\.238\.116|sipvisio8\.renater\.fr(|@(.*))|ccmsem05\.renater\.fr(|@(.*)))$/,
        replaceRemote: "194.214.202.185",
        matchProcol: 'ANY',
        replaceProcol: 'H323'
    }, {
        name: "Pont Codian IP direct H323 mauvais protocole",
        matchRemote: /^194\.214\.202\.185$/,
        replaceRemote: "194.214.202.185",
        matchProcol: 'SIP',
        replaceProcol: 'H323'
    }]
};

xapi.event.on('OutgoingCallIndication', (data, event) => {
    xapi.status.get('Call ' + data.CallId + ' RemoteNumber').then((remoteNumber) => {
        xapi.status.get('Call ' + data.CallId + ' Protocol').then((protocol) => {
            var newRemote;
            var newProtocol;
            try {
                config.enableTransformList.forEach(function(provider) {
                    transformList[provider].forEach(function(transform, ruleNumber) {
                        if (transform.matchRemote.test(remoteNumber) && (transform.matchProcol === 'ANY' || transform.matchProcol === protocol)) {
                            newRemote = remoteNumber.replace(transform.matchRemote, transform.replaceRemote);
                            newProtocol = transform.replaceProcol;
                            console.log("[" + provider + " " + transform.name + "] Transformed call " + data.CallId + " from " + protocol + ":" + remoteNumber + " to " + newProtocol + ":" + newRemote);
                            remoteNumber = newRemote;
                            protocol = newProtocol;
                            throw BreakException;
                        }
                    });
                });
            } catch (e) {
                if (e !== BreakException) throw e;
            }
            if (newRemote !== undefined || newProtocol !== undefined) {
                xapi.command('Call Disconnect', {
                    CallId: data.CallId
                });
                var ret = xapi.command('Dial', {
                    Number: newRemote,
                    Protocol: newProtocol
                });
            }
        });
    });
});