/**
 * @license
 * Copyright Bayper org. All Rights Reserved.
 *
 * Definitions by: Bayper/frontend (https://github.com/orgs/Bayper/teams/frontend)
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import * as jsBeautify from 'js-beautify';

import { BeautifyOption } from '../typings';

const internalOption: BeautifyOption = {
  indent_size: 2,
  indent_char: '  ',
  indent_inner_html: true
};

/**
 * @param code The character of string gona to be beautified
 * @param option The option of library of  js-beautify for beautifying html
 * @return { string }
 */
export function beautify(code: string, option?: BeautifyOption) {
  return jsBeautify.html(code, {
    ...internalOption,
    ...option
  });
}

export default beautify;
