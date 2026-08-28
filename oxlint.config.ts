import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript", "nextjs", "unicorn", "import", "react", "react-perf"],
  categories: {
    suspicious: "warn",
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    eqeqeq: "warn",
    "no-throw-literal": "warn",
    "import/no-unassigned-import": ["warn", { allow: ["**/globals.css"] }],
    "unicorn/prefer-node-protocol": "warn",
    "react/react-in-jsx-scope": "off",
    "typescript/consistent-type-imports": "warn",
  },
});
