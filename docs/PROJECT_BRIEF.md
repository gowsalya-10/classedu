# Project Brief

## Purpose

One place for a class to coordinate announcements, shared forms and documents, personal calendars, reminders and group messaging.

## Roles per Class

### Staff
- Admin capabilities
- Official record management
- User management
- Assigns representatives
- Reviews reported messages

### Representative
- A student with rights to publish official posts
- Review suggestions
- Moderate the student space

### Student
- Reads content
- Tracks items
- Sets personal reminders
- Suggests content
- Nudges classmates
- Chats

## Announcement Categories

- Hackathons
- Careers (internships, placement drives, interviews)
- General

## Resources

Google Forms, Sheets, Docs and Drive files are shared as validated links with a Completed self-mark. No Google API integration in version 1.

## Messaging

- Student discussion space and Staff-to-student space
- Channels and threads
- No private direct messages in version 1
- Staff cannot read the student space; they see only reported messages with a few messages of context, and students are told this
- Students can reply inside threads in the Staff-to-student space

## Notifications

- Priorities: Urgent, Normal, Low
- Quiet hours
- Daily digest
- Per-category mute
- Daily caps
- Student nudges rate-limited
- Reminders only for items not marked Completed

## Principles

- Deny by default
- Permissions enforced in the database with Row Level Security and tested
- Official content is labeled and students never edit it
- Every official change is audited
- Minimize personal data
- Comply with the spirit of India's DPDP Act

## Assumptions

- One institution
- Roles are per class
- Google sign-in limited to the college email domain for everyone (no outside emails)
- Staff able to pre-assign roles by invite
- Only staff assign the Representative role
- Adults only
- English only
- Timezone: Asia/Kolkata
- 50 to 500 users

## Out of Scope for Version 1

- Private direct messages
- Native store apps
- Google Forms or Sheets API integration
- File uploads
- Payments

## Build Plan

1. Day 1: Foundation
2. Day 2: Sign-in and roles
3. Day 3: Database and access rules
4. Day 4: Announcements
5. Day 5: Resources and links
6. Day 6: Calendar
7. Day 7: Notifications part 1
8. Day 8: Notifications part 2
9. Day 9: Seen, nudges and suggestions
10. Day 10: Messaging
11. Day 11: Moderation and audit
12. Day 12: Admin and polish
13. Day 13: Hardening and launch
