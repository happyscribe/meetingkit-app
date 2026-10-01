# Development and agent access

## Repository

Use a branch and pull request for changes. Run `npm run check` before merging, and inspect the Vercel preview. Add behavior tests as application features are introduced.

Contributions run in ordinary pull-request workflows with read-only repository permissions. Keep deployment credentials in Vercel; CI checks do not need service credentials.

## Vercel

Connect the GitHub repository to the dedicated Vercel project. Use `main` for production and branch deployments for previews. Set the project Node.js version to 22.x and the function region to Dublin.

For CLI access:

```sh
npx vercel login
npx vercel link
npx vercel
```

The final command creates a preview. `npx vercel --prod` deploys to production. Prefer Git integration for normal releases so a deployment points to a reviewed commit.

Use the [official Vercel MCP](https://vercel.com/docs/agent-resources/vercel-mcp) for documentation, project details and deployment diagnostics. Authenticate through the provider's browser flow. Keep local agent credentials and machine-specific configuration out of Git.

Vercel's [agent resources](https://vercel.com/docs/agent-resources) cover CLI workflows and official skills. Before configuring access, inspect the effective team and project permissions of the authenticated identity.

## Supabase and MeetingKit

Create separate development and production Supabase projects when authentication is implemented. Use the [Supabase CLI](https://supabase.com/docs/guides/local-development) for local development and versioned database migrations.

Connect the [Supabase MCP](https://supabase.com/docs/guides/ai-tools/mcp) to the development project using `project_ref`. Grant development tools the access needed to build and validate migrations. Production deployments use their own configuration and credentials.

Keep MeetingKit API credentials server-side. Never expose them through `NEXT_PUBLIC_` variables. Test tenant access and webhook handling before connecting real meeting data.

## Arm

The optional `arm.toml` describes the dev server and validation command for agents using Arm. Start the app with `arm build dev`; use `arm build test` for the checks. Arm's service environment must have Node.js and npm on its `PATH`. If Node.js is only available in your interactive shell, use `npm run dev` there. Plain npm commands work without Arm.
