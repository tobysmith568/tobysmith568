import recommended from "@tobysmith568/eslint-config";
import node from "@tobysmith568/eslint-config/node";
import prettier from "@tobysmith568/eslint-config/prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([recommended, node, prettier]);
