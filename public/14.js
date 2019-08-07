(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trend/Trend.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/trend/Trend.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pos1: 0
    };
  },
  created: function created() {
    console.log('trend list loaded');
  },
  mounted: function mounted() {},
  computed: {
    topTen: function topTen() {
      return this.$store.getters.topTen;
    }
  },
  methods: {
    loadMore: function loadMore(e) {
      this.$store.commit('hideBottomNav');
      var elHeight = e.target.clientHeight;
      var elscrollHeight = e.target.scrollHeight;
      var elScrollTop = e.target.scrollTop;

      if (elHeight + elScrollTop - elscrollHeight == 0) {
        this.$store.commit('hideBottomNav');
      } else {
        this.$store.commit('showBottomNav');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trend/Trend.vue?vue&type=style&index=0&id=65fe7410&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/trend/Trend.vue?vue&type=style&index=0&id=65fe7410&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.trend-phone[data-v-65fe7410]{\n  position: absolute;\n  width:100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: scroll;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trend/Trend.vue?vue&type=style&index=0&id=65fe7410&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/trend/Trend.vue?vue&type=style&index=0&id=65fe7410&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Trend.vue?vue&type=style&index=0&id=65fe7410&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trend/Trend.vue?vue&type=style&index=0&id=65fe7410&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trend/Trend.vue?vue&type=template&id=65fe7410&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/trend/Trend.vue?vue&type=template&id=65fe7410&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {},
    [
      _c("h1", { staticClass: "text-xs-center hidden-md-and-up white--text" }, [
        _vm._v(_vm._s(_vm.$t("trend")))
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "trend-phone hidden-sm-and-up",
          on: { scroll: _vm.loadMore }
        },
        [
          _c(
            "v-list",
            { attrs: { "two-line": "", subheader: "", dark: "" } },
            [
              _c("v-subheader", [_vm._v(_vm._s(_vm.$t("trend")))]),
              _vm._v(" "),
              _vm._l(_vm.topTen, function(value, key) {
                return [
                  _c(
                    "v-list-tile",
                    {
                      key: key,
                      attrs: {
                        router: "",
                        to: { name: "trend", query: { trend: key } }
                      }
                    },
                    [
                      _c(
                        "v-list-tile-content",
                        [
                          _c("v-list-tile-title", [
                            _c("bdi", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(key) +
                                  "\n              "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("v-list-tile-sub-title", [
                            _c("bdi", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm._f("numeral")(value, "0a")) +
                                  " posts\n            "
                              )
                            ])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider")
                ]
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list",
        {
          staticClass: "hidden-xs-only",
          attrs: { "two-line": "", subheader: "", dark: "" }
        },
        [
          _c("v-subheader", [_vm._v(_vm._s(_vm.$t("trend")))]),
          _vm._v(" "),
          _vm._l(_vm.topTen, function(value, key) {
            return [
              _c(
                "v-list-tile",
                {
                  key: key,
                  attrs: { to: { name: "trend", query: { trend: key } } }
                },
                [
                  _c(
                    "v-list-tile-content",
                    [
                      _c("v-list-tile-title", [
                        _c("bdi", [
                          _vm._v(
                            "\n              " +
                              _vm._s(key) +
                              "\n              "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("v-list-tile-sub-title", [
                        _c("bdi", [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm._f("numeral")(value, "0a")) +
                              " posts\n\n            "
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider")
            ]
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/trend/Trend.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/trend/Trend.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Trend_vue_vue_type_template_id_65fe7410_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trend.vue?vue&type=template&id=65fe7410&scoped=true& */ "./resources/js/components/trend/Trend.vue?vue&type=template&id=65fe7410&scoped=true&");
/* harmony import */ var _Trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trend.vue?vue&type=script&lang=js& */ "./resources/js/components/trend/Trend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Trend_vue_vue_type_style_index_0_id_65fe7410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trend.vue?vue&type=style&index=0&id=65fe7410&scoped=true&lang=css& */ "./resources/js/components/trend/Trend.vue?vue&type=style&index=0&id=65fe7410&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Trend_vue_vue_type_template_id_65fe7410_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Trend_vue_vue_type_template_id_65fe7410_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "65fe7410",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/trend/Trend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/trend/Trend.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/trend/Trend.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Trend.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trend/Trend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/trend/Trend.vue?vue&type=style&index=0&id=65fe7410&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/trend/Trend.vue?vue&type=style&index=0&id=65fe7410&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trend_vue_vue_type_style_index_0_id_65fe7410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Trend.vue?vue&type=style&index=0&id=65fe7410&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trend/Trend.vue?vue&type=style&index=0&id=65fe7410&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trend_vue_vue_type_style_index_0_id_65fe7410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trend_vue_vue_type_style_index_0_id_65fe7410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trend_vue_vue_type_style_index_0_id_65fe7410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trend_vue_vue_type_style_index_0_id_65fe7410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Trend_vue_vue_type_style_index_0_id_65fe7410_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/trend/Trend.vue?vue&type=template&id=65fe7410&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/trend/Trend.vue?vue&type=template&id=65fe7410&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trend_vue_vue_type_template_id_65fe7410_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Trend.vue?vue&type=template&id=65fe7410&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/trend/Trend.vue?vue&type=template&id=65fe7410&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trend_vue_vue_type_template_id_65fe7410_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Trend_vue_vue_type_template_id_65fe7410_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);