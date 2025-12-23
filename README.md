# Sanity Studio CMS for drewaiello.com

This project bootstraps the single-page React application that runs the [Sanity Studio](https://www.sanity.io/studio) content management interface for updating drewaiello.com.

To update all packages, run `npx npm-check-updates -u`, and then `npm i`.

## Dependency Configuration

### Security Overrides

The `package.json` includes an `overrides` field to force secure versions of transitive dependencies:

- **`prismjs@^1.30.0`**: Fixes CVE-2024-53382 (DOM Clobbering vulnerability). Required by `@sanity/orderable-document-list` → `@sanity/ui` → `react-refractor` → `refractor` → `prismjs`.
- **`glob@^10.5.0`**: Fixes CVE-2025-64756 (command injection vulnerability). Required by `sanity` → `archiver`/`rimraf` → `glob`.

These overrides ensure that even if parent packages haven't updated their dependencies, we're using secure versions throughout the dependency tree.

### Legacy Peer Dependencies

The `.npmrc` file contains `legacy-peer-deps=true` to allow installation with Sanity v5.1.0. Some Sanity plugins (notably `@sanity/orderable-document-list@1.4.1`) haven't updated their peer dependency declarations to include Sanity v5, even though they work correctly with it. This setting tells npm to use the legacy (pre-v7) peer dependency resolution, which is more permissive.

**Note**: Once these plugins officially support Sanity v5 in their peer dependencies, this setting can be removed.
