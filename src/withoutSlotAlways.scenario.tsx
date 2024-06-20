/** @jsxRuntime automatic */
/** @jsxImportSource @fluentui/react-jsx-runtime */
import { Slot, Persona, ForwardRefComponent, slot, PersonaState, mergeClasses, assertSlots } from '@fluentui/react-components';
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

/**
 * Asserts that the already resolved slot has a className and is defined. This is useful for adding a custom className
 * to an inner slot of a slot since our types do not resolved to the correct state.
 *
 * @example
 * Take the following setup as example:
 *
 * ```ts
 * const state: CustomPersonaState = {
 *  components: {
 *    root: 'div',
 *    persona: Persona,
 *  },
 *  root: slot.always(props.root, { elementType: 'div' }),
 *  persona: slot.always(props.persona, { elementType: Persona }),
 * };
 * ```
 * Persona has an inner slot avatar, but it uses the wrong border-readius size. To modify this we would
 * do the following:
 *
 * ```ts
 * if (hasClassName<PersonaState['avatar']>(state.persona.avatar)) {
 *   state.persona.avatar.classname = mergeClasses('your-className', state.persona.avatar.className);
 * }
 * ```
 *
 * Notice we need to assert state.persona.avatar, otherwise it will resolve to the wrong type and error out while
 * type checking.
 *
 * @param slot - inner slot that we want to assert
 * @returns - whether the resolved slot is defined and has a className field or not
 */
function hasClassName<TSlotProps extends { className?: string } | undefined>(
  slot: unknown,
): slot is NonNullable<TSlotProps> {
  return ((slot as TSlotProps) ?? {}).className !== undefined;
}

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
  

  // styles hook

  if (hasClassName<PersonaState['avatar']>(state.persona.avatar)) {
    state.persona.avatar.className = mergeClasses(state.persona.avatar.className, dummyClassName);
  }

  if (hasClassName<NonNullable<PersonaState['primaryText']>>(state.persona.primaryText)) {
    state.persona.primaryText.className = mergeClasses(state.persona.primaryText.className, dummyClassName);
  }

  // render hook
  assertSlots<CustomPersonaSlots>(state);

  return (
    <state.root>
      <state.persona />
    </state.root>
  );
});

const itemRenderer: React.FC = () => {
  return <CustomPersona name='Kevin Sturgis' />;
};

export default itemRenderer;

export { tests } from "@tensile-perf/react";