webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_player_component__ = __webpack_require__("./src/app/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__player_detail_player_detail_component__ = __webpack_require__("./src/app/player-detail/player-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__player_create_player_create_component__ = __webpack_require__("./src/app/player-create/player-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__player_edit_player_edit_component__ = __webpack_require__("./src/app/player-edit/player-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    {
        path: 'player',
        component: __WEBPACK_IMPORTED_MODULE_3__player_player_component__["a" /* PlayerComponent */],
        data: { title: 'Players' }
    },
    {
        path: 'player-create',
        component: __WEBPACK_IMPORTED_MODULE_8__player_create_player_create_component__["a" /* PlayerCreateComponent */],
        data: { title: 'Create Player' }
    },
    {
        path: 'player-detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__player_detail_player_detail_component__["a" /* PlayerDetailComponent */],
        data: { title: 'Player details' }
    },
    {
        path: 'player-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_9__player_edit_player_edit_component__["a" /* PlayerEditComponent */],
        data: { title: 'Edit Player' }
    },
    {
        path: '',
        redirectTo: '/player',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__player_player_component__["a" /* PlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__player_detail_player_detail_component__["a" /* PlayerDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__player_create_player_create_component__["a" /* PlayerCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__player_edit_player_edit_component__["a" /* PlayerEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/player-create/player-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player-create/player-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> <h1>Add New Player</h1> <div class=\"row\">\n  <div class=\"col-md-6\">\n    <form (ngSubmit)=\"savePlayer()\" #playerForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"player.name\" id=\"name\"\n               name=\"name\" required> </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Surname</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"player.surname\"\n               name=\"surname\" required> </div>\n      <div class=\"form-group\">\n        <label for=\"name\">Team Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"player.teamName\"\n               name=\"teamName\" required> </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!playerForm.form.valid\">Save</button>\n      </div> </form> </div>\n</div> </div>\n"

/***/ }),

/***/ "./src/app/player-create/player-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerCreateComponent = /** @class */ (function () {
    function PlayerCreateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.player = {};
    }
    PlayerCreateComponent.prototype.ngOnInit = function () {
    };
    PlayerCreateComponent.prototype.savePlayer = function () {
        var _this = this;
        this.http.post('/players', this.player)
            .subscribe(function (res) {
            _this.router.navigate(['/player', res]);
        }, function (err) {
            console.log(err);
        });
    };
    PlayerCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player-create',
            template: __webpack_require__("./src/app/player-create/player-create.component.html"),
            styles: [__webpack_require__("./src/app/player-create/player-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PlayerCreateComponent);
    return PlayerCreateComponent;
}());



/***/ }),

/***/ "./src/app/player-detail/player-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player-detail/player-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{ player.name }}{{ player.surname }}</h1>\n  <dl class=\"list\">\n    <dt>Name</dt>\n    <dd>{{ player.name }}</dd>\n    <dt>Surname</dt>\n    <dd>{{ player.surname }}</dd>\n    <dt>Team name</dt>\n    <dd>{{ player.teamName }}</dd>\n  </dl>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <a [routerLink]=\"['/player-edit', player.id]\" class=\"btn btn-success\">EDIT</a>\n      <button class=\"btn btn-danger\" type=\"button\" (click)=\"deletePlayer(player.id)\">DELETE</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/player-detail/player-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerDetailComponent = /** @class */ (function () {
    function PlayerDetailComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.player = {};
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        this.getPlayerDetail(this.route.snapshot.params['id']);
    };
    PlayerDetailComponent.prototype.getPlayerDetail = function (id) {
        var _this = this;
        this.http.get('/players/' + id).subscribe(function (data) {
            _this.player = data;
        });
    };
    PlayerDetailComponent.prototype.deletePlayer = function (id) {
        var _this = this;
        this.http.delete('/players/' + id).subscribe(function (res) {
            _this.router.navigate(['/player']);
        }, function (err) {
            console.log(err);
        });
    };
    PlayerDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player-detail',
            template: __webpack_require__("./src/app/player-detail/player-detail.component.html"),
            styles: [__webpack_require__("./src/app/player-detail/player-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());



/***/ }),

/***/ "./src/app/player-edit/player-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player-edit/player-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Edit Player</h1>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <form (ngSubmit)=\"updatePlayer(player.id, player)\" #playerForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"player.name\" name=\"name\" id=\"name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"surname\">Surname</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"player.surname\" name=\"address\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"teamName\">Team name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"player.teamName\" name=\"teamName\" required>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!playerForm.form.valid\">Update</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/player-edit/player-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerEditComponent = /** @class */ (function () {
    function PlayerEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.player = {};
    }
    PlayerEditComponent.prototype.ngOnInit = function () {
        this.getPlayer(this.route.snapshot.params['id']);
    };
    PlayerEditComponent.prototype.getPlayer = function (id) {
        var _this = this;
        this.http.get('/players/' + id).subscribe(function (data) {
            _this.player = data;
        });
    };
    PlayerEditComponent.prototype.updatePlayer = function (id, data) {
        var _this = this;
        this.http.put('/players/' + id, data).subscribe(function (res) {
            var id = res['id'];
            _this.router.navigate(['/player-detail', id]);
        }, function (err) {
            console.log(err);
        });
    };
    PlayerEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player-edit',
            template: __webpack_require__("./src/app/player-edit/player-edit.component.html"),
            styles: [__webpack_require__("./src/app/player-edit/player-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PlayerEditComponent);
    return PlayerEditComponent;
}());



/***/ }),

/***/ "./src/app/player/player.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Players\n  </h1>\n  <a [routerLink]=\"['/player-create']\" class=\"btn btn-default btn-lg\">\n    <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n  </a>\n\n  <table class=\"table\">\n\n    <thead>\n    <tr>\n\n      <th>Name</th>\n      <th>Surname</th>\n      <th>Team name</th>\n    </tr>\n    </thead>\n    <tbody>\n\n    <tr *ngFor=\"let player of players\">\n      <td>{{ player.name }}</td>\n      <td>{{ player.surname }}</td>\n      <td>{{ player.teamName }}</td>\n      <td><a [routerLink]=\"['/player-detail', player.id]\">Show Detail</a></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(http) {
        this.http = http;
    }
    PlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/players').subscribe(function (data) {
            _this.players = data;
        });
    };
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-player',
            template: __webpack_require__("./src/app/player/player.component.html"),
            styles: [__webpack_require__("./src/app/player/player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map