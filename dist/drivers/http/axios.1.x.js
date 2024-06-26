/*!
 * @websanova/vue-auth v3.2.1-beta
 * https://websanova.com/docs/vue-auth
 * Released under the MIT License.
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.VueAuth = factory());
}(this, (function () { 'use strict';

    var axios_1_x = {
      init: function () {
        if (!this.Vue.axios) {
          return 'axios.js : Vue.axios must be set.';
        }
      },
      interceptor: function (req, res) {
        var _this = this;
        if (req) {
          this.Vue.axios.interceptors.request.use(function (request) {
            req.call(_this, request);
            return request;
          }, function (error) {
            req.call(_this, error.request);
            return Promise.reject(error);
          });
        }
        if (res) {
          this.Vue.axios.interceptors.response.use(function (response) {
            res.call(_this, response);
            return response;
          }, function (error) {
            if (error && error.response) {
              res.call(_this, error.response);
            }
            return Promise.reject(error);
          });
        }
      },
      invalidToken: function (res) {
        if (res.status === 401) {
          return true;
        }
      },
      httpData: function (res) {
        return res.data || {};
      },
      http: function (data) {
        var http = this.Vue.axios(data);
        http.then(data.success, data.error);
        return http;
      },
      getHeaders: function (res) {
        return res.headers;
      },
      setHeaders: function (req, headers) {
        req.headers.common = Object.assign({}, req.headers.common, headers);
      }
    };

    return axios_1_x;

})));
