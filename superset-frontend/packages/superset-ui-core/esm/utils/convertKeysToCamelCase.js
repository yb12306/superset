(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import camelCase from 'lodash/camelCase';
import isPlainObject from 'lodash/isPlainObject';
import mapKeys from 'lodash/mapKeys';

export default function convertKeysToCamelCase(object) {
  if (object === null || object === undefined) {
    return object;
  }
  if (isPlainObject(object)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return mapKeys(object, (_, k) =>
    camelCase(k));

  }
  throw new Error(`Cannot convert input that is not a plain object: ${object}`);
};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(convertKeysToCamelCase, "convertKeysToCamelCase", "/Users/evan/GitHub/superset/superset-frontend/packages/superset-ui-core/src/utils/convertKeysToCamelCase.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();