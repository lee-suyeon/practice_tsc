export function addEvent(target: HTMLElement, type: string, callback: ({ target }) => void, capture? : boolean) {
	target.addEventListener(type, callback, !!capture);
}