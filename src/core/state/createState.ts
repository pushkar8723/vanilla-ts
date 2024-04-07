import { render } from "../renderer/engine";

/**
 * Takes initial state as argument and returns and object with
 * get and set functions to get the current state and update the
 * state with the given value.
 */
export default function createState<T>(intialState: T) {
    let state = intialState;

    /** Returns current state */
    const get = () => state;

    /** Updates the state with the given value */
    const set = (data: T) => {
        state = data;
        render();
    }

    // Return get and set methods
    return { get, set };
}