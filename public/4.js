(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/Createpost.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/Createpost.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
      bottomNav: 'recent',
      showEmoji: false,
      snackbar: false,
      post: '',
      image: null,
      topic: 11,
      wordsNumber: 0,
      writtenPost: '',
      wordsCounterColor: 'white--text'
    };
  },
  watch: {
    wordsNumber: function wordsNumber(d, e) {
      if (d > 80) {
        this.wordsCounterColor = 'yellow--text';
      }

      if (d > 100) {
        this.wordsCounterColor = 'red--text';
      }
    }
  },
  mounted: function mounted() {
    console.log('create a new post loaded');
  },
  computed: {
    emojisNative: function emojisNative() {
      return packData;
    },
    wordsCounter: function wordsCounter() {
      if (this.post.length === 0) {
        return this.wordsNumber = 0;
      }

      var post = this.post;
      var words = this.post.split(' ').length;
      return this.wordsNumber = words;
    },
    topics: function topics() {
      return this.$t('topics');
    },
    currentUserTopics: function currentUserTopics() {
      return this.$store.getters.currentUserTopics;
    }
  },
  methods: {
    selectEmoji: function selectEmoji(emoji) {
      this.post += emoji.emoji;
    },
    removeImage: function removeImage() {
      this.image = null;
    },
    HandlePostImage: function HandlePostImage(e) {
      var _this = this;

      var fr = new FileReader();
      fr.readAsDataURL(e.target.files[0]);
      var imgs = ['image/jpeg', 'image/png', 'image/jpg'];
      var imgType = e.target.files[0].type;

      if (imgs.indexOf(imgType) == -1) {
        this.image = null;
        swal({
          "title": "Error",
          "text": this.$t('avatarerror'),
          "icon": "error"
        });
      } else {
        fr.onload = function (e) {
          _this.image = e.target.result;
        };
      }
    },
    createPost: function createPost() {
      var _this2 = this;

      this.$store.dispatch('createPost', {
        post: this.post,
        topic: this.topic,
        image: this.image
      }).then(function () {
        _this2.post = '';
        _this2.topic = 11;
        _this2.image = null;
        _this2.snackbar = true;
      }).catch(function () {
        swal({
          title: "Error",
          text: _this2.$t('postfail'),
          icon: "error"
        });
        console.log("errors");
      });
    },
    userProfile: function userProfile() {
      return this.$store.getters.currentUserProfile;
    },
    getTopics: function getTopics(index) {
      return this.$store.getters.topics[index - 1];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/topics/topic.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/topics/topic.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts_ListPosts_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../posts/ListPosts.vue */ "./resources/js/components/posts/ListPosts.vue");
/* harmony import */ var _posts_Createpost_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts/Createpost.vue */ "./resources/js/components/posts/Createpost.vue");
/* harmony import */ var _Suggestpeople_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Suggestpeople.vue */ "./resources/js/components/Suggestpeople.vue");
/* harmony import */ var _topics_Topics_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../topics/Topics.vue */ "./resources/js/components/topics/Topics.vue");
/* harmony import */ var _trend_Trend_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../trend/Trend.vue */ "./resources/js/components/trend/Trend.vue");
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
    return {};
  },
  computed: {
    posts: function posts() {
      return this.$store.getters.topicPosts;
    },
    noTopicPosts: function noTopicPosts() {
      return this.$store.getters.noTopicPosts;
    },
    topics: function topics() {
      return this.$t('topics');
    }
  },
  mounted: function mounted() {
    console.log('topic loaded');
    this.loadMore();
  },
  created: function created() {
    this.$store.dispatch('reactedPosts');
    this.getTopicPosts();
  },
  components: {
    CreatePost: _posts_Createpost_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ListPosts: _posts_ListPosts_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SuggestedPeople: _Suggestpeople_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Topics: _topics_Topics_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Trend: _trend_Trend_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
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
      }).then(function (response) {
        console.log(7);
      }).catch(function (error) {
        console.log(error.response);
      });
    },
    loadMore: function loadMore() {
      var _this = this;

      window.onscroll = function () {
        var endOfPage = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (endOfPage) {
          if (!!_this.$store.state.authentication.userToken && _this.$route.name == 'topic') {
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/Createpost.vue?vue&type=style&index=0&id=e852447a&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/Createpost.vue?vue&type=style&index=0&id=e852447a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntextarea[data-v-e852447a]{\n    resize: none;\n    height: 110px;\n}\n.post-content[data-v-e852447a]{\n  white-space: pre-line;\n}\n#topic[data-v-e852447a] {\n\tposition: relative;\n\ttop: -10px;\n}\n#upload[data-v-e852447a] {\n\twidth: 82px;\n\theight: 35px;\n  margin:0 auto;\n}\n#file[data-v-e852447a] {\n\topacity: 0;\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\tleft: 0;\n  top: -30px;\n\tright: 0;\n\tbottom: 0;\n}\n.t[data-v-e852447a] .v-text-field__slot textarea {\n  color: white !important;\n  direction:rtl !important;\n}\n.t[data-v-e852447a] .theme--light.v-label {\n\tcolor: wheat !important;\n  direction:rtl !important;\n}\n.t[data-v-e852447a] .v-input__slot{\n  border-color: white !important\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/Createpost.vue?vue&type=style&index=0&id=e852447a&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/Createpost.vue?vue&type=style&index=0&id=e852447a&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Createpost.vue?vue&type=style&index=0&id=e852447a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/Createpost.vue?vue&type=style&index=0&id=e852447a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/Createpost.vue?vue&type=template&id=e852447a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/posts/Createpost.vue?vue&type=template&id=e852447a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    [
      _c("v-textarea", {
        staticClass: "t text-xs-center",
        attrs: {
          label: _vm.$t("whatHappen"),
          "no-resize": "",
          outline: "",
          color: "white",
          dir: "rtl"
        },
        model: {
          value: _vm.post,
          callback: function($$v) {
            _vm.post = typeof $$v === "string" ? $$v.trim() : $$v
          },
          expression: "post"
        }
      }),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c("v-flex", { attrs: { xs12: "", sm3: "" } }, [
            _c("div", { staticClass: "text-xs-center text-sm-center mt-2" }, [
              _c("h3", { class: _vm.wordsCounterColor }, [
                _vm._v(_vm._s(_vm.wordsCounter) + " / 100\n")
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "", sm2: "" } },
            [
              _c("v-tooltip", { attrs: { left: "" } }, [
                _c(
                  "div",
                  {
                    staticClass: "mt-1 text-xs-center primary",
                    attrs: { slot: "activator", id: "upload" },
                    slot: "activator"
                  },
                  [
                    _c(
                      "v-icon",
                      { staticClass: "mt-1", attrs: { color: "white" } },
                      [_vm._v("\n            add_a_photo\n          ")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      attrs: { type: "file", id: "file" },
                      on: { change: _vm.HandlePostImage }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("span", [_vm._v("add photo")])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("v-flex", { attrs: { xs12: "", sm3: "" } }, [
            _c(
              "div",
              { staticClass: "text-xs-center " },
              [
                _c(
                  "v-btn",
                  {
                    attrs: {
                      color: "success",
                      disabled:
                        _vm.post.length === 0 ||
                        _vm.wordsNumber > 100 ||
                        !_vm.topic
                    },
                    on: { click: _vm.createPost }
                  },
                  [
                    _vm._v("\n            " + _vm._s(_vm.$t("publish")) + " "),
                    _c("v-icon", { attrs: { right: "", color: "white" } }, [
                      _vm._v("done")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("v-flex", { attrs: { xs12: "", sm2: "" } }, [
            _c(
              "div",
              {
                staticClass: "text-xs-center text-sm-right mb-0",
                attrs: { id: "topic" }
              },
              [
                _c("v-select", {
                  attrs: {
                    dark: "",
                    items: _vm.topics,
                    "item-text": "topic",
                    "item-value": "id",
                    label: _vm.$t("choosetopic")
                  },
                  model: {
                    value: _vm.topic,
                    callback: function($$v) {
                      _vm.topic = $$v
                    },
                    expression: "topic"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _vm.image
            ? _c("v-flex", { attrs: { xs12: "", md12: "" } }, [
                _c(
                  "div",
                  { staticStyle: {} },
                  [
                    _c("v-img", {
                      staticStyle: { margin: "0 auto" },
                      attrs: { src: _vm.image, alt: "...", width: "200" }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-xs-center" },
                      [
                        _c(
                          "v-btn",
                          {
                            staticStyle: { margin: "0 auto" },
                            attrs: { icon: "", flat: "", color: "white" },
                            on: { click: _vm.removeImage }
                          },
                          [_c("v-icon", [_vm._v("close")])],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider", { attrs: { dark: "" } }),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { bottom: "", timeout: 1501, color: "white" },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _c("b", { staticClass: " indigo--text" }, [
            _vm._v("\n         " + _vm._s(_vm.$t("postdone")) + "\n       ")
          ]),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "indigo", flat: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [
              _c("bdi", [
                _vm._v("\n        " + _vm._s(_vm.$t("done")) + "\n      ")
              ])
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
  return _c(
    "v-content",
    [
      _c(
        "v-container",
        { attrs: { "grid-list-lg": "" } },
        [
          _c(
            "v-layout",
            { attrs: { "hidden-sm-and-down": "", row: "", wrap: "" } },
            [
              _c("v-flex", { attrs: { xs12: "" } }, [_c("create-post")], 1),
              _vm._v(" "),
              _c("v-flex", { attrs: { md3: "" } }, [_c("suggested-people")], 1),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { md6: "" } },
                [
                  !_vm.noTopicPosts
                    ? [_c("list-posts", { attrs: { posts: _vm.posts } })]
                    : [
                        _c(
                          "div",
                          { staticClass: "text-xs-center white--text" },
                          [
                            _c("h1", [_vm._v("no posts")]),
                            _vm._v(" "),
                            _c("h1", [_vm._v("come on later")])
                          ]
                        )
                      ]
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { md3: "" } },
                [_c("trend"), _vm._v(" "), _c("br"), _vm._v(" "), _c("topics")],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/posts/Createpost.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/posts/Createpost.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Createpost_vue_vue_type_template_id_e852447a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Createpost.vue?vue&type=template&id=e852447a&scoped=true& */ "./resources/js/components/posts/Createpost.vue?vue&type=template&id=e852447a&scoped=true&");
/* harmony import */ var _Createpost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Createpost.vue?vue&type=script&lang=js& */ "./resources/js/components/posts/Createpost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Createpost_vue_vue_type_style_index_0_id_e852447a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Createpost.vue?vue&type=style&index=0&id=e852447a&scoped=true&lang=css& */ "./resources/js/components/posts/Createpost.vue?vue&type=style&index=0&id=e852447a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Createpost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Createpost_vue_vue_type_template_id_e852447a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Createpost_vue_vue_type_template_id_e852447a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e852447a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/posts/Createpost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/posts/Createpost.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/posts/Createpost.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Createpost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Createpost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/Createpost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Createpost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/posts/Createpost.vue?vue&type=style&index=0&id=e852447a&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/posts/Createpost.vue?vue&type=style&index=0&id=e852447a&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Createpost_vue_vue_type_style_index_0_id_e852447a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Createpost.vue?vue&type=style&index=0&id=e852447a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/Createpost.vue?vue&type=style&index=0&id=e852447a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Createpost_vue_vue_type_style_index_0_id_e852447a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Createpost_vue_vue_type_style_index_0_id_e852447a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Createpost_vue_vue_type_style_index_0_id_e852447a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Createpost_vue_vue_type_style_index_0_id_e852447a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Createpost_vue_vue_type_style_index_0_id_e852447a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/posts/Createpost.vue?vue&type=template&id=e852447a&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/posts/Createpost.vue?vue&type=template&id=e852447a&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Createpost_vue_vue_type_template_id_e852447a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Createpost.vue?vue&type=template&id=e852447a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/posts/Createpost.vue?vue&type=template&id=e852447a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Createpost_vue_vue_type_template_id_e852447a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Createpost_vue_vue_type_template_id_e852447a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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