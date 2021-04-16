
export function getByAttribute(component, attr) {
    return component.find(`[data-test='${attr}']`);
}