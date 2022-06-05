require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__personal_vue__ = __webpack_require__(118);



var personal = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__personal_vue__["a" /* default */]);

personal.$mount();

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_personal_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bc0b98ac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_personal_vue__ = __webpack_require__(134);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_personal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bc0b98ac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_personal_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/personal/personal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] personal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bc0b98ac", Component.options)
  } else {
    hotAPI.reload("data-v-bc0b98ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_request__ = __webpack_require__(20);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userInfo: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    // 通过wx提供的api获取用户登录信息， 不能主动调起用户授权阶段，需要使用button
    wx.getUserInfo({
      success: function success(msg) {
        // 更新状态
        _this.userInfo = msg.userInfo;
      }
    });
  },

  methods: {
    // 用户点击button的时候会弹出授权窗口
    handleGetUserInfo: function handleGetUserInfo(info) {
      // 点击允许的时候detail中才有userInfo选项
      if (info.mp.detail.userInfo) {
        // 更新状态
        this.userInfo = info.mp.detail.userInfo;
        var openID = wx.getStorageSync('openID');
        wx.setStorage({
          key: openID,
          data: info.mp.detail.userInfo
        });
      }
    },
    toScan: function toScan() {
      wx.navigateTo({
        url: '/pages/scan/main'
      });
    },
    handleCollection: function handleCollection() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var openID, userInfo, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 查看用户是否登录
                openID = wx.getStorageSync('openID');
                userInfo = wx.getStorageSync(openID);

                if (!userInfo) {
                  _context.next = 10;
                  break;
                }

                _context.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_4__utils_request__["a" /* default */])('/getCollections', { openID: openID });

              case 5:
                result = _context.sent;

                console.log(result, typeof result === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(result));
                wx.navigateTo({
                  url: '/pages/bookList/main?booksList=' + __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(result)
                });
                _context.next = 11;
                break;

              case 10:
                wx.showToast({
                  title: '请先登录',
                  icon: "none"
                });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    }
  }
});

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "personalContainer"
    }
  }, [_c('div', {
    staticClass: "head"
  }, [_c('img', {
    attrs: {
      "src": _vm.userInfo.avatarUrl ? _vm.userInfo.avatarUrl : '/static/imgs/personal/personal.png',
      "alt": ""
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.handleGetUserInfo
    }
  }, [_vm._v(_vm._s(_vm.userInfo.nickName ? _vm.userInfo.nickName : '登录'))])], 1), _vm._v(" "), _c('div', {
    staticClass: "cardList"
  }, [_c('div', {
    staticClass: "card",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.handleCollection
    }
  }, [_c('span', [_vm._v("我的收藏")]), _vm._v(" "), _c('span', {
    staticClass: "more"
  }, [_vm._v("more >")])]), _vm._v(" "), _c('div', {
    staticClass: "card",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.toScan
    }
  }, [_c('span', [_vm._v("扫码看书")]), _vm._v(" "), _c('span', {
    staticClass: "more"
  }, [_vm._v("more >")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bc0b98ac", esExports)
  }
}

/***/ })

},[117]);
//# sourceMappingURL=main.js.map