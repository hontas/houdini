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

var _jsxFileName = '/Users/hontas/Sites/dev/houdini/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    className: 'jsx-3048451715' + ' ' + 'index',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('script', { src: 'static/main.js', className: 'jsx-3048451715',
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
    className: 'jsx-3048451715',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Houdini CSS'), _react2.default.createElement('div', {
    className: 'jsx-3048451715' + ' ' + 'smooth',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('div', {
    className: 'jsx-3048451715' + ' ' + 'balls',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_style2.default, {
    styleId: '3048451715',
    css: '.index.jsx-3048451715{background-image:url(static/houdini.jpg);height:100%;}.smooth.jsx-3048451715{background:linear-gradient(deeppink,orangered);-webkit-mask-image:paint(smooth-corners);width:100px;height:100px;}.balls.jsx-3048451715{--ball-radius:20px;--ball-rotation:0deg;--rotation:0deg;background:paint(comhem-balls);width:250px;height:200px;margin:1em 0;-webkit-transition-property:--ball-radius,--ball-rotation,--rotation;transition-property:--ball-radius,--ball-rotation,--rotation;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-timing-function:ease;transition-timing-function:ease;}.balls.jsx-3048451715:hover{-webkit-animation:rotate-jsx-3048451715 1s ease-in-out infinite alternate;animation:rotate-jsx-3048451715 1s ease-in-out infinite alternate;}@-webkit-keyframes rotate-jsx-3048451715{from{--rotation:0deg;--ball-rotation:0deg;}to{--rotation:180deg;--ball-rotation:180deg;}}@keyframes rotate-jsx-3048451715{from{--rotation:0deg;--ball-rotation:0deg;}to{--rotation:180deg;--ball-rotation:180deg;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFnQixBQUdrRCxBQUtPLEFBTzdCLEFBYWdDLEFBS2pDLEFBSUUsZ0JBSEcsRUFJRSxDQXRCSixrQkFtQnJCLEdBbEJnQixDQWJKLEFBbUNaLE1BOUJ5QyxNQUozQyxHQWFpQywrQkFDbkIsQ0FUQSxXQVVDLENBVEEsWUFVQSxDQVRmLFlBVWlFLGVBT2pFLG1IQU4wQix3REFDUSx3RUFDbEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hvbnRhcy9TaXRlcy9kZXYvaG91ZGluaSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaW5kZXhcIj5cbiAgICA8SGVhZD5cbiAgICAgIDxzY3JpcHQgc3JjPVwic3RhdGljL21haW4uanNcIj48L3NjcmlwdD5cbiAgICA8L0hlYWQ+XG4gICAgPEhlYWRlciAvPlxuICAgIDxoMT5Ib3VkaW5pIENTUzwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbW9vdGhcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbGxzXCI+PC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuaW5kZXgge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RhdGljL2hvdWRpbmkuanBnKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAuc21vb3RoIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGRlZXBwaW5rLCBvcmFuZ2VyZWQpO1xuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IHBhaW50KHNtb290aC1jb3JuZXJzKTtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgfVxuXG4gICAgICAuYmFsbHMge1xuICAgICAgICAtLWJhbGwtcmFkaXVzOiAyMHB4O1xuICAgICAgICAtLWJhbGwtcm90YXRpb246IDBkZWc7XG4gICAgICAgIC0tcm90YXRpb246IDBkZWc7XG4gICAgICAgIGJhY2tncm91bmQ6IHBhaW50KGNvbWhlbS1iYWxscyk7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogLS1iYWxsLXJhZGl1cywgLS1iYWxsLXJvdGF0aW9uLCAtLXJvdGF0aW9uO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgfVxuXG4gICAgICAuYmFsbHM6aG92ZXIge1xuICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgLS1yb3RhdGlvbjogMGRlZztcbiAgICAgICAgICAtLWJhbGwtcm90YXRpb246IDBkZWc7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIC0tcm90YXRpb246IDE4MGRlZztcbiAgICAgICAgICAtLWJhbGwtcm90YXRpb246IDE4MGRlZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWSxBQUVuQjs7Ozs7Ozs7a0JBQWUsWUFBQTt5QkFDYixjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsK0NBQ1UsS0FBUixBQUFZLDZCQUFaOztnQkFBQTtrQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFO3VCQUVGLEFBQUM7O2dCQUFEO2tCQUpGLEFBSUUsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FMRixBQUtFLEFBQ0E7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBTkYsQUFNRSxBQUNBO0FBREE7QUFBQTt3Q0FDQSxBQUFlOztnQkFBZjtrQkFQRixBQU9FO0FBQUE7QUFBQTthQVBGO1NBRGEsQUFDYjtBQUFBO0FBREYiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hvbnRhcy9TaXRlcy9kZXYvaG91ZGluaSJ9