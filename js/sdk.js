
//Skelettet af denne klasse kommer fra javascript kurset
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

    // Metode der henter kurser via userId
        Course: {
            getAll: function (cb) {
                $.ajax({
                    url: SDK.serverURL + "/course/" + SDK.Storage.load("userId"),
                    method: "GET",
                    contentType: "application/json",
                    dataType: "json",
                    success: function (data) {
                        cb(null,data)
                    }
                });

            }
        },


    // Metode der henter lektioner via code
    Lectures: {
        getAll: function (code, cb){
            SDK.request({method: "GET",
                url: "/lecture/" + code,
                headers: {filter: {include: ["data-course"]}}}, cb);
        }
    },


    logOut: function () {
        SDK.Storage.remove("type");
        SDK.Storage.remove("userId");
    },


    //Login metode
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

            SDK.Storage.persist("type", data.type);
            SDK.Storage.persist("userId", data.id);

            cb(null, data);

        });

    },

//Use localStorage to store data - you set and get items
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
