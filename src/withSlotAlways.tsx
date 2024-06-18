/** @jsxRuntime automatic */
/** @jsxImportSource @fluentui/react-jsx-runtime */
import { Slot, Persona, ForwardRefComponent, slot, mergeClasses, assertSlots, Avatar } from '@fluentui/react-components';
import type {
    ComponentProps,
    ComponentState
} from '@fluentui/react-components'
import {forwardRef} from 'react';

const dummyClassName = 'fui-DummyClassName';

type CustomPersonaSlots = {
  root: NonNullable<Slot<'div'>>;
  persona: NonNullable<Slot<typeof Persona>>;
};
type CustomPersonaProps = ComponentProps<Partial<CustomPersonaSlots>, 'persona'>;
type CustomPersonaState = ComponentState<CustomPersonaSlots>;


// eslint-disable-next-line react-refresh/only-export-components
const CustomPersona: ForwardRefComponent<CustomPersonaProps | undefined> = forwardRef((props, ref) => {
  // state hook
  const state: CustomPersonaState = {
    components: {
      root: 'div',
      persona: Persona,
    },
    root: slot.always(props.root, { elementType: 'div' }),
    persona: slot.always(props.persona, { defaultProps:{ref},elementType: Persona }),
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
  assertSlots<CustomPersonaSlots>(state);

  return (
    <state.root>
      <state.persona />
    </state.root>
  );
});

const itemRenderer: React.FC = () => {
    return <CustomPersona />;
  };

export default itemRenderer;

export { tests } from "@tensile-perf/react";