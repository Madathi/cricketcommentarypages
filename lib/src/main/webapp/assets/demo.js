'use strict';



;define("demo/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("demo/app", ["exports", "ember-resolver", "ember-load-initializers", "demo/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("demo/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("demo/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("demo/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("demo/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define("demo/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("demo/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("demo/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("demo/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define("demo/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define("demo/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("demo/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define("demo/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define("demo/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define("demo/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define("demo/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define("demo/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("demo/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define("demo/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define("demo/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("demo/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("demo/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define("demo/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("demo/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define("demo/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("demo/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define("demo/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
;define("demo/components/bs-form/element/control/switch", ["exports", "ember-bootstrap/components/bs-form/element/control/switch"], function (_exports, _switch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _switch.default;
    }
  });
});
;define("demo/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define("demo/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define("demo/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define("demo/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define("demo/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define("demo/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define("demo/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("demo/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define("demo/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("demo/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define("demo/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("demo/components/bs-form/element/legend", ["exports", "ember-bootstrap/components/bs-form/element/legend"], function (_exports, _legend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _legend.default;
    }
  });
});
;define("demo/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define("demo/components/bs-link-to", ["exports", "ember-bootstrap/components/bs-link-to"], function (_exports, _bsLinkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsLinkTo.default;
    }
  });
});
;define("demo/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define("demo/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define("demo/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("demo/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define("demo/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define("demo/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define("demo/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define("demo/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("demo/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define("demo/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("demo/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define("demo/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define("demo/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("demo/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define("demo/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("demo/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define("demo/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("demo/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define("demo/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define("demo/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define("demo/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define("demo/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define("demo/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("demo/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("demo/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("demo/components/table", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  <head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script>
    var overid=1,over=1,i,playerid=1,markup,tableBody,playersrun=0,ballno=0,currentplayer=0;
    var players=['MS DHONI', 'Suresh Raina', 'Ravi Jadeja','Dwayne Bravo','Sam Curran','Mitchell Santner','Shardul Thakur','Deepak Chahar','Lungi Ngidi','Imran Tahir','Ruturaj Gaikwad'];
    let socket = new WebSocket("ws://192.168.1.60:9090/lib/cricketServerEndpoint");
    socket.onmessage=function processMessage(bowlingscore){
      document.getElementById("ball1"),innerHTML=bowlingscore;
    }
  </script>
  </head>
  <body>
      <center><h1>SCORE BOARD</h1></center>
      <div>
      <div class="card rundetailsbox">
      <h4>RUNS:{{this.run}}/{{this.out}}</h4>
      <h4>4's Count:{{this.fourcount}}</h4>
      <h4>6's Count:{{this.sixcount}}</h4> 
      </div>
    <div class="card player">
    <h6 style="margin-top:10px">PLAYER1:<p>{{this.player1}}</p></h6>
    <h6 style="margin-top:20px;">PLAYER2:<p>{{this.player2}}</p></h6>
    </div>
    <center><h4 id="winstatus">CSK Needs {{this.runs}} runs in {{this.totalballs}} balls to win.</h4></center>
       <select name="score" class="custom-select" id="score" style="width:20%;margin-left:20px">
      <option value="" disabled selected hidden>CHOOSE SCORE</option>   
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="6">6</option>
      <option value="out">out</option>
    </select>
    <input type="button" class="btn btn-dark" value="bowl" id="bowl"  onclick={{action "add"}}/>
      </div>
   
    <div style="float: left;width:50%">
      <h6 style="margin-top:100px" ><center>SCORE TABLE</center></h6>
      <table class="table" style="margin-left:50px;margin-top:50px;table-layout:fixed">
    <thead class="thead-dark">
      <tr>
        <th scope="col" colspan="6">SCORES</th>
        <th scope="col">OVERS</th>
        <th scope="col">RUNS</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <td><p id="ball1"></p></td>
        <td><p id="ball2"></p></td>
        <td><p id="ball3"></p></td>
        <td><p id="ball4"></p></td>
        <td><p id="ball5"></p></td>
        <td><p id="ball6"></p></td>
        <td>1</td>
        <td><p id="run1"></p></td>
      </tr>
    </tbody>
  </table>
  </div>
  <div2 style="float:right;width:40%">
    <h6 style="margin-top: 50px;"><center>PLAYER'S TABLE</center></h6>
  <table class="table" style="margin-right:200px;height:30%;margin-top:50px;table-layout:fixed">
     <thead class="thead-dark">
    <th scope="col">PLAYER'S NAME</th>
    <th scope="col">RUNS</th>
    <th scope="col">OUT</th>
    </thead>
    <tbody>
      <tr><td style="height:65px;">MS DHONI</td><td><p id="MS DHONI"></p></td><td ><p id="MS DHONIout"></p></td></tr>
      <tr><td style="height:65px;">Suresh Raina</td><td><p id="Suresh Raina"></p></td><td ><p id="Suresh Rainaout"></p></td></tr>
      <tr><td style="height:65px;">Ravi Jadeja</td><td><p id="Ravi Jadeja"></p></td><td ><p id="Ravi Jadejaout"></p></td></tr>
      <tr><td style="height:65px;">Dwayne Bravo</td><td><p id="Dwayne Bravo"></p></td><td ><p id="Dwayne Bravoout"></p></td></tr>
      <tr><td style="height:65px;">Sam Curran</td><td><p id="Sam Curran"></p></td><td ><p id="Sam Curranout"></p></td></tr>
      <tr><td style="height:65px;">Mitchell Santner</td><td><p id="Mitchell Santner"></p></td><td ><p id="Mitchell Santnerout"></p></td></tr>
      <tr><td style="height:65px;">Shardul Thakur</td><td><p id="Shardul Thakur"></p></td><td ><p id="Shardul Thakurout"></p></td></tr>
      <tr><td style="height:65px;">Deepak Chahar</td><td><p id="Deepak Chahar"></p></td><td ><p id="Deepak Chaharout"></p></td></tr>
      <tr><td style="height:65px;">Lungi Ngidi</td><td><p id="Lungi Ngidi"></p></td><td ><p id="Lungi Ngidiout"></p></td></tr>
      <tr><td style="height:65px;">Imran Tahir</td><td><p id="Imran Tahir"></p></td><td ><p id="Imran Tahirout"></p></td></tr>
      <tr><td style="height:65px;">Ruturaj Gaikwad</td><td><p id="Ruturaj Gaikwad"></p></td><td ><p id="Ruturaj Gaikwadout"></p></td></tr>
    </tbody>
  </table>
  </div2>
  <footer class="footer"><marquee direction="right">{{this.comments}}</marquee></footer>
  </body>
  
  
  */
  {
    "id": "rZGRfmag",
    "block": "[[[1,\"\\n\"],[10,\"head\"],[12],[1,\"\\n\"],[10,\"script\"],[14,\"src\",\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"],[12],[13],[1,\"\\n\"],[10,\"script\"],[12],[1,\"\\n  var overid=1,over=1,i,playerid=1,markup,tableBody,playersrun=0,ballno=0,currentplayer=0;\\n  var players=['MS DHONI', 'Suresh Raina', 'Ravi Jadeja','Dwayne Bravo','Sam Curran','Mitchell Santner','Shardul Thakur','Deepak Chahar','Lungi Ngidi','Imran Tahir','Ruturaj Gaikwad'];\\n  let socket = new WebSocket(\\\"ws://192.168.1.60:9090/lib/cricketServerEndpoint\\\");\\n  socket.onmessage=function processMessage(bowlingscore){\\n    document.getElementById(\\\"ball1\\\"),innerHTML=bowlingscore;\\n  }\\n\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"body\"],[12],[1,\"\\n    \"],[10,\"center\"],[12],[10,\"h1\"],[12],[1,\"SCORE BOARD\"],[13],[13],[1,\"\\n    \"],[10,0],[12],[1,\"\\n    \"],[10,0],[14,0,\"card rundetailsbox\"],[12],[1,\"\\n    \"],[10,\"h4\"],[12],[1,\"RUNS:\"],[1,[30,0,[\"run\"]]],[1,\"/\"],[1,[30,0,[\"out\"]]],[13],[1,\"\\n    \"],[10,\"h4\"],[12],[1,\"4's Count:\"],[1,[30,0,[\"fourcount\"]]],[13],[1,\"\\n    \"],[10,\"h4\"],[12],[1,\"6's Count:\"],[1,[30,0,[\"sixcount\"]]],[13],[1,\" \\n    \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"card player\"],[12],[1,\"\\n  \"],[10,\"h6\"],[14,5,\"margin-top:10px\"],[12],[1,\"PLAYER1:\"],[10,2],[12],[1,[30,0,[\"player1\"]]],[13],[13],[1,\"\\n  \"],[10,\"h6\"],[14,5,\"margin-top:20px;\"],[12],[1,\"PLAYER2:\"],[10,2],[12],[1,[30,0,[\"player2\"]]],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"center\"],[12],[10,\"h4\"],[14,1,\"winstatus\"],[12],[1,\"CSK Needs \"],[1,[30,0,[\"runs\"]]],[1,\" runs in \"],[1,[30,0,[\"totalballs\"]]],[1,\" balls to win.\"],[13],[13],[1,\"\\n     \"],[10,\"select\"],[14,3,\"score\"],[14,0,\"custom-select\"],[14,1,\"score\"],[14,5,\"width:20%;margin-left:20px\"],[12],[1,\"\\n    \"],[10,\"option\"],[14,2,\"\"],[14,\"disabled\",\"\"],[14,\"selected\",\"\"],[14,\"hidden\",\"\"],[12],[1,\"CHOOSE SCORE\"],[13],[1,\"   \\n    \"],[10,\"option\"],[14,2,\"1\"],[12],[1,\"1\"],[13],[1,\"\\n    \"],[10,\"option\"],[14,2,\"2\"],[12],[1,\"2\"],[13],[1,\"\\n    \"],[10,\"option\"],[14,2,\"3\"],[12],[1,\"3\"],[13],[1,\"\\n    \"],[10,\"option\"],[14,2,\"4\"],[12],[1,\"4\"],[13],[1,\"\\n    \"],[10,\"option\"],[14,2,\"6\"],[12],[1,\"6\"],[13],[1,\"\\n    \"],[10,\"option\"],[14,2,\"out\"],[12],[1,\"out\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"input\"],[14,0,\"btn btn-dark\"],[14,2,\"bowl\"],[14,1,\"bowl\"],[15,\"onclick\",[28,[37,0],[[30,0],\"add\"],null]],[14,4,\"button\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n \\n  \"],[10,0],[14,5,\"float: left;width:50%\"],[12],[1,\"\\n    \"],[10,\"h6\"],[14,5,\"margin-top:100px\"],[12],[10,\"center\"],[12],[1,\"SCORE TABLE\"],[13],[13],[1,\"\\n    \"],[10,\"table\"],[14,0,\"table\"],[14,5,\"margin-left:50px;margin-top:50px;table-layout:fixed\"],[12],[1,\"\\n  \"],[10,\"thead\"],[14,0,\"thead-dark\"],[12],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[14,\"scope\",\"col\"],[14,\"colspan\",\"6\"],[12],[1,\"SCORES\"],[13],[1,\"\\n      \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"OVERS\"],[13],[1,\"\\n      \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"RUNS\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\" \\n  \"],[10,\"tbody\"],[12],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"td\"],[12],[10,2],[14,1,\"ball1\"],[12],[13],[13],[1,\"\\n      \"],[10,\"td\"],[12],[10,2],[14,1,\"ball2\"],[12],[13],[13],[1,\"\\n      \"],[10,\"td\"],[12],[10,2],[14,1,\"ball3\"],[12],[13],[13],[1,\"\\n      \"],[10,\"td\"],[12],[10,2],[14,1,\"ball4\"],[12],[13],[13],[1,\"\\n      \"],[10,\"td\"],[12],[10,2],[14,1,\"ball5\"],[12],[13],[13],[1,\"\\n      \"],[10,\"td\"],[12],[10,2],[14,1,\"ball6\"],[12],[13],[13],[1,\"\\n      \"],[10,\"td\"],[12],[1,\"1\"],[13],[1,\"\\n      \"],[10,\"td\"],[12],[10,2],[14,1,\"run1\"],[12],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"div2\"],[14,5,\"float:right;width:40%\"],[12],[1,\"\\n  \"],[10,\"h6\"],[14,5,\"margin-top: 50px;\"],[12],[10,\"center\"],[12],[1,\"PLAYER'S TABLE\"],[13],[13],[1,\"\\n\"],[10,\"table\"],[14,0,\"table\"],[14,5,\"margin-right:200px;height:30%;margin-top:50px;table-layout:fixed\"],[12],[1,\"\\n   \"],[10,\"thead\"],[14,0,\"thead-dark\"],[12],[1,\"\\n  \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"PLAYER'S NAME\"],[13],[1,\"\\n  \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"RUNS\"],[13],[1,\"\\n  \"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"OUT\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tbody\"],[12],[1,\"\\n    \"],[10,\"tr\"],[12],[10,\"td\"],[14,5,\"height:65px;\"],[12],[1,\"MS DHONI\"],[13],[10,\"td\"],[12],[10,2],[14,1,\"MS DHONI\"],[12],[13],[13],[10,\"td\"],[12],[10,2],[14,1,\"MS DHONIout\"],[12],[13],[13],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[10,\"td\"],[14,5,\"height:65px;\"],[12],[1,\"Suresh Raina\"],[13],[10,\"td\"],[12],[10,2],[14,1,\"Suresh Raina\"],[12],[13],[13],[10,\"td\"],[12],[10,2],[14,1,\"Suresh Rainaout\"],[12],[13],[13],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[10,\"td\"],[14,5,\"height:65px;\"],[12],[1,\"Ravi Jadeja\"],[13],[10,\"td\"],[12],[10,2],[14,1,\"Ravi Jadeja\"],[12],[13],[13],[10,\"td\"],[12],[10,2],[14,1,\"Ravi Jadejaout\"],[12],[13],[13],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[10,\"td\"],[14,5,\"height:65px;\"],[12],[1,\"Dwayne Bravo\"],[13],[10,\"td\"],[12],[10,2],[14,1,\"Dwayne Bravo\"],[12],[13],[13],[10,\"td\"],[12],[10,2],[14,1,\"Dwayne Bravoout\"],[12],[13],[13],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[10,\"td\"],[14,5,\"height:65px;\"],[12],[1,\"Sam Curran\"],[13],[10,\"td\"],[12],[10,2],[14,1,\"Sam Curran\"],[12],[13],[13],[10,\"td\"],[12],[10,2],[14,1,\"Sam Curranout\"],[12],[13],[13],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[10,\"td\"],[14,5,\"height:65px;\"],[12],[1,\"Mitchell Santner\"],[13],[10,\"td\"],[12],[10,2],[14,1,\"Mitchell Santner\"],[12],[13],[13],[10,\"td\"],[12],[10,2],[14,1,\"Mitchell Santnerout\"],[12],[13],[13],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[10,\"td\"],[14,5,\"height:65px;\"],[12],[1,\"Shardul Thakur\"],[13],[10,\"td\"],[12],[10,2],[14,1,\"Shardul Thakur\"],[12],[13],[13],[10,\"td\"],[12],[10,2],[14,1,\"Shardul Thakurout\"],[12],[13],[13],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[10,\"td\"],[14,5,\"height:65px;\"],[12],[1,\"Deepak Chahar\"],[13],[10,\"td\"],[12],[10,2],[14,1,\"Deepak Chahar\"],[12],[13],[13],[10,\"td\"],[12],[10,2],[14,1,\"Deepak Chaharout\"],[12],[13],[13],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[10,\"td\"],[14,5,\"height:65px;\"],[12],[1,\"Lungi Ngidi\"],[13],[10,\"td\"],[12],[10,2],[14,1,\"Lungi Ngidi\"],[12],[13],[13],[10,\"td\"],[12],[10,2],[14,1,\"Lungi Ngidiout\"],[12],[13],[13],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[10,\"td\"],[14,5,\"height:65px;\"],[12],[1,\"Imran Tahir\"],[13],[10,\"td\"],[12],[10,2],[14,1,\"Imran Tahir\"],[12],[13],[13],[10,\"td\"],[12],[10,2],[14,1,\"Imran Tahirout\"],[12],[13],[13],[13],[1,\"\\n    \"],[10,\"tr\"],[12],[10,\"td\"],[14,5,\"height:65px;\"],[12],[1,\"Ruturaj Gaikwad\"],[13],[10,\"td\"],[12],[10,2],[14,1,\"Ruturaj Gaikwad\"],[12],[13],[13],[10,\"td\"],[12],[10,2],[14,1,\"Ruturaj Gaikwadout\"],[12],[13],[13],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[10,\"footer\"],[14,0,\"footer\"],[12],[10,\"marquee\"],[14,\"direction\",\"right\"],[12],[1,[30,0,[\"comments\"]]],[13],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"]],[],false,[\"action\"]]",
    "moduleName": "demo/components/table.hbs",
    "isStrictMode": false
  });

  let TableComponent = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, _dec6 = Ember._tracked, _dec7 = Ember._tracked, _dec8 = Ember._tracked, _dec9 = Ember._tracked, _dec10 = Ember._tracked, _dec11 = Ember._tracked, _dec12 = Ember._tracked, _dec13 = Ember._tracked, _dec14 = Ember._tracked, _dec15 = Ember._tracked, _dec16 = Ember._tracked, _dec17 = Ember._action, _dec18 = Ember.inject.service('cricket'), (_class = class TableComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "run", _descriptor, this);

      _initializerDefineProperty(this, "out", _descriptor2, this);

      _initializerDefineProperty(this, "fourcount", _descriptor3, this);

      _initializerDefineProperty(this, "sixcount", _descriptor4, this);

      _initializerDefineProperty(this, "playersrun", _descriptor5, this);

      _initializerDefineProperty(this, "maxrun", _descriptor6, this);

      _initializerDefineProperty(this, "playerindex1", _descriptor7, this);

      _initializerDefineProperty(this, "playerindex2", _descriptor8, this);

      _initializerDefineProperty(this, "player1", _descriptor9, this);

      _initializerDefineProperty(this, "player2", _descriptor10, this);

      _initializerDefineProperty(this, "manofthematch", _descriptor11, this);

      _initializerDefineProperty(this, "totalballs", _descriptor12, this);

      _initializerDefineProperty(this, "comments", _descriptor13, this);

      _initializerDefineProperty(this, "player1run", _descriptor14, this);

      _initializerDefineProperty(this, "player2run", _descriptor15, this);

      _initializerDefineProperty(this, "player", _descriptor16, this);

      _initializerDefineProperty(this, "cricketscore", _descriptor17, this);
    }

    add() {
      if (null == $('#score').val() || $('#score').val() == '') {
        alert("enter score");
        return false;
      }

      if (this.totalballs == 120) {
        this.playerindex1 = Math.floor(Math.random() * players.length);
        this.player1 = players[this.playerindex1];
        console.log(this.player1);
        players.splice(this.playerindex1, 1);
        this.playerindex2 = Math.floor(Math.random() * players.length);
        this.player2 = players[this.playerindex2];
        players.splice(this.playerindex2, 1);
        console.log(this.player2);
      }

      var score = document.getElementById("score").value;
      document.getElementById("ball" + overid).innerHTML = score;
      ballno = ballno + 1;

      if (currentplayer == 0) {
        if (score == "out") {
          this.playersrun = this.player1run;
          document.getElementById(this.player1 + "out").innerHTML = "out";
          document.getElementById(this.player1 + "out").style.color = "red";
          this.player = this.player1;
          console.log(this.playerindex1);
        } else {
          this.player1run = parseInt(this.player1run) + parseInt(score);
          document.getElementById(this.player1).innerHTML = this.player1run;
        }
      } else if (currentplayer == 1) {
        if (score == "out") {
          this.playersrun = this.player2run;
          document.getElementById(this.player2 + "out").innerHTML = "out";
          document.getElementById(this.player2 + "out").style.color = "red";
          this.player = this.player2;
        } else {
          this.player2run = parseInt(this.player2run) + parseInt(score);
          document.getElementById(this.player2).innerHTML = this.player2run;
        }
      }

      if (score == "1" || score == "3") currentplayer = currentplayer == 1 ? 0 : 1;

      if (score == "4") {
        alert("HURRAY IT'S A FOUR!!");
        this.fourcount += 1;
      } else if (score == "out") {
        alert("OUT!! NEXT BATSMAN COMES IN");

        if (this.maxrun < playersrun) {
          this.maxrun = playersrun;
          this.manofthematch = this.player;
        }

        this.out += 1;
        score = 0;

        if (this.out == 11) {
          document.getElementById("winstatus").style.display = "none";
          this.comments = "GAME OVER,CSK LOST THE GAME. Man of the match goes to " + this.player;
        }
      } else if (score == "6") {
        alert("HURRAY IT'S A SIX");
        this.sixcount += 1;
      }

      this.run = parseInt(this.run) + parseInt(score);
      document.getElementById("run" + over).innerHTML = this.run;
      this.totalballs--;

      if (this.run < 154 && this.totalballs == 0) {
        document.getElementById("winstatus").style.display = "none";
        this.comments = "GAME OVER,CSK LOST THE GAME .Man of the match goes to " + this.player;
      }

      if (this.run >= 154) {
        document.getElementById("winstatus").style.display = "none";
        this.comments = "GAME OVER,CSK WON THE GAME.Man of the match goes to " + this.player;
      }

      if (overid % 6 == 0) {
        i = overid + 1;
        ballno = 0;
        over++;
        markup = '<tr><td><p id="ball' + i++ + '"></p></td>' + '<td><p id="ball' + i++ + '"></p></td>' + '<td><p id="ball' + i++ + '"></p></td>' + '<td><p id="ball' + i++ + '"></p></td>' + '<td><p id="ball' + i++ + '"></p></td>' + '<td><p id="ball' + i++ + '"></p></td>' + '<td>' + over + '</td>' + '<td><p id="run' + over + '"></p></td></tr>';
        tableBody = $("div table tbody");
        tableBody.append(markup);
      }

      overid = overid + 1;
      var bowlingscore = $('#score').val();
      var overrun = this.run;
      var ball = ballno;
      var cricketplayer1 = this.player1;
      var cricketplayer2 = this.player2;
      var cricketplayer1score = this.player1run;
      var cricketplayer2score = this.player2run;
      var currentplayerstatus = currentplayer;
      $.ajax({
        type: "POST",
        url: "/lib/cricket",
        data: {
          bowlingscore: bowlingscore,
          overrun: overrun,
          ball: ball,
          cricketplayer1: cricketplayer1,
          cricketplayer2: cricketplayer2,
          cricketplayer1score: cricketplayer1score,
          cricketplayer2score: cricketplayer2score,
          currentplayerstatus: currentplayerstatus
        },
        dataType: "text",
        success: function (data) {
          console.log("success data :" + data);
        },
        //If we get any error from the server
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("Something really bad happened " + textStatus + ";" + errorThrown);
        }
      });

      if (currentplayer == 0 && score == 0) {
        this.playerindex1 = Math.floor(Math.random() * players.length);
        this.player1 = players[this.playerindex1];
        players.splice(this.playerindex1, 1);
        this.player1run = 0;
      } else if (currentplayer == 1 && score == 0) {
        this.player2run = 0;
        this.playerindex2 = Math.floor(Math.random() * players.length);
        this.player2 = players[this.playerindex1];
        players.splice(this.playerindex2, 1);
      }

      socket.onopen = function () {
        // Web Socket is connected, send data using send()
        socket.send(score);
        alert("Message is sent...");
      };
    }

    get runs() {
      return this.cricketscore.totalrun() - this.run;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "run", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "out", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "fourcount", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "sixcount", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "playersrun", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "maxrun", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "playerindex1", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "playerindex2", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "player1", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "player2", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "manofthematch", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "totalballs", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 120;
    }
  }), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "comments", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "";
    }
  }), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "player1run", [_dec14], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "player2run", [_dec15], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "player", [_dec16], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "";
    }
  }), _applyDecoratedDescriptor(_class.prototype, "add", [_dec17], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "cricketscore", [_dec18], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = TableComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, TableComponent);
});
;define("demo/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("demo/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("demo/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("demo/helpers/app-version", ["exports", "demo/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("demo/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
;define("demo/helpers/bs-default", ["exports", "ember-bootstrap/helpers/bs-default"], function (_exports, _bsDefault) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDefault.default;
    }
  });
});
;define("demo/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
});
;define("demo/helpers/bs-noop", ["exports", "ember-bootstrap/helpers/bs-noop"], function (_exports, _bsNoop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNoop.default;
    }
  });
});
;define("demo/helpers/bs-size-class", ["exports", "ember-bootstrap/helpers/bs-size-class"], function (_exports, _bsSizeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsSizeClass.default;
    }
  });
});
;define("demo/helpers/bs-type-class", ["exports", "ember-bootstrap/helpers/bs-type-class"], function (_exports, _bsTypeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTypeClass.default;
    }
  });
});
;define("demo/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("demo/helpers/did-insert", ["exports", "ember-render-helpers/helpers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("demo/helpers/did-update", ["exports", "ember-render-helpers/helpers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("demo/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("demo/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("demo/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
;define("demo/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
;define("demo/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
;define("demo/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("demo/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("demo/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("demo/helpers/ref-to", ["exports", "ember-ref-bucket/helpers/ref-to"], function (_exports, _refTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
  Object.defineProperty(_exports, "refTo", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
});
;define("demo/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("demo/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("demo/helpers/will-destroy", ["exports", "ember-render-helpers/helpers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("demo/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "demo/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("demo/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("demo/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("demo/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("demo/initializers/export-application-global", ["exports", "demo/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("demo/initializers/load-bootstrap-config", ["exports", "demo/config/environment", "ember-bootstrap/config", "ember-bootstrap/version"], function (_exports, _environment, _config, _version) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* container, application */
  {
    _config.default.load(_environment.default['ember-bootstrap'] || {});

    (0, _version.registerLibrary)();
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});
;define("demo/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("demo/modifiers/create-ref", ["exports", "ember-ref-bucket/modifiers/create-ref"], function (_exports, _createRef) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _createRef.default;
    }
  });
});
;define("demo/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("demo/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("demo/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
;define("demo/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
});
;define("demo/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("demo/router", ["exports", "demo/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('homepage');
    this.route('gamepage');
  });
});
;define("demo/routes/failure", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class FailureRoute extends Ember.Route {}

  _exports.default = FailureRoute;
});
;define("demo/routes/homepage", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class HomepageRoute extends Ember.Route {}

  _exports.default = HomepageRoute;
});
;define("demo/routes/success", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SuccessRoute extends Ember.Route {}

  _exports.default = SuccessRoute;
});
;define("demo/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("demo/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("demo/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("demo/services/cricket", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let CricketService = (_dec = Ember._tracked, _dec2 = Ember._action, (_class = class CricketService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "run", _descriptor, this);
    }

    totalrun() {
      return this.run;
    }

  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "run", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 154;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "totalrun", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "totalrun"), _class.prototype)), _class));
  _exports.default = CricketService;
});
;define("demo/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("demo/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("demo/services/socket-io", ["exports", "ember-websockets/services/socket-io"], function (_exports, _socketIo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _socketIo.default;
    }
  });
});
;define("demo/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("demo/services/websockets", ["exports", "ember-websockets/services/websockets"], function (_exports, _websockets) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _websockets.default;
    }
  });
});
;define("demo/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9nuriy55",
    "block": "[[[1,[28,[35,0],[\"Demo\"],null]],[1,\"\\n\"],[1,[34,1]],[1,\"\\n\"],[46,[28,[37,3],null,null],null,null,null]],[],false,[\"page-title\",\"homepage\",\"component\",\"-outlet\"]]",
    "moduleName": "demo/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("demo/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("demo/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("demo/templates/gamepage", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+MMGPIUT",
    "block": "[[[1,[28,[35,0],[\"Gamepage\"],null]],[1,\"\\n\"],[1,[34,1]],[1,\"\\n\"],[46,[28,[37,3],null,null],null,null,null]],[],false,[\"page-title\",\"table\",\"component\",\"-outlet\"]]",
    "moduleName": "demo/templates/gamepage.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("demo/templates/homepage", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AeG28Lhp",
    "block": "[[[1,[28,[35,0],[\"Homepage\"],null]],[1,\"\\n\"],[10,0],[12],[1,\"\\n\"],[10,\"center\"],[12],[10,\"h1\"],[12],[1,\"CRICKET COMMENTARY PAGE\"],[13],[13],[1,\"\\n\"],[10,0],[14,0,\"box\"],[12],[1,\"\\n\"],[10,\"h4\"],[12],[1,\"TOTAL RUNS TO BE ACHIEVED:154\"],[13],[1,\"\\n\"],[10,\"h4\"],[12],[1,\"OVERS:20\"],[13],[1,\"\\n\"],[10,\"h4\"],[12],[1,\"TEAM NAME:CSK\"],[13],[1,\" \\n\"],[13],[1,\"\\n\"],[8,[39,1],[[24,0,\"button\"]],[[\"@route\"],[\"gamepage\"]],[[\"default\"],[[[[1,\"START\"]],[]]]]],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,3],null,null],null,null,null]],[],false,[\"page-title\",\"link-to\",\"component\",\"-outlet\"]]",
    "moduleName": "demo/templates/homepage.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("demo/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("demo/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("demo/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("demo/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('demo/config/environment', [], function() {
  var prefix = 'demo';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("demo/app")["default"].create({"name":"demo","version":"0.0.0+2eda68ed"});
          }
        
//# sourceMappingURL=demo.map
