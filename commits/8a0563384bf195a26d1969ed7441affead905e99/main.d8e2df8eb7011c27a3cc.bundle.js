(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});var React=__importStar(__webpack_require__(25));exports.Text=function(props){return React.createElement("p",null,props.text)},exports.Text2=function(props){return React.createElement("p",{style:{color:props.color}},props.text)},exports.Text3=function(props){return React.createElement("p",{style:{backgroundColor:props.color}},props.text)}},221:function(module,exports,__webpack_require__){__webpack_require__(222),__webpack_require__(325),module.exports=__webpack_require__(326)},326:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(92);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(function loadStories(){__webpack_require__(489),function requireAll(requireContext){return requireContext.keys().map(requireContext)}(__webpack_require__(495))},module)}.call(this,__webpack_require__(327)(module))},489:function(module,exports,__webpack_require__){"use strict";(function(module){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(25)),react_2=__webpack_require__(92),demo_1=__webpack_require__(490),Text_1=__webpack_require__(219);react_2.storiesOf("Button",module).add("with text",function(){return react_1.default.createElement(demo_1.Button,null,"Hello Button")}).add("with emoji",function(){return react_1.default.createElement(demo_1.Button,null,react_1.default.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"))}).add("texts",function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(Text_1.Text,{text:"Yo"}),react_1.default.createElement(Text_1.Text2,{text:"Yo",color:"blue"}))})}).call(this,__webpack_require__(47)(module))},495:function(module,exports,__webpack_require__){var map={"./_storybook/examples/text/Text.story.tsx":496};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=495},496:function(module,exports,__webpack_require__){"use strict";(function(module){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(25)),react_2=__webpack_require__(92),Text_1=__webpack_require__(219),TextInput_1=__webpack_require__(497);function UpdateText(props){var _a=react_1.default.useState(props.default),value=_a[0],setValue=_a[1];return react_1.default.createElement("div",null,props.render(value),react_1.default.createElement(TextInput_1.TextInput,{label:"Value",id:"name",submitLabel:"Update",onSubmit:function(name){return setValue(name)}}))}react_2.storiesOf("examples",module).add("Text",function(){return react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(UpdateText,{default:"Hello world!",render:function(value){return react_1.default.createElement(Text_1.Text,{text:value})}}))})}).call(this,__webpack_require__(47)(module))},497:function(module,exports,__webpack_require__){"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importStar(__webpack_require__(25));exports.TextInput=function(props){var _a=react_1.useState(""),value=_a[0],setValue=_a[1];return react_1.default.createElement("form",{onSubmit:function(event){return event.preventDefault(),props.onSubmit(value),!1}},react_1.default.createElement("label",{htmlFor:props.id},props.label),react_1.default.createElement("input",{id:props.id,value:value,onChange:function(evt){return setValue(evt.target.value)}}),react_1.default.createElement("input",{type:"submit",value:props.submitLabel}))}}},[[221,1,2]]]);
//# sourceMappingURL=main.d8e2df8eb7011c27a3cc.bundle.js.map