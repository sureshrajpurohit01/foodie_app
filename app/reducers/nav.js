import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigatorconfig/navigators';

export default function nav(state,action) {
  let nextState;
  switch (action.type) {
    case 'Sample':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Sample' }),
        state
      );
    break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
    break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
