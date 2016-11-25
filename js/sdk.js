var SDK = {

        serverURL: "http://localhost:5000/api",

        request: function (options, cb) {

            //Perform XHR
            $.ajax({
                url: SDK.serverURL + options.url,
                method: options.method,
               /* contentType: "application/json",*/
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

       /* Book: {
            getAll: function (cb) {
                SDK.request({method: "GET", url: "/book", headers: {filter: {include: ["authors", "publisher"]}}}, cb);
            },
            create: function (data, cb) {
                SDK.request({
                    method: "POST",
                    url: "/book",
                    data: data,
                    headers: {authorization: SDK.Storage.load("tokenId")}
                }, cb);
            }
        }, */

        Review: {
            getAll: function (cb) {
                SDK.request({
                    method: "GET",
                    url: "/review",
                    headers: {filter: {include: ["userId", "lectureId", "rating", "comment", "isDeleted"]}}
                }, cb);
            },
            create: function (data, cb) {
                SDK.request({
                    method: "POST",
                    url: "/review",
                    data: data,
                    headers: {authorization: SDK.Storage.load("tokenId")}
                }, cb);
            }
        },
        current: function () {
            return SDK.Storage.load("user");
        },

        Lectures: {
            getAll: function (cb) {
                SDK.request({method: "GET", url: "/course/BALJO1001U_LA_E16", headers: {}}, cb);
            },
            create: function (data, cb) {
                SDK.request({method: "POST", url: "/lecture", data: data, headers: {authorization: SDK.Storage.load("tokenId")}
                }, cb);
            }
        },


        Course: {
            getAll: function (cb) {
                SDK.request({method: "GET", url: "/course/6", headers: {}}, cb);
            },
            create: function (data, cb) {
                SDK.request({method: "POST", url: "/course", data: data, headers: {authorization: SDK.Storage.load("tokenId")}}, cb);
            }
        },


        User: {
            getAll: function (cb) {
                SDK.request({method: "GET", url: "/staffs"}, cb);
            }
            ,
            current: function () {
                return SDK.Storage.load("user");
            }
        }
        ,

       /* Publisher: {
            getAll: function (cb) {
                SDK.request({method: "GET", url: "/publishers"}, cb);
            }
        }
        ,*/

       /* Author: {
            getAll: function (cb) {
                SDK.request({method: "GET", url: "/authors"}, cb);
            }
        }
        ,*/

        logOut: function () {
            SDK.Storage.remove("tokenId");
            SDK.Storage.remove("password");
            SDK.Storage.remove("type");
        }
        ,

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

                SDK.Storage.persist("tokenId", data.id);
                SDK.Storage.persist("type", data.type);
                SDK.Storage.persist("user", data.user);

                cb(null, data);

            });

        },

        Storage: {
            prefix: "CourseStoreSDK",
            persist: function (key, value) {
                window.localStorage.setItem(this.prefix + key, (typeof value === 'object') ? JSON.stringify(value) : value)
            }

            ,
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


    }
    ;
/*function encryptDecrypt(input) {
    var key = ['A', 'B', 'C'];
    var out = "";
    for (var i = 0; i < input.length; i++) {
        out += (String.fromCharCode(((input.charAt(i)).charCodeAt(0) ^ (key[i % key.length]).charCodeAt(0))));
    }
    return out;
}*/