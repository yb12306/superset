(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;};




























import {
DEFAULT_LEGEND_FORM_DATA,


DEFAULT_TITLE_FORM_DATA } from
'../types';
import {
DEFAULT_FORM_DATA as TIMESERIES_DEFAULTS } from


'../Timeseries/types';


















































// @ts-ignore
export const DEFAULT_FORM_DATA = {
  ...DEFAULT_LEGEND_FORM_DATA,
  annotationLayers: [],
  minorSplitLine: TIMESERIES_DEFAULTS.minorSplitLine,
  truncateYAxis: TIMESERIES_DEFAULTS.truncateYAxis,
  truncateYAxisSecondary: TIMESERIES_DEFAULTS.truncateYAxis,
  logAxis: TIMESERIES_DEFAULTS.logAxis,
  logAxisSecondary: TIMESERIES_DEFAULTS.logAxis,
  yAxisBounds: TIMESERIES_DEFAULTS.yAxisBounds,
  yAxisBoundsSecondary: TIMESERIES_DEFAULTS.yAxisBounds,
  yAxisFormat: TIMESERIES_DEFAULTS.yAxisFormat,
  yAxisFormatSecondary: TIMESERIES_DEFAULTS.yAxisFormat,
  yAxisTitleSecondary: DEFAULT_TITLE_FORM_DATA.yAxisTitle,
  tooltipTimeFormat: TIMESERIES_DEFAULTS.tooltipTimeFormat,
  xAxisTimeFormat: TIMESERIES_DEFAULTS.xAxisTimeFormat,
  area: TIMESERIES_DEFAULTS.area,
  areaB: TIMESERIES_DEFAULTS.area,
  markerEnabled: TIMESERIES_DEFAULTS.markerEnabled,
  markerEnabledB: TIMESERIES_DEFAULTS.markerEnabled,
  markerSize: TIMESERIES_DEFAULTS.markerSize,
  markerSizeB: TIMESERIES_DEFAULTS.markerSize,
  opacity: TIMESERIES_DEFAULTS.opacity,
  opacityB: TIMESERIES_DEFAULTS.opacity,
  orderDesc: TIMESERIES_DEFAULTS.orderDesc,
  orderDescB: TIMESERIES_DEFAULTS.orderDesc,
  rowLimit: TIMESERIES_DEFAULTS.rowLimit,
  rowLimitB: TIMESERIES_DEFAULTS.rowLimit,
  seriesType: TIMESERIES_DEFAULTS.seriesType,
  seriesTypeB: TIMESERIES_DEFAULTS.seriesType,
  showValue: TIMESERIES_DEFAULTS.showValue,
  showValueB: TIMESERIES_DEFAULTS.showValue,
  stack: TIMESERIES_DEFAULTS.stack,
  stackB: TIMESERIES_DEFAULTS.stack,
  yAxisIndex: 0,
  yAxisIndexB: 0,
  groupby: [],
  groupbyB: [],
  zoomable: TIMESERIES_DEFAULTS.zoomable,
  richTooltip: TIMESERIES_DEFAULTS.richTooltip,
  xAxisLabelRotation: TIMESERIES_DEFAULTS.xAxisLabelRotation,
  ...DEFAULT_TITLE_FORM_DATA };;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(DEFAULT_FORM_DATA, "DEFAULT_FORM_DATA", "/Users/evan/GitHub/superset/superset-frontend/plugins/plugin-chart-echarts/src/MixedTimeseries/types.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();