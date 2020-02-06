function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./content/content.module": "./src/app/content/content.module.ts",
      "./pre-auth/pre-auth.module": "./src/app/pre-auth/pre-auth.module.ts"
    };

    function webpackAsyncContext(req) {
      return Promise.resolve().then(function () {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        var id = map[req];
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/chat/chat.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/chat/chat.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form name=\"Chat-form\" class=\"chat-form\">\n    <div class=\"form-group\">\n        <input type=\"text\" name=\"messageInput\" class=\"form-control\" [(ngModel)]=\"message\" placeholder=\"Enter Message here\">\n        <button class=\"btn btn-primary\" (click)=\"sendMessagetoRoom()\">Send</button>\n    </div>\n</form>\n\n<section>\n    <div *ngFor=\"let item of messages\"><strong>{{item.user}}</strong> : {{item.message}}</div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/dashboard/dashboard.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/dashboard/dashboard.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"body-wrap\">\n   \n\n\n\n<header>\n    <span  class=\"sidebar-button\" (click)=\"sidebar_open()\"><i class=\"fa fa-bars\"></i></span>\n    <div class=\"container\">\n        \n\n      <nav class=\"navigationbar navbar navbar-expand-lg navbar-dark archivo\">\n        <button\n          class=\"navbar-toggler\"\n          type=\"button\"\n          data-toggle=\"collapse\"\n          data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\"\n          aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\"\n        >\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <img src=\"../../../assets/Images/logo.png\" alt=\"Social Connect Logo\" class=\"navbar-brand\">\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li id=\"friend-requests\" class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"notifications\"> <i class=\"fa fa-users\"></i> <span *ngIf=\"notCount > 0\" class=\"badge\">{{notCount}}</span></a>\n            </li>\n            <li id=\"work\" class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/content/profile\">Hello, {{username}}</a>\n            </li>\n            <li id=\"contact\" class=\"nav-item\">\n                <button type=\"submit\" class=\"btn btn-primary log-out\" (click)=\"authservice.SignOut()\">LogOut</button>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </header>\n\n\n</div>\n \n<div class=\"sidebar cairo\">\n    <div class=\"sidebar-list\">\n        <span class=\"sidebar-close-button\" (click)=\"sidebar_close()\"><i class=\"fa fa-close\"></i></span>\n      <ul>\n        <li [routerLink]=\"['chat']\" routerLinkActive=\"router-link-active\" class=\"side-selected\">Chat</li>\n        <li [routerLink]=\"['friends']\" routerLinkActive=\"router-link-active\" class=\"side-selected\">Friends</li>\n        <li [routerLink]=\"['people']\" routerLinkActive=\"router-link-active\" >Search Peaople </li>\n        <li [routerLink]=\"['profile']\" routerLinkActive=\"router-link-active\" >Profile</li>\n        <li [routerLink]=\"['notifications']\" routerLinkActive=\"router-link-active\" >Notifications</li>\n      </ul>\n    </div>  \n  </div>\n\n  <div class=\"container\">\n    <!-- <app-chat></app-chat> -->\n    <!-- <app-friends></app-friends> -->\n    <router-outlet></router-outlet>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/friends-display/friends-display.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/friends-display/friends-display.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentFriendsDisplayFriendsDisplayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div  class=\"friends\" *ngIf=\"friends.length > 0\">\n    <div class=\"friend-header text-center mb-5\">\n    <h2>Friends</h2>\n</div>\n<div class=\"friend-wrapper\" *ngFor=\"let friend of friends\">\n    <div class=\"friend\" >\n        <div class=\"friend-profile-pic\">\n            <div class=\"fp-inner-wrapper\">\n                <div class=\"image-container\"> \n                    <img  src={{friend.profilePicURL}} alt=\"\">\n                </div>\n            </div>\n        </div>\n        <div class=\"friend-content\">\n            <div class=\"fc-inner-wrapper\">\n                <h3>{{friend.displayName}}</h3>\n            </div>\n        </div>\n        <div class=\"friend-buttons\">\n           <div class=\"fb-wrapper\">\n            \n            <button class=\"btn btn-success mr-3\" value={{friend.uid}} (click)=\"acceptRequestButtonClicked($event)\">Chat</button>\n            <button class=\"btn btn-danger\"  value={{friend.uid}} (click)=\"deleteRequestButtonClicked($event)\">Unfollow</button>\n           </div>\n        </div>\n    </div>\n</div>\n</div>\n\n\n<div class=\"no-\" *ngIf=\"friends.length == 0\">\n    <h2>No friends Yet</h2>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/friends/friends.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/friends/friends.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentFriendsFriendsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"friend-wrapper\" *ngFor=\"let user of users\">\n    <div class=\"friend\" >\n        <div class=\"friend-profile-pic\">\n            <div class=\"fp-inner-wrapper\">\n                <div class=\"image-container\">\n                    <img *ngIf=\"user.profilePicURL != null\" src={{user.profilePicURL}} alt=\"\">\n                  \n                    <img *ngIf=\"user.profilePicURL == null && user.photoURL != null\" src={{user.photoURL}} alt=\"\">\n                    <img  *ngIf=\"user.profilePicURL == null && user.photoURL == null\" src=\"../../../assets/Images/user_default.png\" alt=\"\">\n                </div>\n            </div>\n        </div>\n        <div class=\"friend-content\">\n            <div class=\"fc-inner-wrapper\">\n                <h3>{{user.displayName}}</h3>\n            </div>\n        </div>\n        <div class=\"friend-buttons\">\n           <div class=\"fb-wrapper\">\n            <button *ngIf=\"!user.isReqSent\" class=\"btn btn-primary\" (click)=\"addFriendButtonClicked($event)\" value={{user.uid}}>Add Friend</button>\n            <h4 *ngIf=\"user.isReqSent\">Friend Request Sent</h4>\n            <button *ngIf=\"user.isReqSent\" class=\"btn btn-primary\">Cancel Request?</button>\n           </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/notifications/notifications.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/notifications/notifications.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div  class=\"notifications\" *ngIf=\"users.length > 0\">\n    <div class=\"notification-header text-center mb-5\">\n    <h2>Friend Requests</h2>\n</div>\n<div class=\"notification-wrapper\" *ngFor=\"let user of users\">\n    <div class=\"notification\" >\n        <div class=\"notification-profile-pic\">\n            <div class=\"fp-inner-wrapper\">\n                <div class=\"image-container\"> \n                    <img  src={{user.profilePicURL}} alt=\"\">\n                </div>\n            </div>\n        </div>\n        <div class=\"notification-content\">\n            <div class=\"fc-inner-wrapper\">\n                <h3>{{user.displayName}}</h3>\n            </div>\n        </div>\n        <div class=\"notification-buttons\">\n           <div class=\"fb-wrapper\">\n            \n            <button class=\"btn btn-success mr-3\" value={{user.uid}} (click)=\"acceptRequestButtonClicked($event)\">Accept Friend Request</button>\n            <button class=\"btn btn-danger\" value={{user.uid}} (click)=\"deleteRequestButtonClicked($event)\">Delete</button>\n           </div>\n        </div>\n    </div>\n</div>\n</div>\n\n\n<div class=\"no-notifications\" *ngIf=\"users.length == 0\">\n    <h2>No friend Requests</h2>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/content/profile/profile.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/profile/profile.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"image-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div *ngIf=\"profilePicUrl == null\" class=\"image-container\">\n                    <img src=\"../../../assets/Images/user_default.png\" alt=\"\">\n                </div>\n                <div *ngIf=\"profilePicUrl != null\" class=\"image-container\">\n                    <img src={{profilePicUrl}} alt=\"\">\n                </div>\n                <input class=\"form-control\" mdbFileSelect type=\"file\" (change)=\"Imageupload($event)\" accept=\".png,.jpg\" name=\"profileImage\" id=\"profileImage\"/>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"uploadButtonClicked($event);\" [disabled]=\"isImageProper ? false : true\">Upload Image</button>\n\n\n            </div>\n            <div class=\"col-md-9\">\n                <div class=\"content\">\n                    <h1>{{user.displayName}}</h1>\n                    <p>{{user.email}}</p>\n                </div>\n\n            </div>\n            \n        </div>\n        \n    </div>\n</section>\n<section class=\"bio\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <h3 style=\"display: inline-block;\">Bio: </h3>\n                <button class=\"btn btn-primary\" style=\"display: inline-block;margin-left: 30px;\" (click)=\"openModal()\" data-toggle=\"modal\" data-target=\"#bio-modal\">Edit</button>\n            </div>\n        </div>\n        <div class=\"row\">\n           <div class=\"col-md-12\">\n               <div class=\"bio-content-wrapper\">\n                   <div class=\"bio-content-label\">City:</div>\n                   <div class=\"bio-content\" *ngIf=\"userDetails.city != null\">{{userDetails.city}}</div>\n                   <div class=\"bio-content\" *ngIf=\"userDetails.city == null\">Add a City</div>\n               </div>\n               <div class=\"bio-content-wrapper\">\n                <div class=\"bio-content-label\">Work Adddress:</div>\n                <div class=\"bio-content\" *ngIf=\"userDetails.city != null\">{{userDetails.address}}</div>\n                <div class=\"bio-content\" *ngIf=\"userDetails.city == null\">Add an Address</div>\n            </div>\n            <div class=\"bio-content-wrapper\">\n                <div class=\"bio-content-label\">Birth Date:</div>\n                <div class=\"bio-content\" *ngIf=\"userDetails.city != null\">{{userDetails.birthdate}}</div>\n                <div class=\"bio-content\" *ngIf=\"userDetails.city == null\">Add birth date</div>\n            </div>\n            <div class=\"bio-content-wrapper\">\n                <div class=\"bio-content-label\">Contact:</div>\n                <div class=\"bio-content\" *ngIf=\"userDetails.city != null\">{{userDetails.contactno}}</div>\n                <div class=\"bio-content\" *ngIf=\"userDetails.city == null\">Add contact number</div>\n            </div>\n            <div class=\"bio-content-wrapper\">\n                <div class=\"bio-content-label\">Gender:</div>\n                <div class=\"bio-content\" *ngIf=\"userDetails.city != null\">{{userDetails.gender}}</div>\n                <div class=\"bio-content\" *ngIf=\"userDetails.city == null\">Add gender</div>\n            </div>\n           </div>\n        </div>\n    </div>\n\n</section>\n\n<div class=\"modal fade\" id=\"bio-modal\" tabindex=\"-1\" role=\"dialog\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header text-center\">\n        <h4 class=\"modal-title w-100 font-weight-bold\">Edit Bio</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body mx-3\">\n        \n       \n            <form [formGroup]=\"bioForm\" (ngSubmit)=\"onbioformSubmitted()\">\n                <div class=\"form-group\">\n                    <label for=\"inputAddress\">Work Address:</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"address\" placeholder=\"1234 Main St\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"inputAddress\">City:</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"city\" placeholder=\"Mumbai\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"inputAddress\">Contact:</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"contact\" placeholder=\"1234 5678 90\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"inputAddress\">Birth Date</label>\n                    <input type=\"date\" class=\"form-control\" formControlName=\"birthdate\">\n                </div>\n                <fieldset class=\"form-group\">\n                    <div class=\"row\">\n                      <legend class=\"col-form-label col-sm-2 pt-0\">Gender</legend>\n                      <div class=\"col-sm-10\">\n                        <div class=\"form-check\">\n                          <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" id=\"radioMale\" value=\"Male\" checked>\n                          <label class=\"form-check-label\" for=\"gridRadios1\">\n                            Male\n                          </label>\n                        </div>\n                        <div class=\"form-check\">\n                          <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" id=\"radioFemale\" value=\"Female\">\n                          <label class=\"form-check-label\" for=\"gridRadios2\">\n                            Female\n                          </label>\n                        </div>\n                      </div>\n                    </div>\n                  </fieldset>\n               \n                <button type=\"submit\" class=\"btn btn-primary\">Save Changes</button>\n    \n            </form>\n       \n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/not-authorized/not-authorized.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-authorized/not-authorized.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotAuthorizedNotAuthorizedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>You are not authorized to this page. please login again <strong routerLink=\"\">Login</strong></p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/forgot-password/forgot-password.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/forgot-password/forgot-password.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreAuthForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"display-table cairo\">\n    <div class=\"displaytable-cell\">\n      <div class=\"auth-block\">\n        <h3 class=\"text-center archivo\">Reset Password</h3>\n  \n        <p class=\"text-center\">Please enter your email address to request a password reset.</p>\n  \n        <div class=\"form-group text-center\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" #passwordResetEmail required>\n        </div>\n  \n        <!-- Calling ForgotPassword from AuthService Api -->\n        <div class=\"form-group text-center\">\n          <button type=\"submit\" class=\"btn btnPrimary reset\" value=\"Reset Password\" (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">Reset Password</button>\n        </div>\n      </div>\n  \n      <div class=\"redirectToLogin text-center\">\n        <span>Go back to ? <span class=\"redirect\" routerLink=\"\">Log In</span></span>\n      </div>\n  \n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/log-in/log-in.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/log-in/log-in.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreAuthLogInLogInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container \">\n  <div class=\"display-table cairo\">\n    <div class=\"display-table-cell\">\n  \n      <form class=\"auth-block\" name=\"form\" [formGroup]=\"form\" novalidate >\n        <h3 class=\"text-center archivo\">Log In</h3>\n        <div class=\"input-group form-group\">\n\n            <input (blur)=\"inputValidate()\" type=\"text\" class=\"form-control\" [ngClass]=\"{'is-invalid' : form.get('email').touched && form.get('email').invalid}\" formControlName=\"email\" placeholder=\"Email\" #userName>\n            <div class=\"invalid-feedback\" *ngIf=\"{\n              'is-invalid':\n                form.get('email').touched && form.get('email').invalid\n            }\">\n            <div *ngIf=\"form.get('email').errors?.required\">\n              Email Address is Required\n            </div>\n            <!-- <div *ngIf=\"form.get('email').errors?.minLength\"> Enter valid email address</div> -->\n            <div *ngIf=\"form.get('email').errors?.email\">\n              Must be a valid email address\n            </div>\n            </div>\n \n         \n        </div>\n        \n       \n        <div class=\"input-group form-group\">\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            id=\"eye\"\n            class=\"form-control password-input\"\n            [ngClass]=\"{\n              'is-invalid':\n                form.get('password').touched && form.get('password').invalid\n            }\"\n            ng\n            placeholder=\"Password\"\n            #userPassword\n          /><i (click)=\"eyeclick()\" class=\"fa fa-eye pass-icon\"></i>\n\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"{'is-invalid':form.get('password').touched && form.get('password').invalid}\"\n          >\n            <div *ngIf=\"form.get('password').errors?.required\">\n             Password is Required\n            </div>\n            <div *ngIf=\"form.get('password').errors?.pattern\">\n              Password must be between <strong>5 to 12</strong> characters and must contain a <strong>uppercase</strong> character, a <strong>lowercase</strong> character and a <strong>number</strong>.\n            </div>\n           \n          </div>\n        </div>\n  \n        <!-- Calling SignIn Api from AuthService -->\n        <div class=\"form-group text-center\">\n          <button type=\"submit\" class=\"btn btn-primary log-in\" value=\"Log in\" (click)=\"authService.SignIn(userName.value, userPassword.value)\">Log In</button>\n        </div>\n  \n        <div class=\"form-group text-center\">\n          <div class=\"or\"><span class=\"orInner\">Or</span></div>\n        </div>\n  \n        <!-- Calling GoogleAuth Api from AuthService -->\n        <div class=\"form-group text-center\">\n          <button type=\"button\" class=\"btn btn-google\" (click)=\"authService.GoogleAuth()\">\n            <i class=\"fa fa-google-plus\"></i>\n            Log in with Google\n          </button>\n        </div>\n  \n        <div class=\"forgot-password\">\n          <span routerLink=\"forgot-password\">Forgot Password?</span>\n        </div>\n\n        <div class=\"redirectToLogin\">\n          <span>Don't have an account?<span class=\"redirect\" routerLink=\"register-user\"> Sign Up</span></span>\n        </div>\n      </form>\n\n   \n  \n      \n  \n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/pre-auth.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/pre-auth.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreAuthPreAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"pre-auth\">\r\n    <div class=\"logo-section\">\r\n        <div class=\"logo-wrapper\">\r\n            <img src=\"../../assets/Images/logo.png\" alt=\"\">\r\n        </div>\r\n    </div>\r\n    <div class=\"form-section\">\r\n        <div class=\"form\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/sign-in/sign-in.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/sign-in/sign-in.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreAuthSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"displaytable cairo\">\n    <div class=\"display-table-cell\">\n      <form class=\"auth-block\" [formGroup]=\"form\"   >\n        <h3 class=\"archivo text-center\">Sign Up</h3>\n\n        <div class=\" input-group form-group\">\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Username\"\n            #userName\n          />\n         \n        </div>\n        <div class=\" input-group form-group\">\n          <input\n            type=\"text\"\n            formControlName=\"email\"\n            class=\"form-control\"\n            [ngClass]=\"{\n              'is-invalid':\n                form.get('email').touched && form.get('email').invalid\n            }\"\n            placeholder=\"Email\"\n            #userEmail\n          />\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"{\n              'is-invalid':\n                form.get('email').touched && form.get('email').invalid\n            }\"\n          >\n            <div *ngIf=\"form.get('email').errors?.required\">\n              Email Address is Required\n            </div>\n            <!-- <div *ngIf=\"form.get('email').errors?.minLength\"> Enter valid email address</div> -->\n            <div *ngIf=\"form.get('email').errors?.email\">\n              Must be a valid email address\n            </div>\n          </div>\n        </div>\n\n        <div class=\"input-group form-group\">\n          <input\n            type=\"password\"\n            formControlName=\"password\"\n            id=\"eye\"\n            class=\"form-control password-input\"\n            [ngClass]=\"{\n              'is-invalid':\n                form.get('password').touched && form.get('password').invalid\n            }\"\n            placeholder=\"Password\"\n            #userPwd\n          /><i (click)=\"eyeclick()\" class=\"fa fa-eye pass-icon\"></i>\n\n          <div\n            class=\"invalid-feedback\"\n            *ngIf=\"{'is-invalid':form.get('password').touched && form.get('password').invalid}\"\n          >\n            <div *ngIf=\"form.get('password').errors?.required\">\n             Password is Required\n            </div>\n            <div *ngIf=\"form.get('password').errors?.pattern\">\n              Password must be between <strong>5 to 12</strong> characters and must contain a <strong>uppercase</strong> character, a <strong>lowercase</strong> character and a <strong>number</strong>.\n            </div>\n           \n          </div>\n        </div>\n\n        <div class=\"form-group text-center\">\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary sign-in\"\n            value=\"Sign Up\"\n            (click)=\"authService.SignUp(userEmail.value, userPwd.value , userName.value)\"\n          >\n            Sign Up\n          </button>\n        </div>\n\n        <div class=\"form-group text-center\">\n          <div class=\"or\"><span class=\"orInner\">Or</span></div>\n        </div>\n\n        <!-- Continue with Google -->\n        <div class=\"form-group text-center\">\n          <button\n            type=\"button\"\n            class=\"btn btn-google\"\n            (click)=\"authService.GoogleAuth()\"\n          >\n            <i class=\"fa fa-google-plus\"></i>\n            Continue with Google\n          </button>\n        </div>\n\n        <!-- Continue with Facebook -->\n        <div class=\"form-group text-center\">\n          <button\n            type=\"button\"\n            class=\"btn facebook-btn\"\n            (click)=\"authService.FacebookAuth()\"\n          >\n            <i class=\"fa fa-facebook\"></i>\n            Continue with Facebook\n          </button>\n        </div>\n\n        <div class=\"redirectToLogin text-center\">\n          <span\n            >Already have an account?\n            <span class=\"redirect\" routerLink=\"\">Log In</span></span\n          >\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/verify-email/verify-email.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/verify-email/verify-email.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreAuthVerifyEmailVerifyEmailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"display-table cairo\">\n    <div class=\"display-table-cell\">\n  \n      <div class=\"auth-block text-center\">\n        <h3>Thank You for Registering</h3>\n  \n        <div class=\"form-group text-center\" *ngIf=\"authService.userData as user\">\n          <p class=\"text-center\">We have sent a confirmation email to <strong>{{user.email}}</strong>.</p>\n          <p class=\"text-center\">Please check your email and click on the link to verfiy your email address.</p>\n        </div>\n        \n        <!-- Calling SendVerificationMail() method using authService Api -->\n        <div class=\"form-group\">\n          <button type=\"button\" class=\"btn btnPrimary\" (click)=\"authService.SendVerificationMail()\">\n            <i class=\"fa fa-refresh\"></i>\n            Resend Verification Email\n          </button>\n        </div>\n  \n      </div>\n  \n      <div class=\"redirectToLogin text-center\">\n        <span>Go back to?<span class=\"redirect\" routerLink=\"\"> Sign in</span></span>\n      </div>\n  \n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-interceptor.service.ts":
  /*!********************************************!*\
    !*** ./src/app/app-interceptor.service.ts ***!
    \********************************************/

  /*! exports provided: AppInterceptorService */

  /***/
  function srcAppAppInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInterceptorService", function () {
      return AppInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AppInterceptorService =
    /*#__PURE__*/
    function () {
      function AppInterceptorService(afs, afAuth) {
        _classCallCheck(this, AppInterceptorService);

        this.afs = afs;
        this.afAuth = afAuth;
      }

      _createClass(AppInterceptorService, [{
        key: "intercept",
        value: function intercept(req, next) {
          var user = JSON.parse(localStorage.getItem("user"));

          if (user == null) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.handleAccess(req, next));
          } else {
            var TokenId = user.stsTokenManager.accessToken; // console.log("the token when user != null is:"+ TokenId)

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/json',
              "token": TokenId.toString()
            });
            var clone = req.clone({
              headers: headers
            });
            return next.handle(clone);
          }
        }
      }, {
        key: "handleAccess",
        value: function handleAccess(req, next) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var idToken, headers, clone;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("Local storage user:");
                    console.log(JSON.parse(localStorage.getItem('user')));
                    _context.next = 4;
                    return this.afAuth.auth.currentUser.getIdToken(
                    /* forceRefresh */
                    true);

                  case 4:
                    idToken = _context.sent;
                    console.log(idToken);
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                      'Content-Type': 'application/json',
                      "Token": idToken.toString()
                    }); // headers.append('Content-Type', 'application/json');
                    //           headers.append("Token", idToken.toString() )

                    clone = req.clone({
                      headers: headers
                    });
                    console.log(headers);
                    return _context.abrupt("return", next.handle(clone).toPromise());

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AppInterceptorService;
    }();

    AppInterceptorService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }];
    };

    AppInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AppInterceptorService); // handle(){
    //     const user = JSON.parse(localStorage.getItem("user"));
    //             var clone;
    //            this.afAuth.auth.currentUser
    //             this.afAuth.auth.currentUser.getIdToken(/* forceRefresh */ true)
    //             .then(function(idToken) {
    //               console.log("Token at frontEnd:");
    //               const headers = new HttpHeaders().set('Content-Type', 'application/json');
    //               headers.append('token', idToken )
    //                clone  = req.clone({
    //                 headers : headers
    //               })
    //               return next.handle(clone);
    //             })
    // }

    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./not-authorized/not-authorized.component */
    "./src/app/not-authorized/not-authorized.component.ts");
    /* harmony import */


    var _content_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./content/profile/profile.component */
    "./src/app/content/profile/profile.component.ts");

    var routes = [{
      path: "",
      loadChildren: "./pre-auth/pre-auth.module#PreAuthModule"
    }, // {path: 'preauth', loadChildren: './pre-auth/pre-auth.module#PreAuthModule'},
    {
      path: "content",
      loadChildren: "./content/content.module#ContentModule"
    }, {
      path: "not-authorized",
      component: _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_3__["NotAuthorizedComponent"]
    }, {
      path: 'profile',
      component: _content_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    }, {
      path: "**",
      redirectTo: '',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'social-connect';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pre_auth_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pre-auth/shared/services/auth.service */
    "./src/app/pre-auth/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _pre_auth_pre_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pre-auth/pre-auth.module */
    "./src/app/pre-auth/pre-auth.module.ts");
    /* harmony import */


    var _content_content_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./content/content.module */
    "./src/app/content/content.module.ts");
    /* harmony import */


    var _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./not-authorized/not-authorized.component */
    "./src/app/not-authorized/not-authorized.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _app_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app-interceptor.service */
    "./src/app/app-interceptor.service.ts");
    /* harmony import */


    var _chat_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./chat.service */
    "./src/app/chat.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_12__["NotAuthorizedComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"], _pre_auth_pre_auth_module__WEBPACK_IMPORTED_MODULE_10__["PreAuthModule"], _content_content_module__WEBPACK_IMPORTED_MODULE_11__["ContentModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]],
      providers: [_pre_auth_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], _chat_service__WEBPACK_IMPORTED_MODULE_17__["ChatService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
        useClass: _app_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["AppInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/chat.service.ts":
  /*!*********************************!*\
    !*** ./src/app/chat.service.ts ***!
    \*********************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ChatService =
    /*#__PURE__*/
    function () {
      function ChatService() {
        _classCallCheck(this, ChatService);

        this.url = "http://localhost:3000";
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url, {
          query: "uid=" + JSON.parse(localStorage.getItem("user")).uid.toString()
        });
        console.log("Socket is:");
        console.log(this.socket);
      }

      _createClass(ChatService, [{
        key: "sendFriendRequest",
        value: function sendFriendRequest(uid) {
          this.socket.emit("send-friend-request", {
            uid: uid
          });
        }
      }, {
        key: "acceptFriendRequest",
        value: function acceptFriendRequest(uid) {
          this.socket.emit("accept-friend-request", {
            uid: uid
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(message, name) {
          var data = {
            message: message,
            displayname: name
          };
          this.socket.emit("new-message", data);
        }
      }, {
        key: "createRoom",
        value: function createRoom() {
          this.socket.emit("create", "Room1");
        }
      }, {
        key: "recieveFriendRequests",
        value: function recieveFriendRequests() {
          var _this = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this.socket.on("notification-recieved", function (message) {
              console.log("Notification Recieved");
              observer.next(message);
            });
          });
        }
      }, {
        key: "acceptFriendRequestsNotify",
        value: function acceptFriendRequestsNotify() {
          var _this2 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this2.socket.on("accept-friend-notification-recieved", function (message) {
              console.log("Accept Friend Notification Recieved");
              observer.next(message);
            });
          });
        }
      }, {
        key: "recieveAddFriendAcknowledgement",
        value: function recieveAddFriendAcknowledgement() {
          var _this3 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            _this3.socket.on("add-friend-request-sent", function (message) {
              console.log("Add Friend Acknowledgement Recieved");
              observer.next(message);
            });
          });
        }
      }, {
        key: "recieveMessagefromRoom",
        value: function recieveMessagefromRoom() {
          var _this4 = this;

          var that = this;
          var messObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this4.socket.on("message", function (message) {
              console.log("message observed");
              observer.next(message);
            });

            return function () {
              _this4.socket.disconnect();
            };
          });
          return messObservable;
        }
      }]);

      return ChatService;
    }();

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ChatService);
    /***/
  },

  /***/
  "./src/app/content/chat/chat.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/content/chat/chat.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentChatChatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat-form .form-group {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9jaGF0L0U6XFxzb2NpYWwtY29ubmVjdC9zcmNcXGFwcFxcY29udGVudFxcY2hhdFxcY2hhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtZm9ybXtcclxuICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn0iLCIuY2hhdC1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/content/chat/chat.component.ts":
  /*!************************************************!*\
    !*** ./src/app/content/chat/chat.component.ts ***!
    \************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppContentChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/chat.service */
    "./src/app/chat.service.ts");

    var ChatComponent =
    /*#__PURE__*/
    function () {
      function ChatComponent(chatService) {
        var _this5 = this;

        _classCallCheck(this, ChatComponent);

        this.chatService = chatService;
        this.messages = []; // this.messages.push({message:"hello",user:"SuperUser"})

        this.chatService.recieveMessagefromRoom().subscribe(function (data) {
          console.log(data);

          _this5.messages.push({
            message: data.message,
            user: data.displayname
          });
        });
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chatService.createRoom();
          this.user = JSON.parse(localStorage.getItem('user'));
          console.log(this.user.displayName);
        }
      }, {
        key: "sendMessagetoRoom",
        value: function sendMessagetoRoom() {
          this.chatService.sendMessage(this.message, this.user.displayName);
          this.message = '';
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ctorParameters = function () {
      return [{
        type: src_app_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }];
    };

    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/chat/chat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat.component.scss */
      "./src/app/content/chat/chat.component.scss")).default]
    })], ChatComponent);
    /***/
  },

  /***/
  "./src/app/content/content-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/content/content-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ContentRoutingModule */

  /***/
  function srcAppContentContentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentRoutingModule", function () {
      return ContentRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/content/dashboard/dashboard.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/content/profile/profile.component.ts");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/content/chat/chat.component.ts");
    /* harmony import */


    var _friends_friends_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./friends/friends.component */
    "./src/app/content/friends/friends.component.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./notifications/notifications.component */
    "./src/app/content/notifications/notifications.component.ts");
    /* harmony import */


    var _friends_display_friends_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./friends-display/friends-display.component */
    "./src/app/content/friends-display/friends-display.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      children: [{
        path: '',
        redirectTo: 'chat',
        pathMatch: 'full'
      }, {
        path: 'chat',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"]
      }, {
        path: 'friends',
        component: _friends_display_friends_display_component__WEBPACK_IMPORTED_MODULE_8__["FriendsDisplayComponent"]
      }, {
        path: 'people',
        component: _friends_friends_component__WEBPACK_IMPORTED_MODULE_6__["FriendsComponent"]
      }, {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
      }, {
        path: 'notifications',
        component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__["NotificationsComponent"]
      }]
    }, {
      path: 'profile',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
    }];

    var ContentRoutingModule = function ContentRoutingModule() {
      _classCallCheck(this, ContentRoutingModule);
    };

    ContentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContentRoutingModule);
    /***/
  },

  /***/
  "./src/app/content/content.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/content/content.module.ts ***!
    \*******************************************/

  /*! exports provided: ContentModule */

  /***/
  function srcAppContentContentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentModule", function () {
      return ContentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _content_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./content-routing.module */
    "./src/app/content/content-routing.module.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/content/dashboard/dashboard.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/content/profile/profile.component.ts");
    /* harmony import */


    var _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat/chat.component */
    "./src/app/content/chat/chat.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _friends_friends_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./friends/friends.component */
    "./src/app/content/friends/friends.component.ts");
    /* harmony import */


    var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./notifications/notifications.component */
    "./src/app/content/notifications/notifications.component.ts");
    /* harmony import */


    var _friends_display_friends_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./friends-display/friends-display.component */
    "./src/app/content/friends-display/friends-display.component.ts");

    var ContentModule = function ContentModule() {
      _classCallCheck(this, ContentModule);
    };

    ContentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"], _friends_friends_component__WEBPACK_IMPORTED_MODULE_8__["FriendsComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsComponent"], _friends_display_friends_display_component__WEBPACK_IMPORTED_MODULE_10__["FriendsDisplayComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _content_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]
    })], ContentModule);
    /***/
  },

  /***/
  "./src/app/content/dashboard/dashboard.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/content/dashboard/dashboard.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\n.cairo {\n  font-family: \"Cairo\", sans-serif;\n}\n.archivo {\n  font-family: \"Archivo\", sans-serif;\n}\n.sidebar {\n  visibility: visible;\n  display: block;\n  height: 100vh;\n  width: 350px;\n  z-index: 100;\n  position: fixed;\n  top: 0;\n  left: -350px;\n  -webkit-transition: 0.5s all ease;\n  transition: 0.5s all ease;\n}\n.sidebar .sidebar-list {\n  background-color: #6C3C8C;\n  height: 100vh;\n  overflow-y: auto;\n}\n.sidebar .sidebar-list ul {\n  padding: 100px 0 0 0;\n}\n.sidebar .sidebar-list li {\n  list-style-type: none;\n  color: white;\n  font-size: 1.5em;\n  padding: 10px 0 10px 30px;\n}\n.sidebar .sidebar-list .router-link-active {\n  background-color: #4a2a62;\n}\n.sidebar .sidebar-list i {\n  color: white;\n  font-size: 35px;\n  padding: 15px;\n  float: right;\n}\n.sidebar .sidebar-list i:hover {\n  color: #e1d8e8;\n}\nheader {\n  background-color: #6C3C8C;\n  display: -webkit-box;\n  display: flex;\n}\nheader span i {\n  margin: auto;\n}\nheader li {\n  margin: 0 10px;\n}\nheader .navbar-brand {\n  height: 3.5em;\n  width: 16em;\n  display: inline-block;\n}\nheader .sidebar-button {\n  margin-left: 2em;\n  font-size: 2em;\n  color: white;\n  margin-top: auto;\n  margin-bottom: auto;\n}\nheader .log-out {\n  background-color: #fd852e;\n  border: none;\n}\n.body-wrapper::before {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  content: \"\";\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n  z-index: 70;\n}\n.body-wrapper {\n  position: relative;\n  overflow: hidden;\n}\n.sidebar-button:hover {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9kYXNoYm9hcmQvRTpcXHNvY2lhbC1jb25uZWN0L3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2NvbnRlbnQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9kYXNoYm9hcmQvRTpcXHNvY2lhbC1jb25uZWN0L3NyY1xcYXBwXFxjb250ZW50XFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQVNBO0VBQ0EsZ0NBQUE7QUNQQTtBRFVBO0VBQ0ksa0NBQUE7QUNQSjtBQ0xBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFBQSx5QkFBQTtBRFFGO0FDTkU7RUFDRSx5QkZYWTtFRVlaLGFBQUE7RUFDQSxnQkFBQTtBRFFKO0FDTkk7RUFDRSxvQkFBQTtBRFFOO0FDTEk7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLHlCQUFBO0FETU47QUNISTtFQUNFLHlCRnhCYztBQzZCcEI7QUNGSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURJTjtBQ0RJO0VBQ0UsY0ZyQ2tCO0FDd0N4QjtBQ0lBO0VBQ0kseUJGL0NZO0VFZ0RaLG9CQUFBO0VBQUEsYUFBQTtBRERKO0FDR1E7RUFDSSxZQUFBO0FERFo7QUNLSTtFQUNJLGNBQUE7QURIUjtBQ0tJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBREhSO0FDTUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBREpSO0FDT0k7RUFDSSx5QkZ4RVU7RUV5RVYsWUFBQTtBRExSO0FDV0E7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEUkY7QUNVQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QURQRjtBQ1lBO0VBQ0UsWUFBQTtBRFRGIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbiRwcmltYXJ5LWNvbG9yOiAjNkMzQzhDO1xuJHNlY29uZGFyeS1jb2xvcjogI2ZkODUyZTtcbiRwcmltYXJ5LWxpZ2h0ZXN0LWNvbG9yOiNlMWQ4ZTg7XG4kc2Vjb25kYXJ5LWxpZ2h0ZXN0LWNvbG9yOiNmZWRhYzA7XG4kcHJpbWFyeS1kYXJrLWNvbG9yOiM0YTJhNjI7XG5cbi5jYWlyb3tcbmZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uYXJjaGl2b3tcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdm8nLCBzYW5zLXNlcmlmO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5jYWlybyB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5hcmNoaXZvIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl2b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uc2lkZWJhciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMzUwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0zNTBweDtcbiAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkMzQzhDO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnNpZGViYXIgLnNpZGViYXItbGlzdCB1bCB7XG4gIHBhZGRpbmc6IDEwMHB4IDAgMCAwO1xufVxuLnNpZGViYXIgLnNpZGViYXItbGlzdCBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAzMHB4O1xufVxuLnNpZGViYXIgLnNpZGViYXItbGlzdCAucm91dGVyLWxpbmstYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhMmE2Mjtcbn1cbi5zaWRlYmFyIC5zaWRlYmFyLWxpc3QgaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc2lkZWJhciAuc2lkZWJhci1saXN0IGk6aG92ZXIge1xuICBjb2xvcjogI2UxZDhlODtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZDM0M4QztcbiAgZGlzcGxheTogZmxleDtcbn1cbmhlYWRlciBzcGFuIGkge1xuICBtYXJnaW46IGF1dG87XG59XG5oZWFkZXIgbGkge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbmhlYWRlciAubmF2YmFyLWJyYW5kIHtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgd2lkdGg6IDE2ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbmhlYWRlciAuc2lkZWJhci1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMmVtO1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuaGVhZGVyIC5sb2ctb3V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkODUyZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYm9keS13cmFwcGVyOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogNzA7XG59XG5cbi5ib2R5LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWRlYmFyLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcbi5zaWRlYmFyIHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IC0zNTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlO1xyXG5cclxuICAuc2lkZWJhci1saXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgXHJcbiAgICB1bCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwMHB4IDAgMCAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4gICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAzMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWRhcmstY29sb3I7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICBcclxuICAgIGk6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJHByaW1hcnktbGlnaHRlc3QtY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgc3BhbntcclxuICAgICAgICBpe1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpe1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1icmFuZHtcclxuICAgICAgICBoZWlnaHQ6IDMuNWVtO1xyXG4gICAgICAgIHdpZHRoOiAxNmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZWJhci1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAubG9nLW91dHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG4uYm9keS13cmFwcGVyOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA3MDtcclxufVxyXG4uYm9keS13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcblxyXG4uc2lkZWJhci1idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/content/dashboard/dashboard.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/content/dashboard/dashboard.component.ts ***!
    \**********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppContentDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _pre_auth_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../pre-auth/shared/services/auth.service */
    "./src/app/pre-auth/shared/services/auth.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var src_app_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/chat.service */
    "./src/app/chat.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(authservice, userservice, chatService) {
        var _this6 = this;

        _classCallCheck(this, DashboardComponent);

        this.authservice = authservice;
        this.userservice = userservice;
        this.chatService = chatService;
        this.username = '';
        this.notCount = 0;
        this.notifications = [];
        this.users = [];
        this.chatService.recieveFriendRequests().subscribe(function (data) {
          _this6.userservice.getAllNotifications().subscribe(function (data) {
            console.log('get all notification from dashboard');
            console.log(data);
            console.log("==================================");

            if (localStorage.getItem('notification') != '') {
              console.log(JSON.parse(localStorage.getItem('notification')).length);
              _this6.notCount = data.message.length;
            } else {
              console.log("LOCAL STORAGE IS NULL");
              _this6.notCount = 0;
            }
          });

          _this6.chatService.acceptFriendRequestsNotify().subscribe(function (data) {
            console.log(data);

            if (localStorage.getItem('notification') != '') {
              console.log(JSON.parse(localStorage.getItem('notification')).length);
              _this6.notCount = JSON.parse(localStorage.getItem('notification')).length;
            } else {
              console.log("LOCAL STORAGE IS NULL");
              _this6.notCount = 0;
            }
          }); // console.log("asdfsdfs")
          // console.log(this.notCount)
          // if(!this.notifications.includes(data.uid)){
          //   this.notifications.push(data.uid)
          //   localStorage.setItem('notification', JSON.stringify(this.notifications))
          //   this.notCount += 1;
          // }
          // console.log("notification array status")
          // console.log(this.notifications)
          // this.userservice.getUserInfo(data.uid);

        });
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.users = [];
          this.username = this.userservice.getUserName(); // this.userservice.testMethod();

          console.log("=================================="); // if(localStorage.getItem('notification')!=''){
          //   console.log(localStorage.getItem('notification'))
          //   console.log(JSON.parse(localStorage.getItem('notification')).length);
          //   this.notCount = JSON.parse(localStorage.getItem('notification')).length
          // }else{
          //   console.log("LOCAL STORAGE IS NULL")
          //   this.notCount = 0
          // }
          // this.userservice.getAllNotifications().subscribe((data:any)=>{
          //   console.log('get all notification from dashboard')
          //   console.log(data)
          //   if(data.status){
          //     console.log("Inside true Status")
          //     console.log(data.message)
          //     localStorage.setItem('notification' , JSON.stringify(data.message));
          //   }else{
          //     localStorage.setItem('notification' , '');
          //   }
          //   // console.log(localStorage.setItem('notification' , JSON.stringify(data)));
          // })

          this.userservice.getAllNotifications().subscribe(function (data) {
            console.log("get all notification in Oninit of dashboard component");
            console.log(data);

            if (data.status) {
              data.message.forEach(function (element) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0,
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee2() {
                  var _this8 = this;

                  var response;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          console.log("an user");
                          response = this.userservice.getUserInfobyID(element.fromUID).subscribe(function (data) {
                            console.log("getUserbyID response");
                            console.log(data.message);

                            if (data.status) {
                              var picURL;

                              if (data.message.profilePicURL) {
                                picURL = data.message.profilePicURL;
                              } else if (data.message.photoURL) {
                                picURL = data.message.photoURL;
                              } else {
                                picURL = "../../../assets/Images/user_default.png";
                              }

                              _this8.users.push({
                                uid: data.message.uid,
                                displayName: data.message.displayName,
                                profilePicURL: picURL
                              });

                              console.log(_this8.users);
                              console.log(_this8.users);
                              localStorage.setItem('notification', JSON.stringify(_this8.users));
                              _this8.notCount = JSON.parse(localStorage.getItem('notification')).length;
                            } else {
                              console.log("No data");
                              localStorage.setItem('notification', '');
                              _this8.notCount = 0;
                            }
                          });

                        case 2:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });
            } else {
              localStorage.setItem('notification', '');
              _this7.notCount = 0;
              console.log(_this7.users.length);
            }
          });
        }
      }, {
        key: "sidebar_open",
        value: function sidebar_open() {
          jquery__WEBPACK_IMPORTED_MODULE_3__('.sidebar').css('left', '0');
          jquery__WEBPACK_IMPORTED_MODULE_3__('#body-wrap').addClass('body-wrapper');
          jquery__WEBPACK_IMPORTED_MODULE_3__('wrapper').css('overflow', 'hidden');
          console.log("hasodjas");
        }
      }, {
        key: "sidebar_close",
        value: function sidebar_close() {
          jquery__WEBPACK_IMPORTED_MODULE_3__('#body-wrap').removeClass('body-wrapper');
          jquery__WEBPACK_IMPORTED_MODULE_3__('.sidebar').css('left', '-350px');
          jquery__WEBPACK_IMPORTED_MODULE_3__('wrapper').css('overflow', 'auto');
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _pre_auth_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: src_app_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/content/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/content/friends-display/friends-display.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/content/friends-display/friends-display.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentFriendsDisplayFriendsDisplayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".friend-wrapper {\n  height: 100px;\n  width: 100%;\n  background-color: whitesmoke;\n  margin: 10px;\n}\n.friend-wrapper .friend {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.friend-wrapper .friend .friend-profile-pic {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.friend-wrapper .friend .friend-profile-pic .fp-inner-wrapper {\n  display: -webkit-box;\n  display: flex;\n  margin: auto;\n  width: 80px;\n  height: 100%;\n}\n.friend-wrapper .friend .friend-profile-pic .fp-inner-wrapper .image-container {\n  margin: auto;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.friend-wrapper .friend .friend-profile-pic .fp-inner-wrapper .image-container img {\n  height: 100%;\n  width: 100%;\n}\n.friend-wrapper .friend .friend-content {\n  -webkit-box-flex: 3;\n          flex: 3;\n  display: -webkit-box;\n  display: flex;\n}\n.friend-wrapper .friend .friend-content .fc-inner-wrapper {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n.friend-wrapper .friend .friend-buttons {\n  -webkit-box-flex: 3;\n          flex: 3;\n  display: -webkit-box;\n  display: flex;\n}\n.friend-wrapper .friend .friend-buttons .fb-wrapper {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9mcmllbmRzLWRpc3BsYXkvRTpcXHNvY2lhbC1jb25uZWN0L3NyY1xcYXBwXFxjb250ZW50XFxmcmllbmRzLWRpc3BsYXlcXGZyaWVuZHMtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9mcmllbmRzLWRpc3BsYXkvZnJpZW5kcy1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFFRiw0QkFBQTtFQUNFLFlBQUE7QUNBSjtBREVJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNBTjtBREVNO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0FDQVI7QURJUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0YsWUFBQTtBQ0ZWO0FER1U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUtBLGtCQUFBO0FDRFo7QURHWTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDRGQ7QURPTTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0xSO0FEUVE7RUFDSSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0FDTlo7QURVTTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtBQ1RSO0FEV1E7RUFDSSxZQUFBO0FDVFoiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2ZyaWVuZHMtZGlzcGxheS9mcmllbmRzLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJpZW5kLXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgXHJcbiAgICAuZnJpZW5kIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICBcclxuICAgICAgLmZyaWVuZC1wcm9maWxlLXBpYyB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIFxyXG4gICAgICAgIC5mcC1pbm5lci13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5mcmllbmQtY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xyXG4gIFxyXG4gICAgICAgIC5mYy1pbm5lci13cmFwcGVye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmZyaWVuZC1idXR0b25zIHtcclxuICAgICAgICBmbGV4OiAzO1xyXG4gICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICBcclxuICAgICAgICAuZmItd3JhcHBlcntcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiLCIuZnJpZW5kLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmZyaWVuZC13cmFwcGVyIC5mcmllbmQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZyaWVuZC13cmFwcGVyIC5mcmllbmQgLmZyaWVuZC1wcm9maWxlLXBpYyB7XG4gIGZsZXg6IDE7XG59XG4uZnJpZW5kLXdyYXBwZXIgLmZyaWVuZCAuZnJpZW5kLXByb2ZpbGUtcGljIC5mcC1pbm5lci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZyaWVuZC13cmFwcGVyIC5mcmllbmQgLmZyaWVuZC1wcm9maWxlLXBpYyAuZnAtaW5uZXItd3JhcHBlciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmZyaWVuZC13cmFwcGVyIC5mcmllbmQgLmZyaWVuZC1wcm9maWxlLXBpYyAuZnAtaW5uZXItd3JhcHBlciAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZnJpZW5kLXdyYXBwZXIgLmZyaWVuZCAuZnJpZW5kLWNvbnRlbnQge1xuICBmbGV4OiAzO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZyaWVuZC13cmFwcGVyIC5mcmllbmQgLmZyaWVuZC1jb250ZW50IC5mYy1pbm5lci13cmFwcGVyIHtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG59XG4uZnJpZW5kLXdyYXBwZXIgLmZyaWVuZCAuZnJpZW5kLWJ1dHRvbnMge1xuICBmbGV4OiAzO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZyaWVuZC13cmFwcGVyIC5mcmllbmQgLmZyaWVuZC1idXR0b25zIC5mYi13cmFwcGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/content/friends-display/friends-display.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/content/friends-display/friends-display.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FriendsDisplayComponent */

  /***/
  function srcAppContentFriendsDisplayFriendsDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsDisplayComponent", function () {
      return FriendsDisplayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");

    var FriendsDisplayComponent =
    /*#__PURE__*/
    function () {
      function FriendsDisplayComponent(userServeice) {
        _classCallCheck(this, FriendsDisplayComponent);

        this.userServeice = userServeice;
        this.friends = [];
      }

      _createClass(FriendsDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.userServeice.getAllFriends().subscribe(function (data) {
            if (data.status) {
              console.log(data.message);
              var tempfriends = data.message;
              var details = data.roomData;
              tempfriends.forEach(function (friend) {
                console.log("object");
                console.log(friend);
                var temp = details.findIndex(function (d) {
                  return d.uid == friend.uid;
                });
                Object.assign(friend, {
                  personalRoomID: details[temp].personalRoomID,
                  timestamp: details[temp].timestamp
                });
                console.log("FRIEND AFTER");
                console.log(friend);

                _this9.friends.push(friend);
              }); // this.friends = data.message
            } else {
              console.log("No friends Found");
            }
          });
        }
      }]);

      return FriendsDisplayComponent;
    }();

    FriendsDisplayComponent.ctorParameters = function () {
      return [{
        type: src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    FriendsDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-friends-display',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friends-display.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/friends-display/friends-display.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friends-display.component.scss */
      "./src/app/content/friends-display/friends-display.component.scss")).default]
    })], FriendsDisplayComponent);
    /***/
  },

  /***/
  "./src/app/content/friends/friends.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/content/friends/friends.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentFriendsFriendsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".friend-wrapper {\n  height: 100px;\n  width: 100%;\n  background-color: whitesmoke;\n  margin: 10px;\n}\n.friend-wrapper .friend {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.friend-wrapper .friend .friend-profile-pic {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.friend-wrapper .friend .friend-profile-pic .fp-inner-wrapper {\n  display: -webkit-box;\n  display: flex;\n  margin: auto;\n  width: 80px;\n  height: 100%;\n}\n.friend-wrapper .friend .friend-profile-pic .fp-inner-wrapper .image-container {\n  margin: auto;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.friend-wrapper .friend .friend-profile-pic .fp-inner-wrapper .image-container img {\n  height: 100%;\n  width: 100%;\n}\n.friend-wrapper .friend .friend-content {\n  -webkit-box-flex: 3;\n          flex: 3;\n  display: -webkit-box;\n  display: flex;\n}\n.friend-wrapper .friend .friend-content .fc-inner-wrapper {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n.friend-wrapper .friend .friend-buttons {\n  -webkit-box-flex: 3;\n          flex: 3;\n  display: -webkit-box;\n  display: flex;\n}\n.friend-wrapper .friend .friend-buttons .fb-wrapper {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9mcmllbmRzL0U6XFxzb2NpYWwtY29ubmVjdC9zcmNcXGFwcFxcY29udGVudFxcZnJpZW5kc1xcZnJpZW5kcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9mcmllbmRzL2ZyaWVuZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUVGLDRCQUFBO0VBQ0UsWUFBQTtBQ0FGO0FERUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0FKO0FERUk7RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNBTjtBRElNO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDRixZQUFBO0FDRlI7QURHUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBS0Esa0JBQUE7QUNEVjtBREdVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNEWjtBRE9JO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDTE47QURRTTtFQUNJLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7QUNOVjtBRFVJO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0FDVE47QURXTTtFQUNJLFlBQUE7QUNUViIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvZnJpZW5kcy9mcmllbmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyaWVuZC13cmFwcGVyIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBtYXJnaW46IDEwcHg7XHJcblxyXG4gIC5mcmllbmQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5mcmllbmQtcHJvZmlsZS1waWMge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuXHJcbiAgICAgIC5mcC1pbm5lci13cmFwcGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mcmllbmQtY29udGVudCB7XHJcbiAgICAgIGZsZXg6IDM7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xyXG5cclxuICAgICAgLmZjLWlubmVyLXdyYXBwZXJ7XHJcbiAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZyaWVuZC1idXR0b25zIHtcclxuICAgICAgZmxleDogMztcclxuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIC5mYi13cmFwcGVye1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5mcmllbmQtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBtYXJnaW46IDEwcHg7XG59XG4uZnJpZW5kLXdyYXBwZXIgLmZyaWVuZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZnJpZW5kLXdyYXBwZXIgLmZyaWVuZCAuZnJpZW5kLXByb2ZpbGUtcGljIHtcbiAgZmxleDogMTtcbn1cbi5mcmllbmQtd3JhcHBlciAuZnJpZW5kIC5mcmllbmQtcHJvZmlsZS1waWMgLmZwLWlubmVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZnJpZW5kLXdyYXBwZXIgLmZyaWVuZCAuZnJpZW5kLXByb2ZpbGUtcGljIC5mcC1pbm5lci13cmFwcGVyIC5pbWFnZS1jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZnJpZW5kLXdyYXBwZXIgLmZyaWVuZCAuZnJpZW5kLXByb2ZpbGUtcGljIC5mcC1pbm5lci13cmFwcGVyIC5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5mcmllbmQtd3JhcHBlciAuZnJpZW5kIC5mcmllbmQtY29udGVudCB7XG4gIGZsZXg6IDM7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZnJpZW5kLXdyYXBwZXIgLmZyaWVuZCAuZnJpZW5kLWNvbnRlbnQgLmZjLWlubmVyLXdyYXBwZXIge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5mcmllbmQtd3JhcHBlciAuZnJpZW5kIC5mcmllbmQtYnV0dG9ucyB7XG4gIGZsZXg6IDM7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZnJpZW5kLXdyYXBwZXIgLmZyaWVuZCAuZnJpZW5kLWJ1dHRvbnMgLmZiLXdyYXBwZXIge1xuICBtYXJnaW46IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/content/friends/friends.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/content/friends/friends.component.ts ***!
    \******************************************************/

  /*! exports provided: FriendsComponent */

  /***/
  function srcAppContentFriendsFriendsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsComponent", function () {
      return FriendsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var src_app_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/chat.service */
    "./src/app/chat.service.ts");

    var FriendsComponent =
    /*#__PURE__*/
    function () {
      function FriendsComponent(userService, chatService) {
        var _this10 = this;

        _classCallCheck(this, FriendsComponent);

        this.userService = userService;
        this.chatService = chatService;
        this.users = [];
        this.chatService.recieveAddFriendAcknowledgement().subscribe(function (data) {
          console.log("ACKNOWLEDGEMENT DATA");
          console.log(data);

          var index = _this10.users.findIndex(function (p) {
            return p.uid == data.uid;
          });

          console.log("index found is : ", index);
          console.log(_this10.users[index]);
        });
      }

      _createClass(FriendsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.currentUser = JSON.parse(localStorage.getItem('user'));
          this.userService.getAllUsers().subscribe(function (data) {
            // console.log(data);
            _this11.users = data.message;
            console.log(_this11.users);
          });
        }
      }, {
        key: "addFriendButtonClicked",
        value: function addFriendButtonClicked(data) {
          console.log(data.target.value);
          this.chatService.sendFriendRequest(data.target.value);
        }
      }]);

      return FriendsComponent;
    }();

    FriendsComponent.ctorParameters = function () {
      return [{
        type: src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
      }];
    };

    FriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-friends',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friends.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/friends/friends.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friends.component.scss */
      "./src/app/content/friends/friends.component.scss")).default]
    })], FriendsComponent);
    /***/
  },

  /***/
  "./src/app/content/notifications/notifications.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/content/notifications/notifications.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentNotificationsNotificationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".notification-wrapper {\n  height: 100px;\n  width: 100%;\n  background-color: whitesmoke;\n  margin: 10px;\n}\n.notification-wrapper .notification {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.notification-wrapper .notification .notification-profile-pic {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.notification-wrapper .notification .notification-profile-pic .fp-inner-wrapper {\n  display: -webkit-box;\n  display: flex;\n  margin: auto;\n  width: 80px;\n  height: 100%;\n}\n.notification-wrapper .notification .notification-profile-pic .fp-inner-wrapper .image-container {\n  margin: auto;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.notification-wrapper .notification .notification-profile-pic .fp-inner-wrapper .image-container img {\n  height: 100%;\n  width: 100%;\n}\n.notification-wrapper .notification .notification-content {\n  -webkit-box-flex: 3;\n          flex: 3;\n  display: -webkit-box;\n  display: flex;\n}\n.notification-wrapper .notification .notification-content .fc-inner-wrapper {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n.notification-wrapper .notification .notification-buttons {\n  -webkit-box-flex: 3;\n          flex: 3;\n  display: -webkit-box;\n  display: flex;\n}\n.notification-wrapper .notification .notification-buttons .fb-wrapper {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9ub3RpZmljYXRpb25zL0U6XFxzb2NpYWwtY29ubmVjdC9zcmNcXGFwcFxcY29udGVudFxcbm90aWZpY2F0aW9uc1xcbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUVGLDRCQUFBO0VBQ0UsWUFBQTtBQ0FKO0FERUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0FOO0FERU07RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNBUjtBRElRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDRixZQUFBO0FDRlY7QURHVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBS0Esa0JBQUE7QUNEWjtBREdZO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNEZDtBRE9NO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDTFI7QURRUTtFQUNJLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7QUNOWjtBRFVNO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0FDVFI7QURXUTtFQUNJLFlBQUE7QUNUWiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGlmaWNhdGlvbi13cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIFxyXG4gICAgLm5vdGlmaWNhdGlvbiB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICAgIC5ub3RpZmljYXRpb24tcHJvZmlsZS1waWMge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBcclxuICAgICAgICAuZnAtaW5uZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIFxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAubm90aWZpY2F0aW9uLWNvbnRlbnQge1xyXG4gICAgICAgIGZsZXg6IDM7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcclxuICBcclxuICAgICAgICAuZmMtaW5uZXItd3JhcHBlcntcclxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5ub3RpZmljYXRpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgZmxleDogMztcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICAgICAgLmZiLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIiwiLm5vdGlmaWNhdGlvbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5ub3RpZmljYXRpb24td3JhcHBlciAubm90aWZpY2F0aW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ub3RpZmljYXRpb24td3JhcHBlciAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24tcHJvZmlsZS1waWMge1xuICBmbGV4OiAxO1xufVxuLm5vdGlmaWNhdGlvbi13cmFwcGVyIC5ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1wcm9maWxlLXBpYyAuZnAtaW5uZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ub3RpZmljYXRpb24td3JhcHBlciAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24tcHJvZmlsZS1waWMgLmZwLWlubmVyLXdyYXBwZXIgLmltYWdlLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5ub3RpZmljYXRpb24td3JhcHBlciAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24tcHJvZmlsZS1waWMgLmZwLWlubmVyLXdyYXBwZXIgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5vdGlmaWNhdGlvbi13cmFwcGVyIC5ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1jb250ZW50IHtcbiAgZmxleDogMztcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ub3RpZmljYXRpb24td3JhcHBlciAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24tY29udGVudCAuZmMtaW5uZXItd3JhcHBlciB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLm5vdGlmaWNhdGlvbi13cmFwcGVyIC5ub3RpZmljYXRpb24gLm5vdGlmaWNhdGlvbi1idXR0b25zIHtcbiAgZmxleDogMztcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ub3RpZmljYXRpb24td3JhcHBlciAubm90aWZpY2F0aW9uIC5ub3RpZmljYXRpb24tYnV0dG9ucyAuZmItd3JhcHBlciB7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/content/notifications/notifications.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/content/notifications/notifications.component.ts ***!
    \******************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppContentNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/chat.service */
    "./src/app/chat.service.ts");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");

    var NotificationsComponent =
    /*#__PURE__*/
    function () {
      function NotificationsComponent(chatService, userService) {
        var _this12 = this;

        _classCallCheck(this, NotificationsComponent);

        this.chatService = chatService;
        this.userService = userService;
        this.notifications = [];
        this.users = [];
        this.chatService.acceptFriendRequestsNotify().subscribe(function (data) {
          console.log("Frend Req accepted Acknowledgement"); // console.log(data)
          // console.log(this.users)

          var index = _this12.users.findIndex(function (p) {
            return p.uid == data.uid;
          });

          console.log("index found is : ", index);

          var newUser = _this12.users.splice(index, 1);

          localStorage.setItem('notification', JSON.stringify(newUser));
        });
        this.chatService.recieveFriendRequests().subscribe(function (data) {
          _this12.userService.getAllNotifications().subscribe(function (data) {
            console.log("get all notification");
            console.log(data);

            if (data.status) {
              data.message.forEach(function (element) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this12, void 0, void 0,
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee3() {
                  var _this13 = this;

                  var response;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          console.log("an user");
                          response = this.userService.getUserInfobyID(element.fromUID).subscribe(function (data) {
                            console.log("getUserbyID response");
                            console.log(data.message);

                            if (data.status) {
                              var picURL;

                              if (data.message.profilePicURL) {
                                picURL = data.message.profilePicURL;
                              } else if (data.message.photoURL) {
                                picURL = data.message.photoURL;
                              } else {
                                picURL = "../../../assets/Images/user_default.png";
                              }

                              var repeat = 1;

                              _this13.users.forEach(function (doc) {
                                if (doc.uid == data.message.uid) {
                                  repeat = 0;
                                }
                              });

                              if (repeat) {
                                _this13.users.push({
                                  uid: data.message.uid,
                                  displayName: data.message.displayName,
                                  profilePicURL: picURL
                                });
                              }

                              console.log(_this13.users);
                              localStorage.setItem('notification', JSON.stringify(_this13.users));
                            } else {
                              console.log("No data");
                              localStorage.setItem('notification', JSON.stringify(_this13.users));
                            }
                          });

                        case 2:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));
              });
            } else {
              console.log(_this12.users.length);
            }
          });
        });
      }

      _createClass(NotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          // this.notifications = JSON.parse(localStorage.getItem("notification"));
          // console.log(this.notifications);
          console.log("On Init of notification component");
          console.log(localStorage.getItem('notification'));

          if (localStorage.getItem('notification')) {
            var localusers = JSON.parse(localStorage.getItem('notification'));
            console.log("The Local users");
            console.log(localusers);
            this.users = [];
            localusers.forEach(function (localuser) {
              var picURL;

              if (localuser.profilePicURL) {
                picURL = localuser.profilePicURL;
              } else if (localuser.photoURL) {
                picURL = localuser.photoURL;
              } else {
                picURL = "../../../assets/Images/user_default.png";
              } // var repeat = 1;
              // this.users.forEach(doc=>{
              //   if(doc.uid == localuser.uid){
              //     repeat = 0;
              //   }
              // })


              if (1) {
                _this14.users.push({
                  uid: localuser.uid,
                  displayName: localuser.displayName,
                  profilePicURL: picURL
                });
              }
            });
          } else {
            this.users = [];
          } //               console.log(this.users);
          // this.userService.getAllNotifications().subscribe((data: any) => {
          //   console.log("get all notification");
          //   console.log(data);
          //   if (data.status) {
          //     data.message.forEach(async element => {
          //       console.log("an user");
          //       var response = this.userService
          //         .getUserInfobyID(element.fromUID)
          //         .subscribe((data: any) => {
          //           console.log("getUserbyID response");
          //           console.log(data.message);
          //           if (data.status) {
          //             var picURL;
          //             if (data.message.profilePicURL) {
          //               picURL = data.message.profilePicURL;
          //             } else if (data.message.photoURL) {
          //               picURL = data.message.photoURL;
          //             } else {
          //               picURL = "../../../assets/Images/user_default.png";
          //             }
          //             this.users.push({
          //               uid: data.message.uid,
          //               displayName: data.message.displayName,
          //               profilePicURL: picURL
          //             });
          //             console.log(this.users);
          //           } else {
          //             console.log("No data");
          //           }
          //         });
          //     });
          //   }else{
          //     console.log(this.users.length)
          //   }
          // });
          // this.userService.getUserInfo(this.notifications).subscribe((data:any)=>{
          //   console.log(data.message)
          // })
          // console.log("got response")

        }
      }, {
        key: "deleteRequestButtonClicked",
        value: function deleteRequestButtonClicked(event) {
          console.log(event.target.value);
        }
      }, {
        key: "acceptRequestButtonClicked",
        value: function acceptRequestButtonClicked(event) {
          console.log(event.target.value);
          this.chatService.acceptFriendRequest(event.target.value);
        }
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent.ctorParameters = function () {
      return [{
        type: src_app_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-notifications",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/notifications/notifications.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.component.scss */
      "./src/app/content/notifications/notifications.component.scss")).default]
    })], NotificationsComponent);
    /***/
  },

  /***/
  "./src/app/content/profile/profile.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/content/profile/profile.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContentProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image-section {\n  margin-top: 2em;\n}\n.image-section .image-container {\n  width: 150px;\n  height: 150px;\n  overflow: hidden;\n  border-radius: 50%;\n}\n.image-section .image-container img {\n  height: 100%;\n  width: 100%;\n}\n.bio {\n  margin-top: 3em;\n}\n.bio .bio-content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 10px;\n}\n.bio .bio-content {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9wcm9maWxlL0U6XFxzb2NpYWwtY29ubmVjdC9zcmNcXGFwcFxcY29udGVudFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGVudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFLQSxrQkFBQTtBQ0NSO0FERVE7RUFFSSxZQUFBO0VBQ0EsV0FBQTtBQ0RaO0FEUUE7RUFDSSxlQUFBO0FDTEo7QURPSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0FDTFI7QURRSTtFQUNJLGlCQUFBO0FDTlIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1zZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG5cclxuICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgXHJcbiAgICBcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uYmlve1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG5cclxuICAgIC5iaW8tY29udGVudC13cmFwcGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmlvLWNvbnRlbnR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn0iLCIuaW1hZ2Utc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cbi5pbWFnZS1zZWN0aW9uIC5pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaW1hZ2Utc2VjdGlvbiAuaW1hZ2UtY29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iaW8ge1xuICBtYXJnaW4tdG9wOiAzZW07XG59XG4uYmlvIC5iaW8tY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5iaW8gLmJpby1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/content/profile/profile.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/content/profile/profile.component.ts ***!
    \******************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppContentProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(userService) {
        _classCallCheck(this, ProfileComponent);

        this.userService = userService;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          console.log("localstorage"); // localStorage.removeItem('profileurl')

          console.log(localStorage.getItem("profileurl"));
          this.isImageProper = false;
          this.user = JSON.parse(localStorage.getItem("user"));
          this.userService.getUserDetails().subscribe(function (res) {
            // console.log(res.message);
            if (res.status) {
              // console.log(JSON.parse(localStorage.getItem("user")))
              _this15.userDetails = res.message;
              console.log(_this15.userDetails);

              _this15.bioForm.patchValue({
                address: _this15.userDetails.address,
                city: _this15.userDetails.city,
                birthdate: _this15.userDetails.birthdate,
                contact: _this15.userDetails.contactno,
                gender: _this15.userDetails.gender
              });

              console.log(_this15.userDetails.profilePicURL);

              if (_this15.userDetails.profilePicURL == null) {
                _this15.profilePicUrl = _this15.user.photoURL;
              } else {
                _this15.profilePicUrl = _this15.userDetails.profilePicURL;
              }
            }
          });
          this.bioForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
          });
        }
      }, {
        key: "openModal",
        value: function openModal() {
          $("#bio-modal").modal("show");
        }
      }, {
        key: "uploadButtonClicked",
        value: function uploadButtonClicked(event) {
          var _this16 = this;

          console.log(this.user);
          this.userService.uploadimage(this.imgfile, this.user.uid).then(function (data) {
            console.log("url is");
            console.log(data);
            console.log("after upload image");
            data.subscribe(function (mess) {
              // console.log(localStorage.getItem("profileurl"));
              _this16.userService.setPhotoUrl(mess).subscribe(function (res) {
                console.log("setPhotourl subscribed with URL: " + res.message.profilePicURL);
                _this16.profilePicUrl = res.message.profilePicURL; // localStorage.removeItem("profileurl");
              });
            });
          }); // console.log("button click data")
          // console.log(data);
        }
      }, {
        key: "Imageupload",
        value: function Imageupload(event) {
          console.log(event.target.files);
          this.imgfile = event.target.files[0];

          if (this.imgfile.type == "image/png" || this.imgfile.type == "image/jpeg") {
            this.isImageProper = true;
          } else {
            console.log("select a image file");
          }
        }
      }, {
        key: "onbioformSubmitted",
        value: function onbioformSubmitted() {
          var _this17 = this;

          console.log(this.bioForm.value);
          this.userService.setUserDetails(this.bioForm.value).subscribe(function (res) {
            if (res.status) {
              console.log("post successfull");

              _this17.userService.getUserDetails().subscribe(function (res) {
                console.log(res.message);

                if (res.status) {
                  // console.log(JSON.parse(localStorage.getItem("user")))
                  _this17.userDetails = res.message;
                }
              });
            }
          }); // this.bioForm.reset();

          $("#bio-modal").modal("hide");
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/content/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/content/profile/profile.component.scss")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/not-authorized/not-authorized.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/not-authorized/not-authorized.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotAuthorizedNotAuthorizedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1hdXRob3JpemVkL25vdC1hdXRob3JpemVkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/not-authorized/not-authorized.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/not-authorized/not-authorized.component.ts ***!
    \************************************************************/

  /*! exports provided: NotAuthorizedComponent */

  /***/
  function srcAppNotAuthorizedNotAuthorizedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotAuthorizedComponent", function () {
      return NotAuthorizedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotAuthorizedComponent =
    /*#__PURE__*/
    function () {
      function NotAuthorizedComponent() {
        _classCallCheck(this, NotAuthorizedComponent);
      }

      _createClass(NotAuthorizedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotAuthorizedComponent;
    }();

    NotAuthorizedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-authorized',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-authorized.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/not-authorized/not-authorized.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-authorized.component.scss */
      "./src/app/not-authorized/not-authorized.component.scss")).default]
    })], NotAuthorizedComponent);
    /***/
  },

  /***/
  "./src/app/pre-auth/forgot-password/forgot-password.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/pre-auth/forgot-password/forgot-password.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreAuthForgotPasswordForgotPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\n.cairo {\n  font-family: \"Cairo\", sans-serif;\n}\n.archivo {\n  font-family: \"Archivo\", sans-serif;\n}\n.auth-block h3 {\n  font-size: 2em;\n  font-weight: 600;\n  color: #fd852e;\n  margin-bottom: 1em;\n  text-shadow: 0px 1px #fedac0;\n}\n.auth-block input {\n  border: 1px solid #fd852e;\n  color: black;\n}\n.auth-block input:focus {\n  box-shadow: 0 0 0 0.2rem #fedac0;\n}\n.auth-block .reset {\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: 50%;\n  margin-top: 0.5em;\n  text-align: center;\n  background-color: #fd852e;\n}\n.auth-block .reset:focus {\n  box-shadow: 0 0 0 0.1rem #e1d8e8;\n}\n.redirect, .forgot-password span {\n  cursor: pointer;\n  color: #fd852e;\n}\n.redirect:focus, .forgot-password span:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWF1dGgvZm9yZ290LXBhc3N3b3JkL0U6XFxzb2NpYWwtY29ubmVjdC9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9wcmUtYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmUtYXV0aC9mb3Jnb3QtcGFzc3dvcmQvRTpcXHNvY2lhbC1jb25uZWN0L3NyY1xcYXBwXFxwcmUtYXV0aFxcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFTQTtFQUNBLGdDQUFBO0FDUEE7QURVQTtFQUNJLGtDQUFBO0FDUEo7QUNGSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNGSlU7RUVLVixrQkFBQTtFQUNBLDRCQUFBO0FES1I7QUNGSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBRElSO0FDRkk7RUFDSSxnQ0FBQTtBRElSO0FDREk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkZ4QlU7QUMyQmxCO0FDREk7RUFDSSxnQ0FBQTtBREdSO0FDR0E7RUFDUSxlQUFBO0VBQ0EsY0ZuQ1U7QUNtQ2xCO0FDR0E7RUFDSSxhQUFBO0FEQUoiLCJmaWxlIjoic3JjL2FwcC9wcmUtYXV0aC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbiRwcmltYXJ5LWNvbG9yOiAjNkMzQzhDO1xuJHNlY29uZGFyeS1jb2xvcjogI2ZkODUyZTtcbiRwcmltYXJ5LWxpZ2h0ZXN0LWNvbG9yOiNlMWQ4ZTg7XG4kc2Vjb25kYXJ5LWxpZ2h0ZXN0LWNvbG9yOiNmZWRhYzA7XG4kcHJpbWFyeS1kYXJrLWNvbG9yOiM0YTJhNjI7XG5cbi5jYWlyb3tcbmZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uYXJjaGl2b3tcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdm8nLCBzYW5zLXNlcmlmO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5jYWlybyB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5hcmNoaXZvIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl2b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYXV0aC1ibG9jayBoMyB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI2ZkODUyZTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAjZmVkYWMwO1xufVxuLmF1dGgtYmxvY2sgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmQ4NTJlO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYXV0aC1ibG9jayBpbnB1dDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjZmVkYWMwO1xufVxuLmF1dGgtYmxvY2sgLnJlc2V0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDg1MmU7XG59XG4uYXV0aC1ibG9jayAucmVzZXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gI2UxZDhlODtcbn1cblxuLnJlZGlyZWN0LCAuZm9yZ290LXBhc3N3b3JkIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmQ4NTJlO1xufVxuXG4ucmVkaXJlY3Q6Zm9jdXMsIC5mb3Jnb3QtcGFzc3dvcmQgc3Bhbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG5cclxuLmF1dGgtYmxvY2t7XHJcblxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6MHB4IDFweCAkc2Vjb25kYXJ5LWxpZ2h0ZXN0LWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0e1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgaW5wdXQ6Zm9jdXN7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICRzZWNvbmRhcnktbGlnaHRlc3QtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc2V0e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG4gICAgLnJlc2V0OmZvY3Vze1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAkcHJpbWFyeS1saWdodGVzdC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgIFxyXG59XHJcblxyXG4ucmVkaXJlY3QsLmZvcmdvdC1wYXNzd29yZCBzcGFue1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxufVxyXG5cclxuLnJlZGlyZWN0OmZvY3VzLC5mb3Jnb3QtcGFzc3dvcmQgc3Bhbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pre-auth/forgot-password/forgot-password.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pre-auth/forgot-password/forgot-password.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppPreAuthForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/pre-auth/shared/services/auth.service.ts");

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent(authService) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.authService = authService;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/forgot-password/forgot-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.scss */
      "./src/app/pre-auth/forgot-password/forgot-password.component.scss")).default]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/pre-auth/log-in/log-in.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pre-auth/log-in/log-in.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreAuthLogInLogInComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\n.cairo {\n  font-family: \"Cairo\", sans-serif;\n}\n.archivo {\n  font-family: \"Archivo\", sans-serif;\n}\n.btn-google {\n  background-color: #dc4935;\n  color: white;\n}\n.btn-google i {\n  margin-right: 5px;\n}\n.auth-block h3 {\n  font-size: 2em;\n  font-weight: 600;\n  color: #fd852e;\n  margin-bottom: 1em;\n  text-shadow: 2px 2px #fedac0;\n}\n.auth-block .password-input {\n  width: 100%;\n  border-top: 1px solid #fd852e;\n  border-left: 1px solid #fd852e;\n  border-bottom: 1px solid #fd852e;\n  border-right: none !important;\n  color: black;\n}\n.auth-block input {\n  width: 100%;\n  border: 1px solid #fd852e;\n  color: black;\n}\n.auth-block .pass-icon {\n  border-top: 1px solid #fd852e;\n  border-right: 1px solid #fd852e;\n  border-bottom: 1px solid #fd852e;\n  font-size: 1.5em;\n  margin: 0;\n  padding: 8px 8px 0 0;\n  cursor: pointer;\n  color: #fd852e;\n}\n.auth-block .email-alert {\n  display: none;\n}\n.auth-block input:focus {\n  box-shadow: none;\n}\n.auth-block input:focus .input-wrap {\n  box-shadow: 0 0 0 0.2rem #fedac0;\n}\n.auth-block .log-in {\n  font-weight: 600;\n  border: none;\n  width: 50%;\n  margin-top: 0.5em;\n  text-align: center;\n  background-color: #fd852e;\n}\n.auth-block .log-in:focus {\n  box-shadow: 0 0 0 0.1rem #e1d8e8;\n}\n.auth-block .or {\n  width: 100%;\n  position: relative;\n}\n.auth-block .or::before {\n  position: absolute;\n  height: 2px;\n  background-color: #fd852e;\n  content: \"\";\n  left: 0;\n  bottom: 50%;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n  width: 40%;\n}\n.auth-block .or::after {\n  position: absolute;\n  height: 2px;\n  background-color: #fd852e;\n  content: \"\";\n  right: 0;\n  bottom: 50%;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n  width: 40%;\n}\n.auth-block .form-group {\n  margin-bottom: 50px;\n}\n.redirect, .forgot-password span {\n  cursor: pointer;\n  color: #fd852e;\n}\n.redirect:focus, .forgot-password span:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWF1dGgvbG9nLWluL0U6XFxzb2NpYWwtY29ubmVjdC9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9wcmUtYXV0aC9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmUtYXV0aC9sb2ctaW4vRTpcXHNvY2lhbC1jb25uZWN0L3NyY1xcYXBwXFxwcmUtYXV0aFxcbG9nLWluXFxsb2ctaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFTQTtFQUNBLGdDQUFBO0FDUEE7QURVQTtFQUNJLGtDQUFBO0FDUEo7QUNMQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBRFFKO0FDTkk7RUFDSSxpQkFBQTtBRFFSO0FDRkk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRlpVO0VFYVYsa0JBQUE7RUFDQSw0QkFBQTtBREtSO0FDQUk7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FERVI7QUNDSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUVBLFlBQUE7QURBUjtBQ0dJO0VBQ0ksNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBRUEsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFFQSxlQUFBO0VBQ0EsY0Y3Q1U7QUMwQ2xCO0FDTUk7RUFDSSxhQUFBO0FESlI7QUNPSTtFQUNJLGdCQUFBO0FETFI7QUNPSTtFQUNJLGdDQUFBO0FETFI7QUNRSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJGakVVO0FDMkRsQjtBQ1FJO0VBQ0ksZ0NBQUE7QUROUjtBQ1VJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FEUlI7QUNXSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRmhGVTtFRWlGVixXQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsVUFBQTtBRFRSO0FDV0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkYxRlU7RUUyRlYsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFVBQUE7QURUUjtBQ1lJO0VBQ0ksbUJBQUE7QURWUjtBQ2dCQTtFQUNRLGVBQUE7RUFDQSxjRjNHVTtBQzhGbEI7QUNnQkE7RUFDSSxhQUFBO0FEYkoiLCJmaWxlIjoic3JjL2FwcC9wcmUtYXV0aC9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbiRwcmltYXJ5LWNvbG9yOiAjNkMzQzhDO1xuJHNlY29uZGFyeS1jb2xvcjogI2ZkODUyZTtcbiRwcmltYXJ5LWxpZ2h0ZXN0LWNvbG9yOiNlMWQ4ZTg7XG4kc2Vjb25kYXJ5LWxpZ2h0ZXN0LWNvbG9yOiNmZWRhYzA7XG4kcHJpbWFyeS1kYXJrLWNvbG9yOiM0YTJhNjI7XG5cbi5jYWlyb3tcbmZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uYXJjaGl2b3tcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdm8nLCBzYW5zLXNlcmlmO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5jYWlybyB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5hcmNoaXZvIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl2b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYnRuLWdvb2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzQ5MzU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5idG4tZ29vZ2xlIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmF1dGgtYmxvY2sgaDMge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZDg1MmU7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggI2ZlZGFjMDtcbn1cbi5hdXRoLWJsb2NrIC5wYXNzd29yZC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZkODUyZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmQ4NTJlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZkODUyZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5hdXRoLWJsb2NrIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDg1MmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5hdXRoLWJsb2NrIC5wYXNzLWljb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZkODUyZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZkODUyZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZDg1MmU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogOHB4IDhweCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZDg1MmU7XG59XG4uYXV0aC1ibG9jayAuZW1haWwtYWxlcnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmF1dGgtYmxvY2sgaW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmF1dGgtYmxvY2sgaW5wdXQ6Zm9jdXMgLmlucHV0LXdyYXAge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gI2ZlZGFjMDtcbn1cbi5hdXRoLWJsb2NrIC5sb2ctaW4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDg1MmU7XG59XG4uYXV0aC1ibG9jayAubG9nLWluOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICNlMWQ4ZTg7XG59XG4uYXV0aC1ibG9jayAub3Ige1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmF1dGgtYmxvY2sgLm9yOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ4NTJlO1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gIHdpZHRoOiA0MCU7XG59XG4uYXV0aC1ibG9jayAub3I6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkODUyZTtcbiAgY29udGVudDogXCJcIjtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgd2lkdGg6IDQwJTtcbn1cbi5hdXRoLWJsb2NrIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnJlZGlyZWN0LCAuZm9yZ290LXBhc3N3b3JkIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmQ4NTJlO1xufVxuXG4ucmVkaXJlY3Q6Zm9jdXMsIC5mb3Jnb3QtcGFzc3dvcmQgc3Bhbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG4uYnRuLWdvb2dsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzQ5MzU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgaXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmF1dGgtYmxvY2t7XHJcblxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggJHNlY29uZGFyeS1saWdodGVzdC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgIC5wYXNzd29yZC1pbnB1dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgICAgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICAgICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICAgICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgXHJcbiAgICAgICAgY29sb3I6IGJsYWNrOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5wYXNzLWljb257ICBcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgICAgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAgICAkc2Vjb25kYXJ5LWNvbG9yOyAgICBcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgICAgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHggMCAwIDtcclxuXHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbWFpbC1hbGVydHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0OmZvY3Vze1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBpbnB1dDpmb2N1cyAuaW5wdXQtd3JhcHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gJHNlY29uZGFyeS1saWdodGVzdC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAubG9nLWlue1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICB9XHJcbiAgICAubG9nLWluOmZvY3Vze1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAkcHJpbWFyeS1saWdodGVzdC1jb2xvcjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLm9ye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAub3I6OmJlZm9yZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgICAub3I6OmFmdGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgIFxyXG59XHJcblxyXG4ucmVkaXJlY3QsLmZvcmdvdC1wYXNzd29yZCBzcGFue1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxufVxyXG5cclxuLnJlZGlyZWN0OmZvY3VzLC5mb3Jnb3QtcGFzc3dvcmQgc3Bhbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pre-auth/log-in/log-in.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pre-auth/log-in/log-in.component.ts ***!
    \*****************************************************/

  /*! exports provided: LogInComponent */

  /***/
  function srcAppPreAuthLogInLogInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogInComponent", function () {
      return LogInComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/pre-auth/shared/services/auth.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);

    var LogInComponent =
    /*#__PURE__*/
    function () {
      function LogInComponent(authService) {
        _classCallCheck(this, LogInComponent);

        this.authService = authService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,12}")])
        });
      }

      _createClass(LogInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "eyeclick",
        value: function eyeclick() {
          jquery__WEBPACK_IMPORTED_MODULE_4__('.fa-eye').toggleClass('fa-eye-slash');

          if (jquery__WEBPACK_IMPORTED_MODULE_4__('#eye').attr("type") == "password") {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#eye').attr("type", "text");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#eye').attr("type", "password");
          }
        }
      }, {
        key: "inputValidate",
        value: function inputValidate() {}
      }]);

      return LogInComponent;
    }();

    LogInComponent.ctorParameters = function () {
      return [{
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-log-in",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./log-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/log-in/log-in.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./log-in.component.scss */
      "./src/app/pre-auth/log-in/log-in.component.scss")).default]
    })], LogInComponent);
    /***/
  },

  /***/
  "./src/app/pre-auth/pre-auth-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pre-auth/pre-auth-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: PreAuthRoutingModule */

  /***/
  function srcAppPreAuthPreAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreAuthRoutingModule", function () {
      return PreAuthRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./log-in/log-in.component */
    "./src/app/pre-auth/log-in/log-in.component.ts");
    /* harmony import */


    var _shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/guard/secure-inner-pages.guard */
    "./src/app/pre-auth/shared/guard/secure-inner-pages.guard.ts");
    /* harmony import */


    var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-in/sign-in.component */
    "./src/app/pre-auth/sign-in/sign-in.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/pre-auth/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./verify-email/verify-email.component */
    "./src/app/pre-auth/verify-email/verify-email.component.ts");
    /* harmony import */


    var _pre_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pre-auth.component */
    "./src/app/pre-auth/pre-auth.component.ts");

    var routes = [{
      path: "",
      redirectTo: 'pre-auth',
      pathMatch: 'full'
    }, {
      path: "pre-auth",
      component: _pre_auth_component__WEBPACK_IMPORTED_MODULE_8__["PreAuthComponent"],
      children: [{
        path: "",
        component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"],
        canActivate: [_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_4__["SecureInnerPagesGuard"]]
      }, {
        path: "register-user",
        component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"],
        canActivate: [_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_4__["SecureInnerPagesGuard"]]
      }, {
        path: "forgot-password",
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],
        canActivate: [_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_4__["SecureInnerPagesGuard"]]
      }, {
        path: "verify-email-address",
        component: _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_7__["VerifyEmailComponent"],
        canActivate: [_shared_guard_secure_inner_pages_guard__WEBPACK_IMPORTED_MODULE_4__["SecureInnerPagesGuard"]]
      }]
    }];

    var PreAuthRoutingModule = function PreAuthRoutingModule() {
      _classCallCheck(this, PreAuthRoutingModule);
    };

    PreAuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PreAuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/pre-auth/pre-auth.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pre-auth/pre-auth.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreAuthPreAuthComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\n.cairo {\n  font-family: \"Cairo\", sans-serif;\n}\n.archivo {\n  font-family: \"Archivo\", sans-serif;\n}\n.pre-auth {\n  height: 100vh;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n.pre-auth .form-section {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n}\n.pre-auth .form-section .form {\n  margin: auto;\n  width: 50%;\n}\n.pre-auth .logo-section {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  background-color: #6C3C8C;\n}\n.pre-auth .logo-section .logo-wrapper {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWF1dGgvRTpcXHNvY2lhbC1jb25uZWN0L3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3ByZS1hdXRoL3ByZS1hdXRoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmUtYXV0aC9FOlxcc29jaWFsLWNvbm5lY3Qvc3JjXFxhcHBcXHByZS1hdXRoXFxwcmUtYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQVNBO0VBQ0EsZ0NBQUE7QUNQQTtBRFVBO0VBQ0ksa0NBQUE7QUNQSjtBQ0pBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QURPSjtBQ0xJO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FET1I7QUNMUTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FET1o7QUNISTtFQUNJLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCRmxCUTtBQ3VCaEI7QUNIUTtFQUdJLFlBQUE7QURHWiIsImZpbGUiOiJzcmMvYXBwL3ByZS1hdXRoL3ByZS1hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbiRwcmltYXJ5LWNvbG9yOiAjNkMzQzhDO1xuJHNlY29uZGFyeS1jb2xvcjogI2ZkODUyZTtcbiRwcmltYXJ5LWxpZ2h0ZXN0LWNvbG9yOiNlMWQ4ZTg7XG4kc2Vjb25kYXJ5LWxpZ2h0ZXN0LWNvbG9yOiNmZWRhYzA7XG4kcHJpbWFyeS1kYXJrLWNvbG9yOiM0YTJhNjI7XG5cbi5jYWlyb3tcbmZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uYXJjaGl2b3tcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdm8nLCBzYW5zLXNlcmlmO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5jYWlybyB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5hcmNoaXZvIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl2b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4ucHJlLWF1dGgge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcmUtYXV0aCAuZm9ybS1zZWN0aW9uIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wcmUtYXV0aCAuZm9ybS1zZWN0aW9uIC5mb3JtIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTAlO1xufVxuLnByZS1hdXRoIC5sb2dvLXNlY3Rpb24ge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkMzQzhDO1xufVxuLnByZS1hdXRoIC5sb2dvLXNlY3Rpb24gLmxvZ28td3JhcHBlciB7XG4gIG1hcmdpbjogYXV0bztcbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcblxyXG4ucHJlLWF1dGh7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5mb3JtLXNlY3Rpb257XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAuZm9ybXtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9nby1zZWN0aW9ue1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuXHJcbiAgICAgICAgLmxvZ28td3JhcHBlcntcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pre-auth/pre-auth.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pre-auth/pre-auth.component.ts ***!
    \************************************************/

  /*! exports provided: PreAuthComponent */

  /***/
  function srcAppPreAuthPreAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreAuthComponent", function () {
      return PreAuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PreAuthComponent =
    /*#__PURE__*/
    function () {
      function PreAuthComponent() {
        _classCallCheck(this, PreAuthComponent);
      }

      _createClass(PreAuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PreAuthComponent;
    }();

    PreAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'pre-auth',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pre-auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/pre-auth.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pre-auth.component.scss */
      "./src/app/pre-auth/pre-auth.component.scss")).default]
    })], PreAuthComponent);
    /***/
  },

  /***/
  "./src/app/pre-auth/pre-auth.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pre-auth/pre-auth.module.ts ***!
    \*********************************************/

  /*! exports provided: PreAuthModule */

  /***/
  function srcAppPreAuthPreAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreAuthModule", function () {
      return PreAuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pre_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pre-auth-routing.module */
    "./src/app/pre-auth/pre-auth-routing.module.ts");
    /* harmony import */


    var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./log-in/log-in.component */
    "./src/app/pre-auth/log-in/log-in.component.ts");
    /* harmony import */


    var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-in/sign-in.component */
    "./src/app/pre-auth/sign-in/sign-in.component.ts");
    /* harmony import */


    var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verify-email/verify-email.component */
    "./src/app/pre-auth/verify-email/verify-email.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/pre-auth/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _pre_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pre-auth.component */
    "./src/app/pre-auth/pre-auth.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var PreAuthModule = function PreAuthModule() {
      _classCallCheck(this, PreAuthModule);
    };

    PreAuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pre_auth_component__WEBPACK_IMPORTED_MODULE_8__["PreAuthComponent"], _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_4__["LogInComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"], _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pre_auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["PreAuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]]
    })], PreAuthModule);
    /***/
  },

  /***/
  "./src/app/pre-auth/shared/guard/secure-inner-pages.guard.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pre-auth/shared/guard/secure-inner-pages.guard.ts ***!
    \*******************************************************************/

  /*! exports provided: SecureInnerPagesGuard */

  /***/
  function srcAppPreAuthSharedGuardSecureInnerPagesGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecureInnerPagesGuard", function () {
      return SecureInnerPagesGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/pre-auth/shared/services/auth.service.ts");

    var SecureInnerPagesGuard =
    /*#__PURE__*/
    function () {
      function SecureInnerPagesGuard(authService, router) {
        _classCallCheck(this, SecureInnerPagesGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(SecureInnerPagesGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authService.isLoggedIn) {
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            console.log(next);
            console.log(state); // window.alert("You are not allowed to access this URL!");

            this.router.navigate(["content"]);
          }

          return true;
        }
      }]);

      return SecureInnerPagesGuard;
    }();

    SecureInnerPagesGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SecureInnerPagesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], SecureInnerPagesGuard);
    /***/
  },

  /***/
  "./src/app/pre-auth/shared/services/auth.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pre-auth/shared/services/auth.service.ts ***!
    \**********************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppPreAuthSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(afs, // Inject Firestore service
      afAuth, // Inject Firebase auth service
      router, ngZone, // NgZone service to remove outside scope warning,
      userService, http) {
        var _this18 = this;

        _classCallCheck(this, AuthService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        this.userService = userService;
        this.http = http;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */

        this.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this18.userData = user;
            localStorage.setItem("user", JSON.stringify(_this18.userData));
            JSON.parse(localStorage.getItem("user"));
          } else {
            localStorage.setItem("user", null);
            JSON.parse(localStorage.getItem("user"));
          }
        });
        this.afAuth.auth.onAuthStateChanged(function (user) {
          if (user) {// User is signed in.
          } else {// No user is signed in.
            }
        });
      }

      _createClass(AuthService, [{
        key: "SignIn",
        value: function SignIn(email, password) {
          var _this19 = this;

          var that = this;
          return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (result) {
            _this19.ngZone.run(function () {
              _this19.SetUserData(result.user); // console.log(result.user);
              // console.log("Heyyyy111");


              var request = {
                message: "Request for token validation"
              };
              that.http.post("http://localhost:3000/api", request).subscribe(function (res) {
                // console.log("Heyyyy Token Sent");
                // console.log("Response recieved is : ");
                // console.log(res.uid);
                if (res.status) {
                  that.router.navigate(["content"]);
                } // else{
                //     console.log("Invalid Verification")
                //   }

              });
            });
          });
        } // Sign up with email/password

      }, {
        key: "SignUp",
        value: function SignUp(email, password, dispName) {
          var _this20 = this;

          return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            result.user.updateProfile({
              displayName: dispName,
              photoURL: ""
            }).then(function () {
              _this20.SetUserData(result.user);

              console.log(result);
            });

            _this20.SendVerificationMail();
          }).catch(function (error) {
            window.alert(error.message);
          });
        } // Send email verfificaiton when new user sign up

      }, {
        key: "SendVerificationMail",
        value: function SendVerificationMail() {
          var _this21 = this;

          return this.afAuth.auth.currentUser.sendEmailVerification().then(function () {
            _this21.router.navigate(["pre-auth/verify-email-address"]);
          });
        } // Reset Forggot password

      }, {
        key: "ForgotPassword",
        value: function ForgotPassword(passwordResetEmail) {
          return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail).then(function () {
            window.alert("Password reset email sent, check your inbox.");
          }).catch(function (error) {
            window.alert(error);
          });
        } // Returns true when user is looged in and email is verified

      }, {
        key: "GoogleAuth",
        // Sign in with Google
        value: function GoogleAuth() {
          return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
        }
      }, {
        key: "FacebookAuth",
        value: function FacebookAuth() {
          return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider());
        } // Auth logic to run auth providers

      }, {
        key: "AuthLogin",
        value: function AuthLogin(provider) {
          var _this22 = this;

          return this.afAuth.auth.signInWithPopup(provider).then(function (result) {
            _this22.ngZone.run(function () {
              _this22.router.navigate(["content"]);
            });

            console.log(result.user);

            _this22.SetUserData(result.user);
          }).catch(function (error) {
            window.alert(error);
          });
        }
        /* Setting up user data when sign in with username/password,
        sign up with username/password and sign in with social auth
        provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

      }, {
        key: "SetUserData",
        value: function SetUserData(user) {
          var userRef = this.afs.doc("users/".concat(user.uid));
          var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
          };
          return userRef.set(userData, {
            merge: true
          });
        } // Sign out

      }, {
        key: "SignOut",
        value: function SignOut() {
          var _this23 = this;

          return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem("user");

            _this23.router.navigate(["pre-auth"]);
          });
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          var user = JSON.parse(localStorage.getItem("user"));
          return user !== null && user.emailVerified !== false ? true : false;
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/pre-auth/sign-in/sign-in.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pre-auth/sign-in/sign-in.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreAuthSignInSignInComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\n.cairo {\n  font-family: \"Cairo\", sans-serif;\n}\n.archivo {\n  font-family: \"Archivo\", sans-serif;\n}\n.facebook-btn {\n  background-color: #3b5998;\n  color: white;\n}\n.facebook-btn i {\n  margin-right: 5px;\n}\n.btn-google {\n  background-color: #dc4935;\n  color: white;\n}\n.btn-google i {\n  margin-right: 5px;\n}\n.auth-block h3 {\n  font-size: 2em;\n  font-weight: 600;\n  color: #fd852e;\n  margin-bottom: 1em;\n  text-shadow: 2px 2px #fedac0;\n}\n.auth-block .password-input {\n  width: 100%;\n  border-top: 1px solid #fd852e;\n  border-left: 1px solid #fd852e;\n  border-bottom: 1px solid #fd852e;\n  border-right: none !important;\n  color: black;\n}\n.auth-block .is-invalid, .auth-block .was-validated .form-control:invalid {\n  border-color: #dc3545 !important;\n}\n.auth-block input {\n  width: 100%;\n  border: 1px solid #fd852e;\n  color: black;\n}\n.auth-block .pass-icon {\n  border-top: 1px solid #fd852e;\n  border-right: 1px solid #fd852e;\n  border-bottom: 1px solid #fd852e;\n  font-size: 1.5em;\n  margin: 0;\n  padding: 8px 8px 0 0;\n  cursor: pointer;\n  color: #fd852e;\n}\n.auth-block input:focus {\n  box-shadow: none;\n}\n.auth-block input:focus .input-group {\n  box-shadow: 0 0 0 0.2rem #fedac0;\n}\n.auth-block .sign-in {\n  font-weight: 600;\n  border: none;\n  width: 50%;\n  margin-top: 0.5em;\n  text-align: center;\n  background-color: #fd852e;\n}\n.auth-block .sign-in:focus {\n  box-shadow: 0 0 0 0.1rem #fedac0;\n}\n.auth-block .or {\n  width: 100%;\n  position: relative;\n}\n.auth-block .or::before {\n  position: absolute;\n  height: 2px;\n  background-color: #fd852e;\n  content: \"\";\n  left: 0;\n  bottom: 50%;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n  width: 40%;\n}\n.auth-block .or::after {\n  position: absolute;\n  height: 2px;\n  background-color: #fd852e;\n  content: \"\";\n  right: 0;\n  bottom: 50%;\n  -webkit-transform: translateY(50%);\n          transform: translateY(50%);\n  width: 40%;\n}\n.redirect {\n  cursor: pointer;\n  color: #fd852e;\n}\n.redirect:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWF1dGgvc2lnbi1pbi9FOlxcc29jaWFsLWNvbm5lY3Qvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvcHJlLWF1dGgvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmUtYXV0aC9zaWduLWluL0U6XFxzb2NpYWwtY29ubmVjdC9zcmNcXGFwcFxccHJlLWF1dGhcXHNpZ24taW5cXHNpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFTQTtFQUNBLGdDQUFBO0FDUEE7QURVQTtFQUNJLGtDQUFBO0FDUEo7QUNMQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBRFFKO0FDTkk7RUFDSSxpQkFBQTtBRFFSO0FDTEE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QURRSjtBQ05JO0VBQ0ksaUJBQUE7QURRUjtBQ0ZJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0ZwQlU7RUVxQlYsa0JBQUE7RUFDQSw0QkFBQTtBREtSO0FDRkk7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FESVI7QUNGSTtFQUNJLGdDQUFBO0FESVI7QUNBSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUVBLFlBQUE7QURDUjtBQ0VJO0VBQ0ksNkJBQUE7RUFDQSwrQkFBQTtFQUVBLGdDQUFBO0VBRUEsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFFQSxlQUFBO0VBQ0EsY0Z4RFU7QUNxRGxCO0FDS0k7RUFDSSxnQkFBQTtBREhSO0FDS0k7RUFDSSxnQ0FBQTtBREhSO0FDTUk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRnZFVTtBQ21FbEI7QUNNSTtFQUNJLGdDQUFBO0FESlI7QUNRSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBRE5SO0FDU0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkZ0RlU7RUV1RlYsV0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLFVBQUE7QURQUjtBQ1NJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJGaEdVO0VFaUdWLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxVQUFBO0FEUFI7QUNhQTtFQUNRLGVBQUE7RUFDQSxjRjdHVTtBQ21HbEI7QUNZQTtFQUNJLGFBQUE7QURUSiIsImZpbGUiOiJzcmMvYXBwL3ByZS1hdXRoL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuXG4kcHJpbWFyeS1jb2xvcjogIzZDM0M4QztcbiRzZWNvbmRhcnktY29sb3I6ICNmZDg1MmU7XG4kcHJpbWFyeS1saWdodGVzdC1jb2xvcjojZTFkOGU4O1xuJHNlY29uZGFyeS1saWdodGVzdC1jb2xvcjojZmVkYWMwO1xuJHByaW1hcnktZGFyay1jb2xvcjojNGEyYTYyO1xuXG4uY2Fpcm97XG5mb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmFyY2hpdm97XG4gICAgZm9udC1mYW1pbHk6ICdBcmNoaXZvJywgc2Fucy1zZXJpZjtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4uY2Fpcm8ge1xuICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYXJjaGl2byB7XG4gIGZvbnQtZmFtaWx5OiBcIkFyY2hpdm9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmZhY2Vib29rLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mYWNlYm9vay1idG4gaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uYnRuLWdvb2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzQ5MzU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5idG4tZ29vZ2xlIGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmF1dGgtYmxvY2sgaDMge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNmZDg1MmU7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggI2ZlZGFjMDtcbn1cbi5hdXRoLWJsb2NrIC5wYXNzd29yZC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZkODUyZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmQ4NTJlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZkODUyZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5hdXRoLWJsb2NrIC5pcy1pbnZhbGlkLCAuYXV0aC1ibG9jayAud2FzLXZhbGlkYXRlZCAuZm9ybS1jb250cm9sOmludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbn1cbi5hdXRoLWJsb2NrIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDg1MmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5hdXRoLWJsb2NrIC5wYXNzLWljb24ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZkODUyZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZkODUyZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZDg1MmU7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogOHB4IDhweCAwIDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZDg1MmU7XG59XG4uYXV0aC1ibG9jayBpbnB1dDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYXV0aC1ibG9jayBpbnB1dDpmb2N1cyAuaW5wdXQtZ3JvdXAge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gI2ZlZGFjMDtcbn1cbi5hdXRoLWJsb2NrIC5zaWduLWluIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ4NTJlO1xufVxuLmF1dGgtYmxvY2sgLnNpZ24taW46Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gI2ZlZGFjMDtcbn1cbi5hdXRoLWJsb2NrIC5vciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXV0aC1ibG9jayAub3I6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZDg1MmU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgd2lkdGg6IDQwJTtcbn1cbi5hdXRoLWJsb2NrIC5vcjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ4NTJlO1xuICBjb250ZW50OiBcIlwiO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICB3aWR0aDogNDAlO1xufVxuXG4ucmVkaXJlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmQ4NTJlO1xufVxuXG4ucmVkaXJlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuLmZhY2Vib29rLWJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgaXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxufVxyXG4uYnRuLWdvb2dsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzQ5MzU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgaXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmF1dGgtYmxvY2t7XHJcblxyXG4gICAgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggJHNlY29uZGFyeS1saWdodGVzdC1jb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICAucGFzc3dvcmQtaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICAgICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAgICAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgICAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrOyAgIFxyXG4gICAgfVxyXG4gICAgLmlzLWludmFsaWQsIC53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICAgICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgXHJcbiAgICAgICAgY29sb3I6IGJsYWNrOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5wYXNzLWljb257ICBcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgICAgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAgICAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICAgICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDAgMCA7XHJcblxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIH1cclxuICAgIGlucHV0OmZvY3Vze1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBpbnB1dDpmb2N1cyAuaW5wdXQtZ3JvdXB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICRzZWNvbmRhcnktbGlnaHRlc3QtY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZ24taW57XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIH1cclxuICAgIC5zaWduLWluOmZvY3Vze1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAkc2Vjb25kYXJ5LWxpZ2h0ZXN0LWNvbG9yO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAub3J7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcjo6YmVmb3Jle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuICAgIC5vcjo6YWZ0ZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG59XHJcblxyXG4ucmVkaXJlY3R7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG59XHJcbi5yZWRpcmVjdDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pre-auth/sign-in/sign-in.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pre-auth/sign-in/sign-in.component.ts ***!
    \*******************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppPreAuthSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/pre-auth/shared/services/auth.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SignInComponent =
    /*#__PURE__*/
    function () {
      function SignInComponent(authService) {
        _classCallCheck(this, SignInComponent);

        this.authService = authService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,12}")])
        });
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "eyeclick",
        value: function eyeclick() {
          jquery__WEBPACK_IMPORTED_MODULE_3__('.fa-eye').toggleClass('fa-eye-slash');

          if (jquery__WEBPACK_IMPORTED_MODULE_3__('#eye').attr("type") == "password") {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#eye').attr("type", "text");
          } else {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#eye').attr("type", "password");
          }
        }
      }]);

      return SignInComponent;
    }();

    SignInComponent.ctorParameters = function () {
      return [{
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/sign-in/sign-in.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in.component.scss */
      "./src/app/pre-auth/sign-in/sign-in.component.scss")).default]
    })], SignInComponent);
    /***/
  },

  /***/
  "./src/app/pre-auth/verify-email/verify-email.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pre-auth/verify-email/verify-email.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreAuthVerifyEmailVerifyEmailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* You can add global styles to this file, and also import other style files */\n.cairo {\n  font-family: \"Cairo\", sans-serif;\n}\n.archivo {\n  font-family: \"Archivo\", sans-serif;\n}\n.auth-block h3 {\n  color: #fd852e;\n}\n.auth-block button {\n  color: #fd852e;\n  border: 1px solid #fd852e;\n}\n.auth-block button:focus {\n  box-shadow: 0 0 0 0.1em #fedac0;\n}\n.redirect {\n  color: #fd852e;\n  cursor: pointer;\n}\n.redirect:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLWF1dGgvdmVyaWZ5LWVtYWlsL0U6XFxzb2NpYWwtY29ubmVjdC9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9wcmUtYXV0aC92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcmUtYXV0aC92ZXJpZnktZW1haWwvRTpcXHNvY2lhbC1jb25uZWN0L3NyY1xcYXBwXFxwcmUtYXV0aFxcdmVyaWZ5LWVtYWlsXFx2ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFTQTtFQUNBLGdDQUFBO0FDUEE7QURVQTtFQUNJLGtDQUFBO0FDUEo7QUNISTtFQUNJLGNGRFU7QUNPbEI7QUNKSTtFQUNJLGNGSlU7RUVLVix5QkFBQTtBRE1SO0FDSkk7RUFDSSwrQkFBQTtBRE1SO0FDRkE7RUFDSSxjRmJjO0VFY2QsZUFBQTtBREtKO0FDSEE7RUFDSSxhQUFBO0FETUoiLCJmaWxlIjoic3JjL2FwcC9wcmUtYXV0aC92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbiRwcmltYXJ5LWNvbG9yOiAjNkMzQzhDO1xuJHNlY29uZGFyeS1jb2xvcjogI2ZkODUyZTtcbiRwcmltYXJ5LWxpZ2h0ZXN0LWNvbG9yOiNlMWQ4ZTg7XG4kc2Vjb25kYXJ5LWxpZ2h0ZXN0LWNvbG9yOiNmZWRhYzA7XG4kcHJpbWFyeS1kYXJrLWNvbG9yOiM0YTJhNjI7XG5cbi5jYWlyb3tcbmZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uYXJjaGl2b3tcbiAgICBmb250LWZhbWlseTogJ0FyY2hpdm8nLCBzYW5zLXNlcmlmO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi5jYWlybyB7XG4gIGZvbnQtZmFtaWx5OiBcIkNhaXJvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5hcmNoaXZvIHtcbiAgZm9udC1mYW1pbHk6IFwiQXJjaGl2b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYXV0aC1ibG9jayBoMyB7XG4gIGNvbG9yOiAjZmQ4NTJlO1xufVxuLmF1dGgtYmxvY2sgYnV0dG9uIHtcbiAgY29sb3I6ICNmZDg1MmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDg1MmU7XG59XG4uYXV0aC1ibG9jayBidXR0b246Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjFlbSAjZmVkYWMwO1xufVxuXG4ucmVkaXJlY3Qge1xuICBjb2xvcjogI2ZkODUyZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVkaXJlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuXHJcbi5hdXRoLWJsb2Nre1xyXG4gICAgaDN7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIH1cclxuICAgIGJ1dHRvbjpmb2N1c3tcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjFlbSAkc2Vjb25kYXJ5LWxpZ2h0ZXN0LWNvbG9yO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLnJlZGlyZWN0e1xyXG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJlZGlyZWN0OmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pre-auth/verify-email/verify-email.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pre-auth/verify-email/verify-email.component.ts ***!
    \*****************************************************************/

  /*! exports provided: VerifyEmailComponent */

  /***/
  function srcAppPreAuthVerifyEmailVerifyEmailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function () {
      return VerifyEmailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/pre-auth/shared/services/auth.service.ts");

    var VerifyEmailComponent =
    /*#__PURE__*/
    function () {
      function VerifyEmailComponent(authService) {
        _classCallCheck(this, VerifyEmailComponent);

        this.authService = authService;
      }

      _createClass(VerifyEmailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VerifyEmailComponent;
    }();

    VerifyEmailComponent.ctorParameters = function () {
      return [{
        type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify-email',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify-email.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pre-auth/verify-email/verify-email.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify-email.component.scss */
      "./src/app/pre-auth/verify-email/verify-email.component.scss")).default]
    })], VerifyEmailComponent);
    /***/
  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http, storage) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.storage = storage;
        this.globaluser = JSON.parse(localStorage.getItem("user"));
      }

      _createClass(UserService, [{
        key: "uploadimage",
        value: function uploadimage(imgfile, uid) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var filePath, fileRef;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    filePath = "/profilepictures/" + uid;
                    fileRef = this.storage.ref(filePath);
                    _context4.next = 4;
                    return this.storage.upload(filePath, imgfile);

                  case 4:
                    //  .then(data => {
                    console.log("upload success");
                    return _context4.abrupt("return", fileRef.getDownloadURL());

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "setPhotoUrl",
        value: function setPhotoUrl(photoUrl) {
          var req = {
            photoUrl: photoUrl
          };
          return this.http.post("http://localhost:3000/api/setphotourl", req);
        }
      }, {
        key: "getAllNotifications",
        value: function getAllNotifications() {
          return this.http.get('http://localhost:3000/api/getallrequests');
        }
      }, {
        key: "getAllFriends",
        value: function getAllFriends() {
          return this.http.get('http://localhost:3000/api/getAllfriends');
        }
      }, {
        key: "getUserName",
        value: function getUserName() {
          var user = JSON.parse(localStorage.getItem("user")); // console.log(user.displayName);

          return user.displayName;
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails() {
          return this.http.get("http://localhost:3000/api/profile");
        }
      }, {
        key: "getUserInfobyID",
        value: function getUserInfobyID(uid) {
          console.log("send request for notifications to server");
          return this.http.post("http://localhost:3000/api/getuserbyid", {
            uid: uid
          });
        }
      }, {
        key: "setUserDetails",
        value: function setUserDetails(userdetails) {
          console.log(userdetails);
          return this.http.post("http://localhost:3000/api/profile", userdetails);
        }
      }, {
        key: "testMethod",
        value: function testMethod() {
          this.http.get("http://localhost:3000/api/profile").subscribe(function (res) {
            console.log("Heyyyy Token Sent");

            if (res.status) {
              // console.log(JSON.parse(localStorage.getItem("user")))
              console.log(res);
            }
          });
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.http.get("http://localhost:3000/api/getallusers");
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyDMW-J0DWvexpv5WSLJUK5fN9UoX6rDFFg",
        authDomain: "social-connect-5e34a.firebaseapp.com",
        databaseURL: "https://social-connect-5e34a.firebaseio.com",
        projectId: "social-connect-5e34a",
        storageBucket: "social-connect-5e34a.appspot.com",
        messagingSenderId: "381619314610",
        appId: "1:381619314610:web:5b4be755f9767c68714eab",
        measurementId: "G-ZVGQPJYE9H"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\social-connect\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map