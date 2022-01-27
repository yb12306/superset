(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
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
export default function transformProps(chartProps) {
  const { width, height, formData, queriesData, datasource } = chartProps;
  const { colorScheme, linearColorScheme, metric, secondaryMetric } = formData;

  const returnProps = {
    width,
    height,
    data: queriesData[0].data,
    colorScheme,
    linearColorScheme,
    metrics: [metric, secondaryMetric] };


  if (datasource && datasource.metrics) {
    const metricWithFormat = datasource.metrics.find(
    ({ metric_name: metricName, d3format }) =>
    metricName === formData.metric && d3format);

    if (metricWithFormat) {
      Object.assign(returnProps, { numberFormat: metricWithFormat.d3format });
    }
  }

  return returnProps;
};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(transformProps, "transformProps", "/Users/evan/GitHub/superset/superset-frontend/plugins/legacy-plugin-chart-sunburst/src/transformProps.js");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();