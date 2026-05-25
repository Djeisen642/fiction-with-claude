# AI-Gen Story

A collaborative novel written with Claude. Fork this repo to start your own.

See [ARCHITECTURE.md](ARCHITECTURE.md) for a detailed explanation of how the repo is organized and how the workflow operates.

## Structure

- `manuscript/` — Chapters, numbered and in order
- `notes/` — Characters, worldbuilding, tone, outline, ideas
- `summaries/` — Per-chapter summaries and a rolling story-so-far
- `CLAUDE.md` — Instructions for the AI assistant

## Repository Setup

After [forking](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo), configure these settings:

### Settings → General

- **Repository name** — Rename to whatever you want to call your project, then click **Rename**
- **Visibility** — Forked repos start public. To make yours private, go to **Danger Zone → Change repository visibility**. You can change this at any time.
- **Features:** Disable Issues and Projects — this repo tracks everything through PRs and plain text notes files, so the extra GitHub features just add noise
- **Pull Requests:**
  - **Always suggest updating pull request branches** — When `main` has moved ahead of an open PR, GitHub will prompt you to bring the PR up to date before merging. Keeps things from conflicting.
  - **Automatically delete head branches** — After you merge a PR, GitHub deletes the feature branch. Keeps the branch list clean.

### Settings → Rules → [Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) (required)

Create a ruleset targeting `main`:

- **Require a [pull request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) before merging** — Prevents anyone (including Claude) from writing directly to `main`. All changes go through a PR you review first.
