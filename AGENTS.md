# MeetingKit App

- Build this repository as a public, reusable example of the MeetingKit API.
- Use Next.js App Router, React and TypeScript. Use npm and commit `package-lock.json`.
- Run `npm run check` before submitting changes. Verify changed user flows in a browser.
- Keep MeetingKit API keys and webhook secrets server-side. Never commit credentials or meeting data.
- Use separate development and production service configuration.
- Check the current user's workspace access for every request involving private data.
- Add behavior tests for authentication, authorization, webhook signatures and retries when implementing those features.
- Open pull requests ready for review, never as drafts.
- Include an AI co-authorship trailer in agent-authored commits.
- Use the public MeetingKit API and documented webhooks for integration.
- Read `docs/development.md` for deployment and agent tooling.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
