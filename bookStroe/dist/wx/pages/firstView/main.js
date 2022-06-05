require("../../common/manifest.js")
require("../../common/vendor.js")
require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_vue__ = __webpack_require__(113);



// 生成实例
var firstView = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index_vue__["a" /* default */]);

// 挂载当前实例对象
firstView.$mount(); // 作用等同于原生小程序的Page()

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9bde731a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(116);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(114)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9bde731a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/firstView/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9bde731a", Component.options)
  } else {
    hotAPI.reload("data-v-9bde731a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 114:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      index: 0,
      isShow: true
    };
  },

  methods: {
    handleChange: function handleChange(event) {
      console.log(event);
      if (event.mp.detail.current === 3) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
    toBooks: function toBooks() {
      console.log('xxx');
      wx.switchTab({
        url: '/pages/personal/main'
      });
    }
  }
});

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "indexContainer"
    }
  }, [_c('swiper', {
    attrs: {
      "indicator-dots": _vm.isShow,
      "indicator-color": "pink",
      "indicator-active-color": "#02a774",
      "eventid": '0'
    },
    on: {
      "change": _vm.handleChange
    }
  }, [_c('swiper-item', {
    attrs: {
      "mpcomid": '0'
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/imgs/firstView/1.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/imgs/firstView/2.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/imgs/firstView/3.jpg",
      "alt": ""
    }
  })]), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/imgs/firstView/nvsheng.jpg",
      "alt": ""
    }
  })])], 1), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isShow),
      expression: "!isShow"
    }],
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.toBooks
    }
  }, [_vm._v("开始体验")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9bde731a", esExports)
  }
}

/***/ })

},[112]);
//# sourceMappingURL=main.js.map