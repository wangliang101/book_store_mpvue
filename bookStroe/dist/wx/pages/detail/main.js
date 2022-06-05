require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__detail_vue__ = __webpack_require__(108);



var detail = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__detail_vue__["a" /* default */]);

detail.$mount();

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_111eb7ca_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__(111);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(109)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_111eb7ca_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/detail/detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-111eb7ca", Component.options)
  } else {
    hotAPI.reload("data-v-111eb7ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_request__ = __webpack_require__(20);


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
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      bookItem: {}
    };
  },
  mounted: function mounted() {
    // 更新data中的bookItem的数据
    this.bookItem = JSON.parse(this.$mp.query.bookItem);
    // 更新窗口标题文字
    wx.setNavigationBarTitle({
      title: this.bookItem.title
    });
  },

  methods: {
    handleCollection: function handleCollection(bookId) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var openId, userInfo, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                openId = wx.getStorageSync('openID');
                userInfo = wx.getStorageSync(openId);

                if (!userInfo) {
                  _context.next = 10;
                  break;
                }

                // 发送请求给服务器： {openID, 图书id}
                console.log(bookId, 'ssssssssss');
                _context.next = 6;
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils_request__["a" /* default */])('/collectionBook', { openId: openId, bookId: bookId }, 'POST');

              case 6:
                result = _context.sent;

                wx.showToast({
                  title: '收藏成功'
                });
                _context.next = 11;
                break;

              case 10:
                wx.showToast({
                  title: '请先登录',
                  icon: 'none'
                });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "detailContainer"
    }
  }, [_c('p', {
    staticClass: "bookName"
  }, [_vm._v(_vm._s(_vm.bookItem.title))]), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.bookItem.image,
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bookInfo"
  }, [_c('span', [_vm._v("作者: " + _vm._s(_vm.bookItem.author))]), _vm._v(" "), _c('span', [_vm._v("出版社: " + _vm._s(_vm.bookItem.publisher))]), _vm._v(" "), _c('span', [_vm._v("出版日期: " + _vm._s(_vm.bookItem.pubdate))]), _vm._v(" "), _c('span', [_vm._v("定价: " + _vm._s(_vm.bookItem.price))])]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.handleCollection(_vm.bookItem.id)
      }
    }
  }, [_vm._v("收藏该文章")]), _vm._v(" "), _c('article', {
    staticClass: "authorInfo"
  }, [_c('h1', [_vm._v("作者简介")]), _vm._v(" "), _c('section', [_vm._v(_vm._s(_vm.bookItem.author_intro))])], 1), _vm._v(" "), _c('article', {
    staticClass: "contentInfo"
  }, [_c('h1', [_vm._v("文章简介")]), _vm._v(" "), _c('section', [_vm._v(_vm._s(_vm.bookItem.summary))])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-111eb7ca", esExports)
  }
}

/***/ })

},[107]);
//# sourceMappingURL=main.js.map