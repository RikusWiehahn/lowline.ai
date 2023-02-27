import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
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

export default config;
