# AI-Gen Story

A template for writing a short story collaboratively with Claude.

See [ARCHITECTURE.md](ARCHITECTURE.md) for a detailed explanation of how the repo is organized and how the workflow operates.

## Structure

- `manuscript/` — Chapters, numbered and in order
- `notes/` — Characters, worldbuilding, tone, outline, ideas
- `summaries/` — Per-chapter summaries and a rolling story-so-far
- `CLAUDE.md` — Instructions for the AI assistant

## Starting Your Own Story

1. Click **Use this template** → **Create a new repository**
2. Set your project name and choose public or private
3. Once created, finish setup in your new repo's **Settings**:

### Settings → General

- **Features:** Disable Issues and Projects — this repo tracks everything through PRs and plain text notes files, so the extra GitHub features just add noise
- **Pull Requests:**
  - **Always suggest updating pull request branches** — When `main` has moved ahead of an open PR, GitHub will prompt you to bring the PR up to date before merging. Keeps things from conflicting.
  - **Automatically delete head branches** — After you merge a PR, GitHub deletes the feature branch. Keeps the branch list clean.

### Settings → Rules → [Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets) (required)

Create a ruleset targeting `main`:

- **Require a [pull request (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) before merging** — Prevents anyone (including Claude) from writing directly to `main`. All changes go through a PR you review first.

## Contributing to This Template

If you improve the workflow, notes structure, or instructions in a way that would benefit everyone, contribute it back:

1. [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this repo
2. Make your changes on a branch
3. Open a PR back to this repo

Story content from your own project should stay in your own repo — contributions here should be improvements to the template itself (structure, CLAUDE.md instructions, notes files, documentation).
