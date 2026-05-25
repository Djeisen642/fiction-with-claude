# Fiction with Claude

A template for writing a story collaboratively with [Claude](https://claude.ai) — an AI assistant made by Anthropic. Short story, novella, or novel — you decide the length in your first session. You make the creative decisions; Claude writes and edits the prose, keeps notes up to date, and manages the version control workflow.

## Getting Started

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

Once set up, read [ARCHITECTURE.md](ARCHITECTURE.md) to understand how the workflow and repo structure operate.

## Your First Session

Open a session with Claude and give it one clear goal. You don't need to have everything figured out — that's what the early sessions are for.

If you have an idea:
> I want to write a story about a woman who inherits a failing lighthouse and starts finding letters hidden in the walls. Let's work through the open questions in `notes/questions.md` and figure out the basics before we write anything.

If you don't:
> I want to write a story but I don't have an idea yet. Read the notes files and help me figure out what we're making — genre, premise, a protagonist worth following.

Keep early sessions focused on decisions, not prose. Writing starts once the foundations are in place.

## Monetizing Your Story

**This is not legal advice.** The legal status of AI-generated creative work is unsettled and varies by country. As of 2026, the general picture is:

- In the US, the Copyright Office has declined to register works created purely by AI without meaningful human authorship. The more creative decisions you make — plot, characters, structure, edits — the stronger your claim.
- Other jurisdictions are handling this differently and the law is actively changing.
- Platforms (Amazon KDP, Substack, etc.) have their own policies on AI content, independent of copyright law, and those policies are also evolving.

Before monetizing, consult a lawyer familiar with IP law in your jurisdiction. What's true today may not be true in a year.

## Contributing to This Template

If you improve the workflow, notes structure, or instructions in a way that would benefit everyone, contribute it back:

1. [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this repo
2. Make your changes on a branch
3. Open a PR back to this repo

Story content from your own project should stay in your own repo — contributions here should be improvements to the template itself (structure, CLAUDE.md instructions, notes files, documentation).

## License

MIT — see [LICENSE](LICENSE).

---

## Disclaimer
This is an independent community project. "Claude" is a trademark of Anthropic PBC. This repository is not affiliated with, endorsed by, or sponsored by Anthropic.

