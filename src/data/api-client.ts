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

export interface ErrorResponse {
  /** @format uri */
  type: string;
  title: string;
  /** @format int32 */
  status: number;
  detail: string;
  /** @format uri */
  instance: string;
}

export type Exception = {
  targetSite?: MethodBase;
  message?: string | null;
  data?: object | null;
  innerException?: Exception;
  helpLink?: string | null;
  source?: string | null;
  /** @format int32 */
  hResult?: number;
  stackTrace?: string | null;
};

export interface GetLogsResponse {
  entities: LogResponse[];
  /** @format int32 */
  totalCount: number;
}

export interface HealthCheckResponse {
  entries: Record<string, HealthReportEntryResponse>;
  /** @pattern ^-?(\d+\.)?\d{2}:\d{2}:\d{2}(\.\d{1,7})?$ */
  totalDuration: string;
  status: HealthStatus;
}

export interface HealthReportEntryResponse {
  data: object;
  description: string;
  /** @pattern ^-?(\d+\.)?\d{2}:\d{2}:\d{2}(\.\d{1,7})?$ */
  duration: string;
  exception?: Exception;
  status: HealthStatus;
  tags: string[];
}

export type HealthStatus = number;

export interface LogResponse {
  /** @format date-time */
  timeStamp: string;
  /** @format uuid */
  id: string;
}

export type MethodBase = any;

export interface RegisterMemberRequest {
  username: string;
  email: string;
  password: string;
}

export interface RegisterMemberResponse {
  /** @format uuid */
  id: string;
}
