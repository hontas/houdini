'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pontahontas/Sites/dev/houdini/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    className: 'jsx-1151965633',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('script', { src: 'static/main.js', className: 'jsx-1151965633',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  })), _react2.default.createElement(_header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('h1', {
    className: 'jsx-1151965633',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Houdini CSS'), _react2.default.createElement('h3', {
    className: 'jsx-1151965633',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Smooth corners'), _react2.default.createElement('div', {
    className: 'jsx-1151965633' + ' ' + 'smooth',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('h3', {
    className: 'jsx-1151965633',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, 'Com hem-cirklar'), _react2.default.createElement('div', {
    className: 'jsx-1151965633' + ' ' + 'balls',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '1151965633',
    css: '.smooth.jsx-1151965633{background:linear-gradient(deeppink,orangered);-webkit-mask-image:paint(smooth-corners);width:100px;height:100px;}.balls.jsx-1151965633{--ball-radius:20px;--ball-rotation:0deg;--rotation:0deg;background:paint(comhem-balls);width:250px;height:200px;margin:1em 0;-webkit-transition-property:--ball-radius,--ball-rotation,--rotation;transition-property:--ball-radius,--ball-rotation,--rotation;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:ease;transition-timing-function:ease;}.balls.jsx-1151965633:hover{-webkit-animation:rotate-jsx-1151965633 1s ease-in-out infinite alternate;animation:rotate-jsx-1151965633 1s ease-in-out infinite alternate;}@-webkit-keyframes rotate-jsx-1151965633{from{--rotation:0deg;--ball-rotation:0deg;}to{--rotation:180deg;--ball-rotation:180deg;}}@keyframes rotate-jsx-1151965633{from{--rotation:0deg;--ball-rotation:0deg;}to{--rotation:180deg;--ball-rotation:180deg;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVnQixBQUd5RCxBQU83QixBQWFnQyxBQUtqQyxBQUlFLGdCQUhHLEVBSUUsQ0F0Qkosa0JBbUJyQixHQWxCZ0IsQ0FzQmhCLE1BOUJ5QyxTQVNWLCtCQUNuQixDQVRBLFdBVUMsQ0FUQSxZQVVBLENBVGYsWUFVaUUsZUFPakUsbUhBTjBCLHdEQUNRLHdFQUNsQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcG9udGFob250YXMvU2l0ZXMvZGV2L2hvdWRpbmkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHNjcmlwdCBzcmM9XCJzdGF0aWMvbWFpbi5qc1wiPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgICA8SGVhZGVyIC8+XG4gICAgPGgxPkhvdWRpbmkgQ1NTPC9oMT5cbiAgICA8aDM+U21vb3RoIGNvcm5lcnM8L2gzPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic21vb3RoXCI+PC9kaXY+XG4gICAgPGgzPkNvbSBoZW0tY2lya2xhcjwvaDM+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWxsc1wiPjwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnNtb290aCB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChkZWVwcGluaywgb3JhbmdlcmVkKTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiBwYWludChzbW9vdGgtY29ybmVycyk7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIH1cblxuICAgICAgLmJhbGxzIHtcbiAgICAgICAgLS1iYWxsLXJhZGl1czogMjBweDtcbiAgICAgICAgLS1iYWxsLXJvdGF0aW9uOiAwZGVnO1xuICAgICAgICAtLXJvdGF0aW9uOiAwZGVnO1xuICAgICAgICBiYWNrZ3JvdW5kOiBwYWludChjb21oZW0tYmFsbHMpO1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IC0tYmFsbC1yYWRpdXMsIC0tYmFsbC1yb3RhdGlvbiwgLS1yb3RhdGlvbjtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgIH1cblxuICAgICAgLmJhbGxzOmhvdmVyIHtcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIC0tcm90YXRpb246IDBkZWc7XG4gICAgICAgICAgLS1iYWxsLXJvdGF0aW9uOiAwZGVnO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICAtLXJvdGF0aW9uOiAxODBkZWc7XG4gICAgICAgICAgLS1iYWxsLXJvdGF0aW9uOiAxODBkZWc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWSxBQUVuQjs7Ozs7Ozs7a0JBQWUsWUFBQTt5QkFDYixjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsK0NBQ1UsS0FBUixBQUFZLDZCQUFaOztnQkFBQTtrQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFO3VCQUVGLEFBQUM7O2dCQUFEO2tCQUpGLEFBSUUsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FMRixBQUtFLEFBQ0EsZ0NBQUEsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FORixBQU1FLEFBQ0E7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBUEYsQUFPRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVJGLEFBUUUsQUFDQTt3Q0FBQSxBQUFlOztnQkFBZjtrQkFURixBQVNFO0FBQUE7QUFBQTthQVRGO1NBRGEsQUFDYjtBQUFBO0FBREYiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BvbnRhaG9udGFzL1NpdGVzL2Rldi9ob3VkaW5pIn0=