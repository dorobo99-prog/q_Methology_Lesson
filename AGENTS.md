<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## MCP Tooling Rule (jcodemunch)

For codebase navigation and retrieval in indexed repositories, prefer `jcodemunch-mcp` tools over raw file grep/read patterns.

- Start with `list_repos` to confirm index availability.
- If not indexed, use `index_folder` (local) or `index_repo` (GitHub).
- Use `search_symbols` for symbol discovery.
- Use `get_context_bundle` for symbol source + imports.
- Use `search_text` for literals/comments/regex text lookup.

Avoid falling back to Grep/Read/Glob for indexed repositories unless strictly necessary.
