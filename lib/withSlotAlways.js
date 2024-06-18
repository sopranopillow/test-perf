import { jsx as _jsx } from "@fluentui/react-jsx-runtime/jsx-runtime";
/** @jsxRuntime automatic */
/** @jsxImportSource @fluentui/react-jsx-runtime */
import { Persona, slot, mergeClasses, assertSlots, Avatar } from '@fluentui/react-components';
import { forwardRef } from 'react';
const dummyClassName = 'fui-DummyClassName';
// eslint-disable-next-line react-refresh/only-export-components
const CustomPersona = forwardRef((props, ref) => {
    // state hook
    const state = {
        components: {
            root: 'div',
            persona: Persona,
        },
        root: slot.always(props.root, { elementType: 'div' }),
        persona: slot.always(props.persona, { defaultProps: { ref }, elementType: Persona }),
    };
    const avatar = slot.optional(state.persona.avatar, { elementType: Avatar });
    if (avatar) {
        avatar.className = mergeClasses(avatar.className, dummyClassName);
    }
    state.persona.avatar = avatar;
    const primaryText = slot.optional(state.persona.primaryText, { elementType: 'span' });
    if (primaryText) {
        primaryText.className = mergeClasses(primaryText.className, dummyClassName);
    }
    state.persona.primaryText = primaryText;
    // render hook
    assertSlots(state);
    return (_jsx(state.root, { children: _jsx(state.persona, {}) }));
});
const itemRenderer = () => {
    return _jsx(CustomPersona, {});
};
export default itemRenderer;
export { tests } from "@tensile-perf/react";
