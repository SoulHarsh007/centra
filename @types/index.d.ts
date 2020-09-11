/// <reference types='node'>
import {RequestOptions, IncomingMessage} from 'http';
import {URL} from 'url';
declare namespace Centra {
  interface Response {
    coreRes: IncomingMessage;
    headers: IncomingMessage['headers'];
    statusCode: IncomingMessage['statusCode'];
    body: Buffer;
    json(): Promise<any>;
    text(): Promise<string>;
  }
  interface Request {
    url: URL;
    httpMethod: string;
    data: string | Buffer | null;
    sendDataAs: 'form' | 'json' | 'buffer' | null;
    reqHeaders: {[k: string]: string};
    streamEnabled: boolean;
    compressionEnabled: boolean;
    coreOptions: RequestOptions;
    query(key: string, value: any): this;
    query(params: {[k: string]: any}): this;
    path(relativePath: string): this;
    body(data: any, sendAs?: 'json' | 'buffer' | 'form'): this;
    header(key: string, value: string): this;
    header(headers: {[k: string]: string}): this;
    method(method: string): this;
    timeout(timeMs: number): this;
    send(): Promise<Response>;
    json(): Promise<Response['json']>;
    raw(): Promise<Response['body']>;
    text(): Promise<Response['text']>;
  }
}

export function centra(url: URL | string, method?: string): Centra.Request;
