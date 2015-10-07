/**
 * Type Definition File for FuseJS
 * from vscode-fuse (https://github.com/realignist/vscode-fuse)
 */

/* -----------------------------------
 * Define Observable
 * require('FuseJS/Observable');
 * ---------------------------------- */

declare class Observable {
	constructor(object?: any);
	value: any;
	length: number;
	getAt(index: number): any;
	add(value: any);
	remove(value: any);
	tryRemove(value: any);
	removeWhere(func: (any) => any);
	forEach(func: (any) => any);
	replaceAt(index: number, value: any);
	replaaceAll(array: Array<any>);
	clear();
	indexOf(value: any): number;
	contains(value: any): boolean;
	refreshAll(newValues: any, compareFunc: (oldItem: any, newItem: any) => boolean, 
		updateFunc: (oldItem: any, newItem: any) => void, mapFunc: (newItem) => any);
	where(condition: (object: any) => boolean): Observable;
	map(func: (object: any) => any): Observable;
	count(): number;
	count(condition: (object: any) => boolean): Observable;
	not(): boolean;
	filter(condition: (object: any) => boolean): Observable;
	expand(): Observable; 
}

/* -----------------------------------
 * Define Promise
 * ---------------------------------- */
interface Thenable<R> {
    then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
    then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
}

declare class Promise<R> implements Thenable<R> {
	constructor(callback: (resolve : (value?: R | Thenable<R>) => void, reject: (error?: any) => void) => void);
    then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
    then<U>(onFulfilled?: (value: R) => U | Thenable<U>, onRejected?: (error: any) => void): Promise<U>;
	catch<U>(onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
}

declare module Promise {
	function resolve<R>(value?: R | Thenable<R>): Promise<R>;
	function reject(error: any): Promise<any>;
	function all<R>(promises: (R | Thenable<R>)[]): Promise<R[]>;
	function race<R>(promises: (R | Thenable<R>)[]): Promise<R>;
}

/* -----------------------------------
 * Define Fetch API
 * ---------------------------------- */
declare class Request extends Body {
	constructor(input: string|Request, init?:RequestInit);
	method: string;
	url: string;
	headers: Headers;
	context: string|RequestContext;
	referrer: string;
	mode: string|RequestMode;
	credentials: string|RequestCredentials;
	cache: string|RequestCache;
}

interface RequestInit {
	method?: string;
	headers?: HeaderInit|{ [index: string]: string };
	body?: BodyInit;
	mode?: string|RequestMode;
	credentials?: string|RequestCredentials;
	cache?: string|RequestCache;
}

declare enum RequestContext {
	"audio", "beacon", "cspreport", "download", "embed", "eventsource", "favicon", "fetch",
	"font", "form", "frame", "hyperlink", "iframe", "image", "imageset", "import",
	"internal", "location", "manifest", "object", "ping", "plugin", "prefetch", "script",
	"serviceworker", "sharedworker", "subresource", "style", "track", "video", "worker",
	"xmlhttprequest", "xslt"
}
declare enum RequestMode { "same-origin", "no-cors", "cors" }
declare enum RequestCredentials { "omit", "same-origin", "include" }
declare enum RequestCache { "default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached" }

declare class Headers {
	append(name: string, value: string): void;
	delete(name: string):void;
	get(name: string): string;
	getAll(name: string): Array<string>;
	has(name: string): boolean;
	set(name: string, value: string): void;
}

declare class Body {
	bodyUsed: boolean;
	arrayBuffer(): Promise<ArrayBuffer>;
	blob(): Promise<Blob>;
	formData(): Promise<FormData>;
	json(): Promise<any>;
	json<T>(): Promise<T>;
	text(): Promise<string>;
}

declare class Response extends Body {
	constructor(body?: BodyInit, init?: ResponseInit);
	error(): Response;
	redirect(url: string, status: number): Response;
	type: string|ResponseType;
	url: string;
	status: number;
	ok: boolean;
	statusText: string;
	headers: Headers;
	clone(): Response;
}

declare enum ResponseType { "basic", "cors", "default", "error", "opaque" }

interface ResponseInit {
	status: number;
	statusText?: string;
	headers?: HeaderInit;
}

declare type HeaderInit = Headers|Array<string>;
declare type BodyInit = Blob|FormData|string;
declare type RequestInfo = Request|string;

interface Window {
	fetch(url: string|Request, init?: RequestInit): Promise<Response>;
}

/* -----------------------------------
 * Define Storage API
 * require('FuseJS/Storage');
 * ---------------------------------- */

// TODO : Work in progress...


/* -----------------------------------
 * Define Lifecycle API
 * require('FuseJS/Lifecycle');
 * ---------------------------------- */

// TODO : Work in progress...

/* -----------------------------------
 * Define Phone API
 * require('FuseJS/Phone');
 * ---------------------------------- */

// TODO : Work in progress...

/* -----------------------------------
 * Define Camera API
 * require('FuseJS/Camera');
 * ---------------------------------- */

// TODO : Work in progress...

/* -----------------------------------
 * Define Vibration API
 * require('FuseJS/Vibration');
 * ---------------------------------- */

// TODO : Work in progress...

/* -----------------------------------
 * Define InterApp API
 * require('FuseJS/InterApp');
 * ---------------------------------- */

// TODO : Work in progress...
