"use strict";
(self["webpackChunkfut_stats"] = self["webpackChunkfut_stats"] || []).push([["src_app_layout_layout_module_ts"],{

/***/ 9355:
/*!***********************************************!*\
  !*** ./src/app/layout/body/body.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BodyComponent": () => (/* binding */ BodyComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_teams_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/teams.service */ 3091);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/spinner/spinner.component */ 2925);







function BodyComponent_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BodyComponent_div_24_div_2_Template_img_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const i_r5 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r6.onClickOnTeam(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const logo_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-index", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", logo_r4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function BodyComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "article", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BodyComponent_div_24_div_2_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.logos);
} }
function BodyComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-spinner");
} }
class BodyComponent {
    constructor(teamsService, router, loaderService) {
        this.teamsService = teamsService;
        this.router = router;
        this.loaderService = loaderService;
        this.logosTimes = [];
        this.logos = [];
        this.league = {};
        this.loading = true;
    }
    ngOnInit() {
        this.getLogoTeams();
    }
    getLogoTeams() {
        this.teamsService.logoTime().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
            this.loading = false;
        })).subscribe((value) => {
            let logosTimes = value.data.map((standing) => standing.logos['light']);
            this.logos = logosTimes;
            this.logos.pop();
            this.logos.splice(11, 1);
        });
    }
    onClickOnTeam(index) {
        this.onChooseLeague(index);
        this.router.navigateByUrl('/teams', {
            state: [this.league]
        });
    }
    onChooseLeague(index) {
        switch (index) {
            case 0:
                this.league = {
                    name: "arg",
                    continental: {
                        continentalFirstDivision: {
                            amount: [1],
                            name: "Fase de grupos da Copa Libertadores"
                        }
                    }
                };
                break;
            case 1:
                this.league = {
                    name: 'aus',
                    alert: true
                };
                break;
            case 2:
                this.league = {
                    name: "bra",
                    relegated: {
                        amount: [17, 18, 19, 20]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1, 2, 3, 4, 5, 6],
                            name: "Fase de grupos da Copa Libertadores"
                        },
                        continentalQualifiers: {
                            amount: [7, 8],
                            name: "Qualificatórias da Copa Libertadores"
                        },
                        continentalSecondDivision: {
                            amount: [9, 10, 11, 12, 13, 14],
                            name: "Fase de grupos da Copa Sul-Americana"
                        },
                    }
                };
                break;
            case 3:
                this.league = {
                    name: "chn",
                    relegated: {
                        amount: [16, 17, 18]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1],
                            name: "Fase de grupos da Liga dos Campeões da AFC"
                        },
                        continentalQualifiers: {
                            amount: [2, 3],
                            name: "Qualificatórias da Liga dos Campeões da AFC"
                        }
                    }
                };
                break;
            case 4:
                this.league = {
                    name: "ned",
                    relegated: {
                        amount: [17, 18],
                        qualifiersAmount: [16]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1],
                            name: "Fase de grupos da Liga dos Campeões"
                        },
                        continentalQualifiers: {
                            amount: [2],
                            name: "Qualificatórias da Liga dos Campeões"
                        },
                        continentalSecondDivision: {
                            amount: [3],
                            name: "Qualificatórias da Liga Conferência"
                        },
                    }
                };
                break;
            case 5:
                this.league = {
                    name: "eng",
                    relegated: {
                        amount: [18, 19, 20]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1, 2, 3, 4],
                            name: "Fase de grupos da Liga dos Campeões"
                        },
                        continentalQualifiers: {
                            amount: [5],
                            name: "Qualificatórias da Liga dos Campeões"
                        }
                    }
                };
                break;
            case 6:
                this.league = {
                    name: "fra",
                    relegated: {
                        amount: [17, 18, 19, 20]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1, 2],
                            name: "Fase de grupos da Liga dos Campeões"
                        },
                        continentalQualifiers: {
                            amount: [3],
                            name: "Qualificatórias da Liga dos Campeões"
                        },
                        continentalSecondDivision: {
                            amount: [4],
                            name: "Fase de grupos da Liga Europa"
                        },
                        continentalThirdDivision: {
                            amount: [5],
                            name: "Qualificatórias da Liga Conferência"
                        },
                    }
                };
                break;
            case 7:
                this.league = {
                    name: "ger",
                    relegated: {
                        amount: [17, 18],
                        qualifiersAmount: [16]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1, 2, 3, 4],
                            name: "Fase de grupos da Liga dos Campeões"
                        },
                        continentalSecondDivision: {
                            amount: [5],
                            name: "Fase de grupos da Liga Europa"
                        },
                        continentalThirdDivision: {
                            amount: [6],
                            name: "Qualificatórias da Liga Conferência"
                        },
                    }
                };
                break;
            case 8:
                this.league = {
                    name: "idn",
                    relegated: {
                        amount: [16, 17, 18]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1],
                            name: "Fase de grupos da Liga dos Campeões da AFC"
                        }
                    },
                    alert: true
                };
                break;
            case 9:
                this.league = {
                    name: "ita",
                    relegated: {
                        amount: [18, 19, 20]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1, 2, 3, 4],
                            name: "Fase de grupos da Liga dos Campeões"
                        },
                        continentalSecondDivision: {
                            amount: [5],
                            name: "Fase de grupos da Liga Europa"
                        },
                        continentalQualifiers: {
                            amount: [6],
                            name: "Qualificatórias da Liga Conferência"
                        },
                    }
                };
                break;
            case 10:
                this.league = {
                    name: "jpn",
                    relegated: {
                        amount: [18]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1, 2],
                            name: "Fase de grupos da Liga dos Campeões da AFC"
                        },
                        continentalQualifiers: {
                            amount: [3],
                            name: "Qualificatórias da Liga dos Campeões da AFC"
                        }
                    }
                };
                break;
            case 11:
                this.league = {
                    name: "mex",
                    continental: {
                        continentalFirstDivision: {
                            amount: [1, 2, 3, 4],
                            name: "Série final"
                        },
                        continentalQualifiers: {
                            amount: [5, 6, 7, 8, 9, 10, 11, 12],
                            name: "Eliminatórias da série final"
                        }
                    }
                };
                break;
            case 12:
                this.league = {
                    name: "por",
                    relegated: {
                        amount: [15, 16],
                        qualifiersAmount: [13, 14]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1],
                            name: "Fase de grupos da Liga dos Campeões"
                        },
                        continentalQualifiers: {
                            amount: [3],
                            name: "Qualificatórias da Liga dos Campeões"
                        },
                        continentalThirdDivision: {
                            amount: [3, 4],
                            name: "Qualificatórias da Liga Conferência"
                        },
                    }
                };
                break;
            case 13:
                this.league = {
                    name: "rus",
                    relegated: {
                        amount: [15, 16],
                        qualifiersAmount: [13, 14]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1],
                            name: "Fase de grupos da Liga dos Campeões"
                        },
                        continentalQualifiers: {
                            amount: [2],
                            name: "Qualificatórias da Liga dos Campeões"
                        },
                        continentalSecondDivision: {
                            amount: [3, 4],
                            name: "Qualificatórias da Liga Conferência"
                        },
                    },
                    alert: true
                };
                break;
            case 14:
                this.league = {
                    name: 'sgp',
                    alert: true
                };
                break;
            case 15:
                this.league = {
                    name: "esp",
                    relegated: {
                        amount: [18, 19, 20]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1, 2, 3, 4],
                            name: "Fase de grupos da Liga dos Campeões"
                        },
                        continentalSecondDivision: {
                            amount: [5],
                            name: "Fase de grupos da Liga Europa"
                        },
                        continentalThirdDivision: {
                            amount: [6],
                            name: "Fase de grupos da Liga Conferência"
                        }
                    }
                };
                break;
            case 16:
                this.league = {
                    name: 'tha',
                    alert: true
                };
                break;
            case 17:
                this.league = {
                    name: "tur",
                    relegated: {
                        amount: [16, 17, 18, 19]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1],
                            name: "Fase de grupos da Liga dos Campeões"
                        },
                        continentalThirdDivision: {
                            amount: [2, 3],
                            name: "Qualificatórias da Liga Conferência"
                        }
                    },
                    alert: true
                };
                break;
            default:
                this.league = {
                    name: "bra",
                    relegated: {
                        amount: [17, 18, 19, 20]
                    },
                    continental: {
                        continentalFirstDivision: {
                            amount: [1, 2, 3, 4, 5, 6],
                            name: "Fase de grupos da Copa Libertadores"
                        },
                        continentalQualifiers: {
                            amount: [7, 8],
                            name: "Qualificatórias da Copa Libertadores"
                        },
                        continentalSecondDivision: {
                            amount: [9, 10, 11, 12, 13, 14],
                            name: "Fase de grupos da Copa Sul-Americana"
                        },
                    }
                };
                break;
        }
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_teams_service__WEBPACK_IMPORTED_MODULE_0__.TeamsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService)); };
BodyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["app-body"]], decls: 28, vars: 4, consts: [[1, "content"], [1, "title"], [1, "buttons"], [1, "img"], ["src", "https://images.vexels.com/media/users/3/140621/isolated/preview/333b587f745bc243bc1a72b2bbbe3577-javad-nekounam-cartoon.png", "alt", "", 1, "img-responsive"], [1, "title-2"], [4, "ngIf", "ngIfElse"], ["loadingState", ""], [1, "parent"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["alt", "", 1, "box", 3, "src", "click"]], template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Acompanhe as");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Melhores Ligas do Mundo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Criar conta");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "As estat\u00EDsticas do futebol na sua m\u00E3o!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "A FutStats oferece para voc\u00EA um servi\u00E7o surreal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " sobre ligas de futebol do mundo inteiro. \u00C9 um projeto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " recente e pretendemos expandir ele cada vez mais! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Nossas Ligas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, BodyComponent_div_24_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, BodyComponent_ng_template_26_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 2, ctx.loaderService.isLoading))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n}\n.title[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n  font-size: 48px;\n  color: #0a3151;\n}\n.content[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-left: 100px;\n}\n.img-responsive[_ngcontent-%COMP%] {\n  width: 500px;\n  height: auto;\n  position: relative;\n  left: 50%;\n}\n.buttons[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-left: 150px;\n  padding-left: 10px;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 120px;\n  height: 30px;\n  background-color: #0a3151;\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  margin-left: 10px;\n}\nsection[_ngcontent-%COMP%] {\n  padding-top: 5%;\n  padding-bottom: 5%;\n  background-color: #0a3151;\n}\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n}\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  font-weight: lighter;\n  line-height: 1.25;\n}\n.parent[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n  text-align: center;\n  margin-top: 20px;\n}\n.title-2[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", \"Verdana\", sans-serif;\n  font-size: 48px;\n  color: #0a3151;\n  margin-top: 40px;\n  text-align: center;\n}\n.box[_ngcontent-%COMP%] {\n  border: 3.5px solid #0a3151;\n  width: 170px;\n  height: auto;\n  margin-top: 3%;\n  cursor: pointer;\n}\n@media (min-width: 1024px) {\n  .parent[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 50px));\n    margin-left: 5vh;\n    margin-right: 5vh;\n  }\n}\n.loader[_ngcontent-%COMP%] {\n  background: url(https://loaders.holasvg.com/my-loader.svg) no-repeat;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvZHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkZBQUE7QUFFUjtFQUNFLHNCQUFBO0VBQ0EsNkNBQUE7QUFBRjtBQUdBO0VBQ0UsNkNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQUY7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVGO0FBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUdGO0FBREE7O0VBRUUsV0FBQTtFQUNBLDZDQUFBO0FBSUY7QUFEQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUlGO0FBREE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBSUY7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSUY7QUFEQTtFQUNFLDZDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSUY7QUFEQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUlGO0FBREE7RUFDRTtJQUNFLGFBQUE7SUFDQSw0REFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUFJRjtBQUNGO0FBREE7RUFDRSxvRUFBQTtFQUNBLGFBQUE7QUFHRiIsImZpbGUiOiJib2R5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7NDAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgY29sb3I6ICMwYTMxNTE7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG5cclxuLmltZy1yZXNwb25zaXZlIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuLmJ1dHRvbnMge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5idXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTMxNTE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTMxNTE7XHJcbn1cclxuc2VjdGlvbiBkaXYgaDEsXHJcbnAge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnNlY3Rpb24gZGl2IGgxIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5zZWN0aW9uIGRpdiBwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG59XHJcblxyXG4ucGFyZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUtMiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgY29sb3I6ICMwYTMxNTE7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIGJvcmRlcjogMy41cHggc29saWQgIzBhMzE1MTtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5wYXJlbnQge1xyXG4gICAgZGlzcGxheTogZ3JpZDsgXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCA1MHB4KSk7XHJcbiAgICBtYXJnaW4tbGVmdDogNXZoO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1dmg7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9sb2FkZXJzLmhvbGFzdmcuY29tL215LWxvYWRlci5zdmcpIG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 9689:
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutRoutingModule": () => (/* binding */ LayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/view.component */ 5711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _view_view_component__WEBPACK_IMPORTED_MODULE_0__.ViewComponent,
    },
];
class LayoutRoutingModule {
}
LayoutRoutingModule.ɵfac = function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); };
LayoutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
LayoutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4805:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/footer/footer.module */ 2735);
/* harmony import */ var _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/header/header.module */ 3778);
/* harmony import */ var _shared_components_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/spinner/spinner.module */ 8721);
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/body.component */ 9355);
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ 9689);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ 5711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);










class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__.LayoutRoutingModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
            _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_0__.FooterModule,
            _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule,
            _shared_components_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_view_view_component__WEBPACK_IMPORTED_MODULE_5__.ViewComponent, _body_body_component__WEBPACK_IMPORTED_MODULE_3__.BodyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__.LayoutRoutingModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule,
        _shared_components_footer_footer_module__WEBPACK_IMPORTED_MODULE_0__.FooterModule,
        _shared_components_header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule,
        _shared_components_spinner_spinner_module__WEBPACK_IMPORTED_MODULE_2__.SpinnerModule] }); })();


/***/ }),

/***/ 5711:
/*!***********************************************!*\
  !*** ./src/app/layout/view/view.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewComponent": () => (/* binding */ ViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_teams_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/teams.service */ 3091);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/header/header.component */ 6290);
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../body/body.component */ 9355);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/footer/footer.component */ 6526);





class ViewComponent {
    constructor(teamsService) {
        this.teamsService = teamsService;
    }
    ngOnInit() {
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_teams_service__WEBPACK_IMPORTED_MODULE_0__.TeamsService)); };
ViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 3, vars: 0, template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-footer");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _body_body_component__WEBPACK_IMPORTED_MODULE_2__.BodyComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_layout_layout_module_ts.0ccb25116f176efe.js.map