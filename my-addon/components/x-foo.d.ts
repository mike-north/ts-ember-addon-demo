import Component from '@ember/component';
declare const XFoo_base: Readonly<typeof Component> & (new (properties?: object | undefined) => Component) & (new (...args: any[]) => Component);
export default class XFoo extends XFoo_base {
    layout: any;
}
export {};
