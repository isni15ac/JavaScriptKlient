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
        getAll: function (userId, cb) {
            SDK.request({method: "GET", url: "/course/" + userId, headers: {filter: {include: ["code", "displaytext"]}}}, cb);
        },
        create: function (data, cb) {
            SDK.request({method: "POST", url: "/course/", data: data, headers: {authorization: SDK.Storage.load("userId")}}, cb);
        }
    },

    Lectures: {
        getAll: function (lectureCode, cb){
            SDK.request({method: "GET", url: "/lecture/" + lectureCode, headers: {filter: {include: ["description", "start", "end", "courseId"]}}}, cb);
        },
        create: function (data, cb){
            SDK.request({method: "POST", url: "/lecture/", data: data, headers: {authorization: SDK.Storage.load("courseId")}}, cb);
        }
    },

    user: {
        getAll: function (cb) {
            SDK.request ({method: "GET", url: "/login"}, cb);
        },
        current: function () {
            return SDK.Storage.load("user");
        }
    },


    logOut: function () {
        SDK.Storage.remove("type");
        SDK.Storage.remove("userId");
        SDK.Storage.remove("user");
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

            SDK.Storage.persist("type", data.type);
            SDK.Storage.persist("userId", data.id);
            SDK.Storage.persist("user", data);

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
