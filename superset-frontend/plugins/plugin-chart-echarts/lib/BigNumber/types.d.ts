/**
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
import { ChartDataResponseResult, ChartProps, QueryFormData, QueryFormMetric } from '@superset-ui/core';
export interface BigNumberDatum {
    [key: string]: number | null;
}
export declare type BigNumberTotalFormData = QueryFormData & {
    metric?: QueryFormMetric;
    yAxisFormat?: string;
    forceTimestampFormatting?: boolean;
};
export declare type BigNumberWithTrendlineFormData = BigNumberTotalFormData & {
    colorPicker: {
        r: number;
        g: number;
        b: number;
    };
    compareLag?: string | number;
};
export declare type BigNumberTotalChartProps = ChartProps & {
    formData: BigNumberTotalFormData;
    queriesData: (ChartDataResponseResult & {
        data?: BigNumberDatum[];
    })[];
};
export declare type BigNumberWithTrendlineChartProps = BigNumberTotalChartProps & {
    formData: BigNumberWithTrendlineFormData;
};
export declare type TimeSeriesDatum = [number, number | null];
//# sourceMappingURL=types.d.ts.map