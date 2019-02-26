(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/topics/topic.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/topics/topic.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts_ListPosts_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../posts/ListPosts.vue */ "./resources/js/components/posts/ListPosts.vue");
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
    return {};
  },
  computed: {
    posts: function posts() {
      return this.$store.getters.topicPosts;
    },
    noTopicPosts: function noTopicPosts() {
      return this.$store.getters.noTopicPosts;
    }
  },
  mounted: function mounted() {
    this.loadMore();
  },
  created: function created() {
    this.$store.dispatch('reactedPosts');
    this.getTopicPosts();
  },
  components: {
    ListPosts: _posts_ListPosts_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  watch: {
    '$route': function $route(to, from) {
      this.getTopicPosts();
    }
  },
  methods: {
    getTopicPosts: function getTopicPosts() {
      this.$store.dispatch('fillTopicPosts', {
        topic: this.$route.params.topic
      });
    },
    loadMore: function loadMore() {
      var _this = this;

      window.onscroll = function () {
        var endOfPage = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (endOfPage) {
          if (!!localStorage.getItem('access_token') && _this.$route.name == 'topic') {
            _this.morePosts();
          }
        }
      };
    },
    morePosts: function morePosts() {
      this.$store.dispatch('loadMoreTopicPosts', {
        topic: this.$route.params.topic
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/topics/topic.vue?vue&type=template&id=3b1a4e4f&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/topics/topic.vue?vue&type=template&id=3b1a4e4f&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    !_vm.noTopicPosts
      ? _c(
          "div",
          { staticClass: " text-center" },
          [
            _c("h2", [_vm._v(_vm._s(this.$route.params.topic))]),
            _vm._v(" "),
            _c("list-posts", { attrs: { posts: _vm.posts } })
          ],
          1
        )
      : _c("div", [
          _c("h1", [_vm._v("no posts")]),
          _vm._v(" "),
          _c("h1", [_vm._v("come on later")])
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/topics/topic.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/topics/topic.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topic_vue_vue_type_template_id_3b1a4e4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topic.vue?vue&type=template&id=3b1a4e4f&scoped=true& */ "./resources/js/components/topics/topic.vue?vue&type=template&id=3b1a4e4f&scoped=true&");
/* harmony import */ var _topic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topic.vue?vue&type=script&lang=js& */ "./resources/js/components/topics/topic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _topic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _topic_vue_vue_type_template_id_3b1a4e4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _topic_vue_vue_type_template_id_3b1a4e4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b1a4e4f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/topics/topic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/topics/topic.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/topics/topic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./topic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/topics/topic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_topic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/topics/topic.vue?vue&type=template&id=3b1a4e4f&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/topics/topic.vue?vue&type=template&id=3b1a4e4f&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topic_vue_vue_type_template_id_3b1a4e4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./topic.vue?vue&type=template&id=3b1a4e4f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/topics/topic.vue?vue&type=template&id=3b1a4e4f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topic_vue_vue_type_template_id_3b1a4e4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_topic_vue_vue_type_template_id_3b1a4e4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);