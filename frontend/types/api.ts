/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Health check endpoint
         * @description Returns the health status of the application
         */
        get: operations["getHealth"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** @description Health check response containing application status information */
        health: {
            /**
             * @description Current health status of the application
             * @example healthy
             * @enum {string}
             */
            status: "healthy" | "degraded" | "unhealthy";
            /**
             * Format: date-time
             * @description Current server time in ISO 8601 format
             * @example 2024-04-13T02:30:00.000Z
             */
            timestamp: string;
            /**
             * @description Application uptime in seconds
             * @example 123.45
             */
            uptime: number;
        };
        /** @description Standard error response */
        error: {
            error: {
                /**
                 * @description Error code
                 * @example UNAUTHORIZED
                 */
                code: string;
                /**
                 * @description Human-readable error message
                 * @example Invalid or missing API key
                 */
                message: string;
            };
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getHealth: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["health"];
                };
            };
            /** @description Unauthorized - Invalid or missing API key */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error"];
                };
            };
            /** @description Too Many Requests - Rate limit exceeded */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["error"];
                };
            };
        };
    };
}
