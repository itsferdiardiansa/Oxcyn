/**
 * `@oxcyn/response` module is used for representing the response type from Firestore
 *
 * ```js
 * import { ...types } from "@oxcyn/response"
 *
 * ```
 * @see [source](https://github.com/itsferdiardiansa/Oxcyn/blob/main/packages/%40types/oxcyn/response.d.ts)
 *
 */
declare module '@oxcyn/response' {
  export enum ErrorCode {
    // 40x
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 402,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,

    // 50x
    SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    GATEWAY_TIMEOUT = 503,
  }

  export enum SuccessCode {
    // 20x
    SUCCESS = 200,
    CREATED = 201,
    NO_CONTENT = 204,
  }

  export type ResponseActionKind = `oxcyn#${string}`

  export type SuccessResponseData<D, S> = {
    kind: ResponseActionKind
    code: SuccessCode
    data: D
    metadata: S
  }

  export type ErrorResponseData = {
    code: ErrorCode
    message: string | undefined
    errors: string[]
  }
}
