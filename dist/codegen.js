"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    overwrite: true,
    errorsOnly: false,
    schema: `http://localhost:4000/graphql`,
    generates: {
        "src/schema.ts": {
            documents: "src/queries.ts",
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-graphql-request"
            ],
        },
    },
};
exports.default = config;
