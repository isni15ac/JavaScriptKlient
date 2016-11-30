var SDK = {

    serverURL: "http://localhost:5000/api",

    request: function (options, cb) {

        //Perform XHR
        $.ajax({
            url: SDK.serverURL + options.url,
            method: options.method,
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(options.data),
            success: function (data, status, xhr) {
                cb(null, data, status, xhr);
            },
            error: function (xhr, status, errorThrown) {
                cb({xhr: xhr, status: status, error: errorThrown});
            }
        });
    },

    Course: {
        getAll: function (cb) {
            SDK.request({method: "GET", url: "/course/6", headers: {filter: {include: ["code", "displaytext"]}}
            }, cb);
        },
        create: function (data, cb) {
            SDK.request({method: "POST", url: "/course", data: data, headers: {authorization: SDK.Storage.load("tokenId")}}, cb);
        }
    },


    Lectures: {
        getAll: function (cb) {
            SDK.request({method: "GET", url: "/lecture/BALJO1001U_LA_E16", headers: {filter: {include: ["description", "startDate", "endDate"]}}
            }, cb);
        },
        create: function (data, cb) {
            SDK.request({method: "POST", url: "/lecture", data: data, headers: {authorization: SDK.Storage.load("tokenId")}
            }, cb);
        }
    },

    logOut: function () {
        SDK.Storage.remove("cbsMail");
        SDK.Storage.remove("password");
        SDK.Storage.remove("type");
    },

    login: function (cbsMail, password, cb) {
        console.log(cbsMail);
        console.log(password);
        this.request({
            data: {
                cbsMail: cbsMail,
                password: password
            },
            url: "/login",
            method: "POST"
        }, function (err, data) {

            //On login-error
            if (err) return cb(err);

            alert(JSON.stringify(data));

            SDK.Storage.persist("cbsMail", data.id);
            SDK.Storage.persist("type", data.type);
            SDK.Storage.persist("userId", data.userId);

            cb(null, data);

        });

    },

    Storage: {
        prefix: "CourseStoreSDK",
        persist: function (key, value) {
            window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
        },
        load: function (key) {
            var val = window.localStorage.getItem(this.prefix + key);
            try {
                return JSON.parse(val);
            }
            catch (e) {
                return val;
            }
        }
        ,
        remove: function (key) {
            window.localStorage.removeItem(this.prefix + key);
        }
    }
};



/*function encryptDecrypt(input) {
 var key = ['A', 'B', 'C'];
 var out = "";
 for (var i = 0; i < input.length; i++) {
 out += (String.fromCharCode(((input.charAt(i)).charCodeAt(0) ^ (key[i % key.length]).charCodeAt(0))));
 }
 return out;
 }*/