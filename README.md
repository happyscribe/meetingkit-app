# MeetingKit App

An open-source meetings app built with the MeetingKit API. Use it as a starting point for your own application.

**Status:** initial project setup. The repository currently contains a deployable Next.js starter. Authentication, calendar connections, meeting lists and results are planned and are not implemented yet.

## Run locally

Use Node.js 22 and npm. No service credentials are required to run the starter.

```sh
npm ci
npm run dev
```

Open <http://localhost:3000>. To use a different port, run `npm run dev -- --port 3001`.

## Make it your own

Select **Use this template** on GitHub to create a repository with its own history. Install dependencies, update the application name and links, and connect your own service accounts.

The MIT license permits reuse and modification, including commercial use. Keep the license notice with copies of the software.

## Architecture

- **Next.js and TypeScript:** application UI and server routes, deployed on Vercel.
- **Supabase, planned:** application login and PostgreSQL data for teams, preferences and mappings to MeetingKit resources.
- **MeetingKit API, planned:** calendars, recording, processing, meeting results and signed webhooks.

The app integrates through MeetingKit's public API. Keep API credentials on the server, check the signed-in user's access to each workspace, and verify webhook signatures before processing events. The app owns its own database.

## Checks

```sh
npm run check
```

This runs ESLint, TypeScript checks and a production build. GitHub Actions runs the same checks on pull requests and pushes to `main`.

## Deployment

Import your repository into Vercel with the Next.js framework preset. The checked-in configuration selects Dublin (`dub1`) for server functions. Static assets use Vercel's CDN.

Vercel creates preview deployments for branches and production deployments from `main`. The deployment target for this repository is `meetingkit.app`.

When integrations are added, configure credentials separately:

| Environment | App database and auth | MeetingKit API |
| --- | --- | --- |
| Local development | Local Supabase or a dedicated development project | Development |
| Preview | Development project or isolated database branch | Development |
| Production | Production project | Production |

Copy `.env.example` to `.env.local` for local configuration. Set deployed values in Vercel's environment settings. Never commit populated environment files. Creating a Vercel preview does not automatically create a separate database.

For provider access and agent workflows, see [the development guide](docs/development.md).

## License

[MIT](LICENSE).
