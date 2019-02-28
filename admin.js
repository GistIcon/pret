path: _github-challenge-GistIcon/tmp/cache/.io 
;
(function (AJS, $, window, document, undefined) {
    "use strict";

    var url = AJS.contextPath() + "/rest/bugreplay-integration/1.0/admin";

    $(document).ready(function () {
        $("#bugreplay-create").on('click', function (e) {
            e.preventDefault();
            execute('POST');
        });
        $("#bugreplay-delete").on('click', function (e) {
            e.preventDefault();
            execute('DELETE');
        });
        execute('GET');
    });

    function execute(method){
        $.ajax({
            url: url,
            type: method,
            contentType: "application/json"
        }).done(function (data) {
            processResponse(data);
        });
    }

    function processResponse(data){
        if(data.configured){
            AJS.messages.success({
                title: AJS.I18n.getText('bugreplay.admin.msg.success.title'),
                body: AJS.I18n.getText('bugreplay.admin.msg.success.text')
            });
        }else{
            AJS.messages.warning({
                title: AJS.I18n.getText('bugreplay.admin.msg.warn.title'),
                body: AJS.I18n.getText('bugreplay.admin.msg.warn.text')
            });
        }
    }

}(AJS, AJS.$ || jQuery, window, document));

function updateConfig() {
    var toPost = {
        "id": null, "name": "BugReplay",
        "rpcUrl": "https://app.bugreplay.com",
        "displayUrl": "https://app.bugreplay.com", "typeId": "generic"
    };

    AJS.$.ajax({
                   url: AJS.params.baseURL + "/rest/applinks/latest/applicationlink",
                   type: "PUT",
                   contentType: "application/json",
                   data: JSON.stringify(toPost),
                   processData: false
               }).done(function (msg) {
        var res = msg.documentElement.childNodes[1].childNodes[0].getAttribute("href");
        var split = res.split("/");
        var id = split[split.length - 1];
        var secondPayload = {
            "key": "BugReplay",
            "name": "BugReplay",
            "description": null,
            "sharedSecret": null,
            "publicKey": "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCz15v48bathGyDtJYoXF3exSZhJfrjsfPc5yw8NgEuyWtCQzQr2+FV+cERjMRrmQA6vcAEixN1CNrHpjSHLgFLxo9iXe7dIKWAjRY3fH+IhgEdsceIe7yMRPuIeB/7I9HnGqZpc8aN/VgN1g6aouNLi35dDdjSjLqqhYrzgnjDEQIDAQAB ",
            "outgoing": false,
            "twoLOAllowed": false,
            "executingTwoLOUser": null,
            "twoLOImpersonationAllowed": null
        };
        AJS.$.ajax({
                       url: AJS.params.baseURL + "/rest/applinks-oauth/1.0/applicationlink/" + id
                            + "/authentication/consumer",
                       type: "PUT",
                       contentType: "application/json",
                       data: JSON.stringify(secondPayload),
                       processData: false
                   }).done(function (msg) {
            window.alert("Done");
        });
    });

}
