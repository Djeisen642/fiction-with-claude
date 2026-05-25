# AI-Gen Story

A collaborative novel written with Claude. Fork this repo to start your own.

## Structure

- `manuscript/` — Chapters, numbered and in order
- `notes/` — Characters, worldbuilding, tone, outline, ideas
- `summaries/` — Per-chapter summaries and a rolling story-so-far
- `CLAUDE.md` — Instructions for the AI assistant

## Repository Setup

If you fork this repo, configure these settings on your fork:

### Branch Protection (required)

Go to **Settings → Rules → Rulesets** and create a ruleset targeting `main`:

- Require a pull request before merging (no direct commits to main)

### General Settings (recommended)

Under **Settings → General**:

- **Features:** Disable Issues and Projects (this repo uses only PRs and notes files)
- **Pull Requests:**
  - Enable "Always suggest updating pull request branches"
  - Enable "Automatically delete head branches"

The repo is public — anyone can fork it and run their own collaborative story with Claude.
