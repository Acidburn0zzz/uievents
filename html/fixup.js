/* ReSpec creates really awkward names for IDL methods, like:
 *   widl-MouseEvent-initMouseEvent-void-DOMString-typeArg-boolean-canBubbleArg-boolean-cancelableArg-AbstractView-viewArg-long-detailArg-long-screenXArg-long-screenYArg-long-clientXArg-long-clientYArg-boolean-ctrlKeyArg-boolean-altKeyArg-boolean-shiftKeyArg-boolean-metaKeyArg-unsigned-short-buttonArg-EventTarget-relatedTargetArg
 * instead of simply:
 *   widl-MouseEvent-initMouseEvent
 *
 * This script fixes them.
 */

bad_ids = [
	["widl-Event-initEvent", "-void-DOMString-eventTypeArg-boolean-bubblesArg-boolean-cancelableArg"],
	["widl-Event-preventDefault", "-void"],
	["widl-Event-stopImmediatePropagation", "-void"],
	["widl-Event-stopPropagation", "-void"],
	["widl-EventTarget-addEventListener", "-void-DOMString-type-EventListener-listener-boolean-useCapture"],
	["widl-EventTarget-dispatchEvent", "-boolean-Event-event"],
	["widl-EventTarget-removeEventListener", "-void-DOMString-type-EventListener-listener-boolean-useCapture"],
	["widl-EventListener-handleEvent", "-void-Event-event"],
	["widl-DocumentEvent-createEvent", "-Event-DOMString-eventInterface"],
	["widl-UIEvent-initUIEvent", "-void-DOMString-typeArg-boolean-bubblesArg-boolean-cancelableArg-AbstractView-viewArg-long-detailArg"],
	["widl-MouseEvent-getModifierState", "-boolean-DOMString-keyArg"],
	["widl-MouseEvent-initMouseEvent", "-void-DOMString-typeArg-boolean-bubblesArg-boolean-cancelableArg-AbstractView-viewArg-long-detailArg-long-screenXArg-long-screenYArg-long-clientXArg-long-clientYArg-boolean-ctrlKeyArg-boolean-altKeyArg-boolean-shiftKeyArg-boolean-metaKeyArg-unsigned-short-buttonArg-EventTarget-relatedTargetArg"],
	["widl-KeyboardEvent-getModifierState", "-boolean-DOMString-keyArg"],
	["widl-MutationEvent-initMutationEvent", "-void-DOMString-typeArg-boolean-bubblesArg-boolean-cancelableArg-Node-relatedNodeArg-DOMString-prevValueArg-DOMString-newValueArg-DOMString-attrNameArg-unsigned-short-attrChangeArg"],
	["widl-CustomEvent-initCustomEvent", "-void-DOMString-typeArg-boolean-bubblesArg-boolean-cancelableArg-any-detailArg"],
	["widl-FocusEvent-initFocusEvent", "-void-DOMString-typeArg-boolean-bubblesArg-boolean-cancelableArg-AbstractView-viewArg-long-detailArg-EventTarget-relatedTargetArg"],
	["widl-WheelEvent-initWheelEvent", "-void-DOMString-typeArg-boolean-bubblesArg-boolean-cancelableArg-AbstractView-viewArg-long-detailArg-long-screenXArg-long-screenYArg-long-clientXArg-long-clientYArg-unsigned-short-buttonArg-EventTarget-relatedTargetArg-DOMString-modifiersListArg-double-deltaXArg-double-deltaYArg-double-deltaZArg-unsigned-long-deltaMode"],
	["widl-KeyboardEvent-initKeyboardEvent", "-void-DOMString-typeArg-boolean-bubblesArg-boolean-cancelableArg-AbstractView-viewArg-long-detailArg-DOMString-keyArg-unsigned-long-locationArg-DOMString-modifiersListArg-boolean-repeat"],
	["widl-CompositionEvent-initCompositionEvent", "-void-DOMString-typeArg-boolean-bubblesArg-boolean-cancelableArg-AbstractView-viewArg-DOMString-dataArg"],
];
 
function fixup_ids() {
	// Wait until ReSpec is done.
	var check = bad_ids[0][0] + bad_ids[0][1];
	if (!document.getElementById(check)) {
		setTimeout(fixup_ids, 100);
		return;
	}
	for (var i = 0; i < bad_ids.length; i++) {
		fixup(bad_ids[i][0], bad_ids[i][1]);
	}
	console.log("Finished fixing up bad ids");
}

function fixup(name, signature) {
	var el = document.getElementById(name + signature);
	if (el) {
		el.id = name;
	} else {
		console.log('ERROR - unable to fixup: ' + name + signature);
	}
}

if (window.addEventListener) {
	window.addEventListener('load', fixup_ids, false);
}
