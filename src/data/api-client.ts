/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** @format int32 */
export enum HealthStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

/** @format int32 */
export enum AttractionType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
}

export interface AddAttractionRequest {
  /** @minLength 1 */
  description: string;
  attractionType?: AttractionType;
  /** @format uuid */
  attractionId: string;
  /** @format int32 */
  externalId: number;
}

export interface AddAttractionResponse {
  /** @format uuid */
  id: string;
}

export interface AddOperatorRequest {
  /** @minLength 1 */
  name: string;
}

export interface AddOperatorResponse {
  /** @format uuid */
  id: string;
}

export interface AddThemeParkRequest {
  /** @minLength 1 */
  description: string;
  /**
   * @format double
   * @min -90
   * @max 90
   */
  latitude?: number;
  /**
   * @format double
   * @min -180
   * @max 180
   */
  longitude?: number;
}

export interface AddThemeParkResponse {
  /** @format uuid */
  id: string;
}

export interface GetAllOperatorsResponse {
  entities: OperatorResponse[];
}

export interface HealthCheckResponse {
  entries: Record<string, HealthReportEntryResponse>;
  /** @format date-span */
  totalDuration: string;
  status: HealthStatus;
}

export interface HealthReportEntryResponse {
  data: Record<string, any>;
  /** @minLength 1 */
  description: string;
  /** @format date-span */
  duration: string;
  status: HealthStatus;
  tags: string[];
}

export interface ImportAttractionsResponse {
  /** @format uuid */
  id: string;
}

export interface OperatorResponse {
  /** @format uuid */
  id: string;
  /** @minLength 1 */
  name: string;
  /** @format int32 */
  resortCount: number;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<
  AxiosRequestConfig,
  "data" | "params" | "url" | "responseType"
> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<
  AxiosRequestConfig,
  "data" | "cancelToken"
> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Owens.API
 * @version 1.0
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  attraction = {
    /**
     * No description
     *
     * @tags Attraction
     * @name AddAttraction
     * @summary Adds an attraction.
     * @request POST:/attraction
     */
    addAttraction: (data: AddAttractionRequest, params: RequestParams = {}) =>
      this.request<AddAttractionResponse, any>({
        path: `/attraction`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attraction
     * @name ImportAttractions
     * @summary Imports all attractions for a theme park.
     * @request POST:/attraction/{id}
     */
    importAttractions: (id: string, params: RequestParams = {}) =>
      this.request<ImportAttractionsResponse, any>({
        path: `/attraction/${id}`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  operator = {
    /**
     * No description
     *
     * @tags Operator
     * @name AddResortOperator
     * @summary Adds a resort and parks operator.
     * @request POST:/operator
     */
    addResortOperator: (data: AddOperatorRequest, params: RequestParams = {}) =>
      this.request<AddOperatorResponse, any>({
        path: `/operator`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Operator
     * @name GetAllOperators
     * @summary Returns all available theme park operators.
     * @request GET:/operator
     */
    getAllOperators: (params: RequestParams = {}) =>
      this.request<GetAllOperatorsResponse, any>({
        path: `/operator`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  status = {
    /**
     * No description
     *
     * @tags Status
     * @name GetHealthChecks
     * @summary Gets the current status of the application.
     * @request GET:/status/health
     */
    getHealthChecks: (params: RequestParams = {}) =>
      this.request<HealthCheckResponse, any>({
        path: `/status/health`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  themePark = {
    /**
     * No description
     *
     * @tags ThemePark
     * @name AddThemePark
     * @summary Adds a theme park.
     * @request POST:/theme-park
     */
    addThemePark: (data: AddThemeParkRequest, params: RequestParams = {}) =>
      this.request<AddThemeParkResponse, any>({
        path: `/theme-park`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
