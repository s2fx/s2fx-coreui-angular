/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(document, renderer, hostElement) {
        this.document = document;
        this.renderer = renderer;
        this.hostElement = hostElement;
        this.navbarBrandText = { icon: '🅲', text: '🅲 CoreUI' };
        // @Input() navbarBrandHref: string = ''; // deprecated, use navbarBrandRouterLink instead
        this.navbarBrandRouterLink = '';
        this.fixedClass = 'header-fixed';
        renderer.addClass(hostElement.nativeElement, 'app-header');
        renderer.addClass(hostElement.nativeElement, 'navbar');
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isFixed(this.fixed);
        this.navbarBrandImg = Boolean(this.navbarBrand || this.navbarBrandFull || this.navbarBrandMinimized);
        // this.navbarBrandRouterLink = this.navbarBrandRouterLink[0] ? this.navbarBrandRouterLink : this.navbarBrandHref;
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.document.body, this.fixedClass);
    };
    /**
     * @param {?=} fixed
     * @return {?}
     */
    HeaderComponent.prototype.isFixed = /**
     * @param {?=} fixed
     * @return {?}
     */
    function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, this.fixedClass);
        }
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cui-header',
                    template: "<ng-template [ngIf]=\"mobileSidebarToggler != false\">\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" cuiSidebarToggler>\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n<a class=\"navbar-brand\" [routerLink]=\"navbarBrandRouterLink\">\n  <ng-template [ngIf]=\"navbarBrandImg\">\n    <img *ngIf=\"navbarBrand\"\n         [cuiHtmlAttr]=\"navbarBrand\"\n         [ngClass]=\"'navbar-brand'\">\n    <img *ngIf=\"navbarBrandFull\"\n         [cuiHtmlAttr]=\"navbarBrandFull\"\n         [ngClass]=\"'navbar-brand-full'\">\n    <img *ngIf=\"navbarBrandMinimized\"\n         [cuiHtmlAttr]=\"navbarBrandMinimized\"\n         [ngClass]=\"'navbar-brand-minimized'\">\n  </ng-template>\n  <ng-template [ngIf]=\"!navbarBrandImg\">\n    <div class=\"navbar-brand-full\" [innerHTML]=\"navbarBrandText.text\"></div>\n    <div class=\"navbar-brand-minimized\" [innerHTML]=\"navbarBrandText.icon\"></div>\n  </ng-template>\n</a>\n<ng-template [ngIf]=\"sidebarToggler != false\">\n  <button class=\"navbar-toggler d-md-down-none\" type=\"button\" [cuiSidebarToggler]=\"sidebarToggler\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n<ng-content></ng-content>\n<ng-template [ngIf]=\"asideMenuToggler != false\">\n  <button class=\"navbar-toggler d-md-down-none\" type=\"button\" [cuiAsideMenuToggler]=\"asideMenuToggler\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n<ng-template [ngIf]=\"mobileAsideMenuToggler != false\">\n  <button class=\"navbar-toggler d-lg-none\" type=\"button\" cuiAsideMenuToggler>\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    HeaderComponent.propDecorators = {
        fixed: [{ type: Input }],
        navbarBrand: [{ type: Input }],
        navbarBrandFull: [{ type: Input }],
        navbarBrandMinimized: [{ type: Input }],
        navbarBrandText: [{ type: Input }],
        navbarBrandRouterLink: [{ type: Input }],
        sidebarToggler: [{ type: Input }],
        mobileSidebarToggler: [{ type: Input }],
        asideMenuToggler: [{ type: Input }],
        mobileAsideMenuToggler: [{ type: Input }]
    };
    return HeaderComponent;
}());
export { HeaderComponent };
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.fixed;
    /** @type {?} */
    HeaderComponent.prototype.navbarBrand;
    /** @type {?} */
    HeaderComponent.prototype.navbarBrandFull;
    /** @type {?} */
    HeaderComponent.prototype.navbarBrandMinimized;
    /** @type {?} */
    HeaderComponent.prototype.navbarBrandText;
    /** @type {?} */
    HeaderComponent.prototype.navbarBrandRouterLink;
    /** @type {?} */
    HeaderComponent.prototype.sidebarToggler;
    /** @type {?} */
    HeaderComponent.prototype.mobileSidebarToggler;
    /** @type {?} */
    HeaderComponent.prototype.asideMenuToggler;
    /** @type {?} */
    HeaderComponent.prototype.mobileAsideMenuToggler;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.fixedClass;
    /** @type {?} */
    HeaderComponent.prototype.navbarBrandImg;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3JldWkvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQXdCRSx5QkFDNEIsUUFBYSxFQUMvQixRQUFtQixFQUNuQixXQUF1QjtRQUZMLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQWhCeEIsb0JBQWUsR0FBUSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDOztRQUV2RCwwQkFBcUIsR0FBbUIsRUFBRSxDQUFDO1FBUW5DLGVBQVUsR0FBRyxjQUFjLENBQUM7UUFRM0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzNELFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JHLGtIQUFrSDtJQUNwSCxDQUFDOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLEtBQTJCO1FBQTNCLHNCQUFBLEVBQUEsUUFBaUIsSUFBSSxDQUFDLEtBQUs7UUFDakMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0Q7SUFDSCxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QiwycERBQXNDO2lCQUN2Qzs7OztnREFzQkksTUFBTSxTQUFDLFFBQVE7Z0JBNUI2QyxTQUFTO2dCQUF2RCxVQUFVOzs7d0JBUzFCLEtBQUs7OEJBRUwsS0FBSztrQ0FDTCxLQUFLO3VDQUNMLEtBQUs7a0NBQ0wsS0FBSzt3Q0FFTCxLQUFLO2lDQUVMLEtBQUs7dUNBQ0wsS0FBSzttQ0FFTCxLQUFLO3lDQUNMLEtBQUs7O0lBNkJSLHNCQUFDO0NBQUEsQUFoREQsSUFnREM7U0E1Q1ksZUFBZTs7O0lBRTFCLGdDQUF3Qjs7SUFFeEIsc0NBQTBCOztJQUMxQiwwQ0FBOEI7O0lBQzlCLCtDQUFtQzs7SUFDbkMsMENBQWdFOztJQUVoRSxnREFBb0Q7O0lBRXBELHlDQUEwQzs7SUFDMUMsK0NBQXVDOztJQUV2QywyQ0FBNEM7O0lBQzVDLGlEQUF5Qzs7Ozs7SUFFekMscUNBQTZDOztJQUM3Qyx5Q0FBd0I7Ozs7O0lBR3RCLG1DQUF1Qzs7Ozs7SUFDdkMsbUNBQTJCOzs7OztJQUMzQixzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBJbmplY3QsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N1aS1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgbmF2YmFyQnJhbmQ6IGFueTtcbiAgQElucHV0KCkgbmF2YmFyQnJhbmRGdWxsOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kTWluaW1pemVkOiBhbnk7XG4gIEBJbnB1dCgpIG5hdmJhckJyYW5kVGV4dDogYW55ID0ge2ljb246ICfwn4WyJywgdGV4dDogJ/CfhbIgQ29yZVVJJ307XG4gIC8vIEBJbnB1dCgpIG5hdmJhckJyYW5kSHJlZjogc3RyaW5nID0gJyc7IC8vIGRlcHJlY2F0ZWQsIHVzZSBuYXZiYXJCcmFuZFJvdXRlckxpbmsgaW5zdGVhZFxuICBASW5wdXQoKSBuYXZiYXJCcmFuZFJvdXRlckxpbms6IGFueVtdIHwgc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KCkgc2lkZWJhclRvZ2dsZXI6IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1vYmlsZVNpZGViYXJUb2dnbGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGFzaWRlTWVudVRvZ2dsZXI6IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1vYmlsZUFzaWRlTWVudVRvZ2dsZXI6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSByZWFkb25seSBmaXhlZENsYXNzID0gJ2hlYWRlci1maXhlZCc7XG4gIG5hdmJhckJyYW5kSW1nOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXBwLWhlYWRlcicpO1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICduYXZiYXInKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcbiAgICB0aGlzLm5hdmJhckJyYW5kSW1nID0gQm9vbGVhbih0aGlzLm5hdmJhckJyYW5kIHx8IHRoaXMubmF2YmFyQnJhbmRGdWxsIHx8IHRoaXMubmF2YmFyQnJhbmRNaW5pbWl6ZWQpO1xuICAgIC8vIHRoaXMubmF2YmFyQnJhbmRSb3V0ZXJMaW5rID0gdGhpcy5uYXZiYXJCcmFuZFJvdXRlckxpbmtbMF0gPyB0aGlzLm5hdmJhckJyYW5kUm91dGVyTGluayA6IHRoaXMubmF2YmFyQnJhbmRIcmVmO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XG4gIH1cblxuICBpc0ZpeGVkKGZpeGVkOiBib29sZWFuID0gdGhpcy5maXhlZCk6IHZvaWQge1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMuZml4ZWRDbGFzcyk7XG4gICAgfVxuICB9XG59XG4iXX0=