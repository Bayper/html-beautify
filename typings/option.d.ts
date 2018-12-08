/**
 * @license
 * Copyright Bayper org. All Rights Reserved.
 *
 * Definitions by: Bayper/frontend (https://github.com/orgs/Bayper/teams/frontend)
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

/**
 * @module
 * @description
 * The configuration options of html based on js-beautify
 *
 * Reference https://github.com/beautify-web/js-beautify#css--html
 */
export interface BeautifyOption {
  // Indentation size
  indent_size?: number;


  // Indentation character
  indent_char?: string;


  // Indent with tabs, overrides indent_size and indent_char
  indent_with_tabs?: boolean;


  // Character(s) to use as line terminators
  eol?: string;


  // End output with newline
  end_with_newline?: boolean;


  // Preserve existing line-breaks
  preserve_newline?: boolean;


  // Maximum number of line-breaks to be preserved in one chunk
  max_preserve_newlines?: number;


  // Indent <head> and <body> sections
  indent_inner_html?: boolean;


  brace_style?: BraceStyleType;


  // Sets indent level inside script tags
  indent_scripts?: IndentScriptsType;


  // Maximum characters per line (0 disables)
  wrap_line_length?: number;


  // Wrap attributes to new lines
  wrap_attributes?: WrapAttributesType;


  // Indent wrapped attributes to after N characters [indent_size](ignored if wrap_attributes is "aligned")
  wrap_attributes_indent_size?: number;


  // List of tags to be considered inline tags
  inline?: string;


  // List of tags that sholud not be reformatted
  unformatted?: string;


  // List of tags whose content should not be reformatted
  content_unformatted?: string;


  // List of tags that should have an extra newline before them
  extra_liners?: string;


  // Use EditorConfig to set up the options
  editorconfig?: boolean;
}


export type WrapAttributesType =
  | 'auto'
  | 'force'
  | 'force-aligned'
  | 'force-expand-multiline'
  | 'aligned-multiple'
  | 'preserve'
  | 'preserve-aligned';


export type IndentScriptsType =
  | 'keep'
  | 'separate'
  | 'normal';



export type BraceStyleType =
  | 'collapse-preserve-inline'
  | 'collapse'
  | 'expand'
  | 'end-expand'
  | 'none';
