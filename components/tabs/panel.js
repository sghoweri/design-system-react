define(['module', 'react', '../../utilities/constants'], function (module, _react, _constants) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	/*
 Copyright (c) 2015, salesforce.com, inc. All rights reserved.
 
 Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

	// # Tabs: Panel child component
	//
	// Helps implement the [Tabs design pattern](https://www.lightningdesignsystem.com/components/tabs/) in React.
	//
	// The `<Panel />` component allows us to simplify the structure of the `<Tabs />` component.
	//
	// Rather than require different (deeply nested) children for tabslist, with its tab(s) as well as tabpanel(s), we provide this Panel component which takes a `label` property that will become what is shown on the `<Tab />` that will be associated with it.
	//
	// The `children` of the Panel will be fed to the `<TabPanel />` component, while its `label` is handled in `<Tab />`, via `<TabsList />`.
	/**
  *
  * ```
  * <Panel label="Tab 1">
  * 	<div>
  * 		<h2 className="slds-text-heading--medium">This is my tab 1 contents!</h2>
  * 		<p>They show when you click the first tab.</p>
  * 	</div>
  * </Panel>
  * ```
  */

	// ## Dependencies

	// ### React
	var Panel = function Panel(_ref) {
		var children = _ref.children;
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.Children.toArray(children)
		);
	};

	// ## Constants


	Panel.displayName = _constants.PANEL;

	Panel.propTypes = {
		/**
   * The string that is handed off to the `<Tab />` component, ends up being the title and the label for the tab associated with its tab panel.
   */
		label: _react.PropTypes.string.isRequired,

		/**
   * The `children` are the actual tab panels to be rendered. They get created by [tabs/index.jsx](./index.jsx) in the `renderTabPanels` function.
   *
   * Note that the `<Panel />` component inserts a `div` element around the children, because React requires exactly one "parent" element returned. The `<TabPanel />` component simply dips down into `children` to get the children of this wrapping `div` so that it does not get rendered in the DOM.
   */
		children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node, _react.PropTypes.element]).isRequired
	};

	module.exports = Panel;
});