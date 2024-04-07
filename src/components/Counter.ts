import { addEventListener, createState } from "../core";
import { EventType } from "../core/renderer/engine";

// Initialize State
const { get, set } = createState(0);

// Add Event Listerns
addEventListener(EventType.onClick, 'inc', () =>  set(get() + 1));
addEventListener(EventType.onClick, 'dec', () =>  set(get() - 1));

// Counter render function
export default function Counter() {
    return `
        <button id='dec'>-</button>
        <strong id='count'>${get()}</strong>
        <button id='inc'>+</button>
    `;
}