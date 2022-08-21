import {Config, createGenerator}  from "ts-json-schema-generator";
import {writeFileSync} from "fs";

const config: Config = {
    path: "src/user-schemas.ts",
    tsconfig: "tsconfig.json",
    type: "*", // Or <type-name> if you want to generate schema for that one type only
    additionalProperties: true
};

const output_path = "generated/schema.json";

const schema = createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);
writeFileSync(output_path, schemaString);