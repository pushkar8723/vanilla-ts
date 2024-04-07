// HTML element where the app has to be rendered.
let rootElement: HTMLElement | null;

// Component to be rendered in the the root element
let rootComponent: () => string;

// Supported events type
export enum EventType {
    onClick = 'click',
}

// Event listner map
let eventListners: { [k: string]: Record<string, (event?: Event) => void> } = {
    [EventType.onClick]: {},
}

/**
 * Click event handler.
 */
document.addEventListener('click', (event) => {
    // Get the id of the clicked element
    const { id } = event.target as HTMLElement;
    
    // If and event listener is present in the map
    // for the given id then call it.
    if (id && eventListners.click[id]) {
        eventListners.click[id](event);
    }
}, true); // Run during capture phase

/**
 * Adds event listener in the event lister map
 */
export const addEventListener = (event: EventType, id: string, callback: (event?: Event) => void) => {
    eventListners[event][id] = callback;
}

/**
 * Internal function
 * It renders the app.
 */
export const render = () => {
    if (rootElement) {
        rootElement.innerHTML = rootComponent();
    } else {
        throw new Error('Root element is null');
    }
}

/**
 * Initializes and renders the app in the given element.
 * Limitation: Currently on one app can be initialized at a time.
 */
export const initialize = (component: () => string, element: HTMLElement | null) => {
    rootComponent = component;
    rootElement = element;
    render();
}

