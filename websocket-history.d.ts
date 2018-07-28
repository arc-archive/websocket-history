/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   websocket-history.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../paper-item/paper-item.d.ts" />
/// <reference path="../paper-item/paper-item-body.d.ts" />
/// <reference path="../paper-button/paper-button.d.ts" />
/// <reference path="../date-time/date-time.d.ts" />

declare namespace UiElements {

  /**
   * A web socket connections history view for ARC
   *
   * ### Example
   *
   * ```html
   * <websocket-history items="[...]"></websocket-history>
   * ```
   *
   * ### Styling
   *
   * `<websocket-history>` provides the following custom properties and mixins
   * for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--websocket-history` | Mixin applied to the element | `{}`
   * `--arc-font-subhead` | Mixin applied to the element's title | `{}`
   * `--websocket-history-date-time` | Mixin applied to the `date-time` element | `{}`
   */
  class WebsocketHistory extends Polymer.Element {

    /**
     * List of history items to render
     */
    items: any[]|null|undefined;

    /**
     * Called when the user click on the `connect` button
     */
    _openUrl(e: any): void;
  }
}

interface HTMLElementTagNameMap {
  "websocket-history": UiElements.WebsocketHistory;
}
