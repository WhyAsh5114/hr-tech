import { Octokit } from "@octokit/core";

const sampleIssues = [
  {
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/12",
    repository_url: "https://api.github.com/repos/WhyAsh5114/MyFit",
    labels_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/12/labels{/name}",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/12/comments",
    events_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/12/events",
    html_url: "https://github.com/WhyAsh5114/MyFit/pull/12",
    id: 2086290998,
    node_id: "PR_kwDOJq_GQs5kUYVX",
    number: 12,
    title: "added abs category",
    user: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "closed",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 1,
    created_at: "2024-01-17T14:17:01Z",
    updated_at: "2024-01-17T14:17:38Z",
    closed_at: "2024-01-17T14:17:27Z",
    author_association: "OWNER",
    active_lock_reason: null,
    draft: false,
    pull_request: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/pulls/12",
      html_url: "https://github.com/WhyAsh5114/MyFit/pull/12",
      diff_url: "https://github.com/WhyAsh5114/MyFit/pull/12.diff",
      patch_url: "https://github.com/WhyAsh5114/MyFit/pull/12.patch",
      merged_at: "2024-01-17T14:17:27Z",
    },
    body: null,
    reactions: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/12/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/12/timeline",
    performed_via_github_app: null,
    state_reason: null,
  },
  {
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/11",
    repository_url: "https://api.github.com/repos/WhyAsh5114/MyFit",
    labels_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/11/labels{/name}",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/11/comments",
    events_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/11/events",
    html_url: "https://github.com/WhyAsh5114/MyFit/issues/11",
    id: 2085826839,
    node_id: "I_kwDOJq_GQs58UzEX",
    number: 11,
    title: "ab category?",
    user: {
      login: "YukiFann",
      id: 156902229,
      node_id: "U_kgDOCVojVQ",
      avatar_url: "https://avatars.githubusercontent.com/u/156902229?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/YukiFann",
      html_url: "https://github.com/YukiFann",
      followers_url: "https://api.github.com/users/YukiFann/followers",
      following_url:
        "https://api.github.com/users/YukiFann/following{/other_user}",
      gists_url: "https://api.github.com/users/YukiFann/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/YukiFann/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/YukiFann/subscriptions",
      organizations_url: "https://api.github.com/users/YukiFann/orgs",
      repos_url: "https://api.github.com/users/YukiFann/repos",
      events_url: "https://api.github.com/users/YukiFann/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/YukiFann/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "closed",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 1,
    created_at: "2024-01-17T09:59:52Z",
    updated_at: "2024-01-17T14:22:57Z",
    closed_at: "2024-01-17T14:17:28Z",
    author_association: "NONE",
    active_lock_reason: null,
    body: "hi i noticed there is no category for abs was this a mistake or on purpose? was trying to track my ab reps and sets",
    reactions: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/11/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/11/timeline",
    performed_via_github_app: null,
    state_reason: "completed",
  },
  {
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/10",
    repository_url: "https://api.github.com/repos/WhyAsh5114/MyFit",
    labels_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/10/labels{/name}",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/10/comments",
    events_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/10/events",
    html_url: "https://github.com/WhyAsh5114/MyFit/issues/10",
    id: 2082449195,
    node_id: "I_kwDOJq_GQs58H6cr",
    number: 10,
    title:
      "After editing exercise selection of current mesocycle, old exercises still retained",
    user: {
      login: "Testah2024",
      id: 155659963,
      node_id: "U_kgDOCUcuuw",
      avatar_url: "https://avatars.githubusercontent.com/u/155659963?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Testah2024",
      html_url: "https://github.com/Testah2024",
      followers_url: "https://api.github.com/users/Testah2024/followers",
      following_url:
        "https://api.github.com/users/Testah2024/following{/other_user}",
      gists_url: "https://api.github.com/users/Testah2024/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Testah2024/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/Testah2024/subscriptions",
      organizations_url: "https://api.github.com/users/Testah2024/orgs",
      repos_url: "https://api.github.com/users/Testah2024/repos",
      events_url: "https://api.github.com/users/Testah2024/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Testah2024/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "closed",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 3,
    created_at: "2024-01-15T17:34:10Z",
    updated_at: "2024-01-16T16:14:27Z",
    closed_at: "2024-01-16T16:14:27Z",
    author_association: "NONE",
    active_lock_reason: null,
    body:
      "If I have made a mesocycle, start it, then a week later change some of the exercise selections by editing the mesocycle, it MyFit supposed to use the newly edited in exercise selections or is it intentional that it retains the old version of the mesocycle?\r\n" +
      "\r\n" +
      "For example,\r\n" +
      "For Monday I changed Cable Side Laterals to Cable Crossover Lateral Raises. But when week 2 started, it still had Cable Side Laterals, rather than the Cable Crossover Lateral Raises I changed it to in the previous week.. ",
    reactions: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/10/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/10/timeline",
    performed_via_github_app: null,
    state_reason: "completed",
  },
  {
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/9",
    repository_url: "https://api.github.com/repos/WhyAsh5114/MyFit",
    labels_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/9/labels{/name}",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/9/comments",
    events_url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/9/events",
    html_url: "https://github.com/WhyAsh5114/MyFit/issues/9",
    id: 2070036979,
    node_id: "I_kwDOJq_GQs57YkHz",
    number: 9,
    title: '"Log Workout" greyed out - Non functioning',
    user: {
      login: "Testah2024",
      id: 155659963,
      node_id: "U_kgDOCUcuuw",
      avatar_url: "https://avatars.githubusercontent.com/u/155659963?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Testah2024",
      html_url: "https://github.com/Testah2024",
      followers_url: "https://api.github.com/users/Testah2024/followers",
      following_url:
        "https://api.github.com/users/Testah2024/following{/other_user}",
      gists_url: "https://api.github.com/users/Testah2024/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Testah2024/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/Testah2024/subscriptions",
      organizations_url: "https://api.github.com/users/Testah2024/orgs",
      repos_url: "https://api.github.com/users/Testah2024/repos",
      events_url: "https://api.github.com/users/Testah2024/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Testah2024/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "closed",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 6,
    created_at: "2024-01-08T09:22:46Z",
    updated_at: "2024-01-08T12:16:49Z",
    closed_at: "2024-01-08T12:16:49Z",
    author_association: "NONE",
    active_lock_reason: null,
    body:
      `I'm unsure if because this is a work in progress if its intentional that "Log Workout" actually function, or if I'm having some issue?\r\n` +
      '"Skip" works. "Log Workout" does not.',
    reactions: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/9/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/9/timeline",
    performed_via_github_app: null,
    state_reason: "completed",
  },
  {
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/8",
    repository_url: "https://api.github.com/repos/WhyAsh5114/MyFit",
    labels_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/8/labels{/name}",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/8/comments",
    events_url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/8/events",
    html_url: "https://github.com/WhyAsh5114/MyFit/issues/8",
    id: 2065950301,
    node_id: "I_kwDOJq_GQs57I-Zd",
    number: 8,
    title: '"Access Blocked" Google Verification Error',
    user: {
      login: "Testah2024",
      id: 155659963,
      node_id: "U_kgDOCUcuuw",
      avatar_url: "https://avatars.githubusercontent.com/u/155659963?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Testah2024",
      html_url: "https://github.com/Testah2024",
      followers_url: "https://api.github.com/users/Testah2024/followers",
      following_url:
        "https://api.github.com/users/Testah2024/following{/other_user}",
      gists_url: "https://api.github.com/users/Testah2024/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Testah2024/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/Testah2024/subscriptions",
      organizations_url: "https://api.github.com/users/Testah2024/orgs",
      repos_url: "https://api.github.com/users/Testah2024/repos",
      events_url: "https://api.github.com/users/Testah2024/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Testah2024/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "closed",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 5,
    created_at: "2024-01-04T16:20:10Z",
    updated_at: "2024-01-05T15:33:30Z",
    closed_at: "2024-01-05T15:33:00Z",
    author_association: "NONE",
    active_lock_reason: null,
    body:
      "When trying to open the web app, I'm met with an error stating:\r\n" +
      '"Access blocked: my-fit-whyash5114.vercel.app has not completed the Google verification process.\r\n' +
      'my-fit-whyash5114.vercel.app has not completed the Google verification process. The app is currently being tested and can only be accessed by developer-approved testers."',
    reactions: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/8/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/8/timeline",
    performed_via_github_app: null,
    state_reason: "completed",
  },
  {
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/7",
    repository_url: "https://api.github.com/repos/WhyAsh5114/MyFit",
    labels_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/7/labels{/name}",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/7/comments",
    events_url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/7/events",
    html_url: "https://github.com/WhyAsh5114/MyFit/issues/7",
    id: 2062982901,
    node_id: "I_kwDOJq_GQs569p71",
    number: 7,
    title: "Suggestions",
    user: {
      login: "Leech025",
      id: 42701637,
      node_id: "MDQ6VXNlcjQyNzAxNjM3",
      avatar_url: "https://avatars.githubusercontent.com/u/42701637?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Leech025",
      html_url: "https://github.com/Leech025",
      followers_url: "https://api.github.com/users/Leech025/followers",
      following_url:
        "https://api.github.com/users/Leech025/following{/other_user}",
      gists_url: "https://api.github.com/users/Leech025/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Leech025/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Leech025/subscriptions",
      organizations_url: "https://api.github.com/users/Leech025/orgs",
      repos_url: "https://api.github.com/users/Leech025/repos",
      events_url: "https://api.github.com/users/Leech025/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Leech025/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 3,
    created_at: "2024-01-02T21:35:21Z",
    updated_at: "2024-01-03T15:24:59Z",
    closed_at: null,
    author_association: "NONE",
    active_lock_reason: null,
    body:
      "A couple of other things that would be nice to see:\r\n" +
      "\r\n" +
      "- spontaneous rest/active recovery days with auto-calculated sets and reps\r\n" +
      "- pre-calculated warmups using a standard calculation (perhaps optional when defining an exercise)\r\n" +
      '- Click-and-drag reordering in the mesocycle creator in the "Split" and "Exercises" sections',
    reactions: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/7/reactions",
      total_count: 1,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 1,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/7/timeline",
    performed_via_github_app: null,
    state_reason: null,
  },
  {
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/6",
    repository_url: "https://api.github.com/repos/WhyAsh5114/MyFit",
    labels_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/6/labels{/name}",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/6/comments",
    events_url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/6/events",
    html_url: "https://github.com/WhyAsh5114/MyFit/issues/6",
    id: 2058020538,
    node_id: "I_kwDOJq_GQs56qua6",
    number: 6,
    title: "Recommendations for V3 can",
    user: {
      login: "EliavRevah",
      id: 152764822,
      node_id: "U_kgDOCRsBlg",
      avatar_url: "https://avatars.githubusercontent.com/u/152764822?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/EliavRevah",
      html_url: "https://github.com/EliavRevah",
      followers_url: "https://api.github.com/users/EliavRevah/followers",
      following_url:
        "https://api.github.com/users/EliavRevah/following{/other_user}",
      gists_url: "https://api.github.com/users/EliavRevah/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/EliavRevah/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/EliavRevah/subscriptions",
      organizations_url: "https://api.github.com/users/EliavRevah/orgs",
      repos_url: "https://api.github.com/users/EliavRevah/repos",
      events_url: "https://api.github.com/users/EliavRevah/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/EliavRevah/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 4,
    created_at: "2023-12-28T05:50:32Z",
    updated_at: "2024-01-03T02:57:31Z",
    closed_at: null,
    author_association: "NONE",
    active_lock_reason: null,
    body:
      "1.The option to choose different sets for exercises: myoreps,Myo match, down sets, drop sets etc...\n" +
      "\n" +
      "2. Exercise database so the users can select the exercise they wish to add \n" +
      "\n" +
      "3.Option to set exercises to multiple muscle groups for example instead of having  chest press set to only chest you could set it to chest triceps and front delts\n" +
      "\n" +
      "4. A counter of partial reps per set",
    reactions: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/6/reactions",
      total_count: 2,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 2,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/6/timeline",
    performed_via_github_app: null,
    state_reason: null,
  },
  {
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/5",
    repository_url: "https://api.github.com/repos/WhyAsh5114/MyFit",
    labels_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/5/labels{/name}",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/5/comments",
    events_url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/5/events",
    html_url: "https://github.com/WhyAsh5114/MyFit/issues/5",
    id: 2035713371,
    node_id: "I_kwDOJq_GQs55VoVb",
    number: 5,
    title: "Can't create a mesocycle ",
    user: {
      login: "EliavRevah",
      id: 152764822,
      node_id: "U_kgDOCRsBlg",
      avatar_url: "https://avatars.githubusercontent.com/u/152764822?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/EliavRevah",
      html_url: "https://github.com/EliavRevah",
      followers_url: "https://api.github.com/users/EliavRevah/followers",
      following_url:
        "https://api.github.com/users/EliavRevah/following{/other_user}",
      gists_url: "https://api.github.com/users/EliavRevah/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/EliavRevah/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/EliavRevah/subscriptions",
      organizations_url: "https://api.github.com/users/EliavRevah/orgs",
      repos_url: "https://api.github.com/users/EliavRevah/repos",
      events_url: "https://api.github.com/users/EliavRevah/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/EliavRevah/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "closed",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 1,
    created_at: "2023-12-11T13:43:52Z",
    updated_at: "2023-12-11T14:28:37Z",
    closed_at: "2023-12-11T14:28:36Z",
    author_association: "NONE",
    active_lock_reason: null,
    body:
      'Pressing the "create mesocycle" button shows an error message, an html code.\n' +
      "\n",
    reactions: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/5/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/5/timeline",
    performed_via_github_app: null,
    state_reason: "completed",
  },
  {
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/4",
    repository_url: "https://api.github.com/repos/WhyAsh5114/MyFit",
    labels_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/4/labels{/name}",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/4/comments",
    events_url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/4/events",
    html_url: "https://github.com/WhyAsh5114/MyFit/issues/4",
    id: 2034245888,
    node_id: "I_kwDOJq_GQs55QCEA",
    number: 4,
    title: "Can't create a new mesocycle ",
    user: {
      login: "EliavRevah",
      id: 152764822,
      node_id: "U_kgDOCRsBlg",
      avatar_url: "https://avatars.githubusercontent.com/u/152764822?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/EliavRevah",
      html_url: "https://github.com/EliavRevah",
      followers_url: "https://api.github.com/users/EliavRevah/followers",
      following_url:
        "https://api.github.com/users/EliavRevah/following{/other_user}",
      gists_url: "https://api.github.com/users/EliavRevah/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/EliavRevah/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/EliavRevah/subscriptions",
      organizations_url: "https://api.github.com/users/EliavRevah/orgs",
      repos_url: "https://api.github.com/users/EliavRevah/repos",
      events_url: "https://api.github.com/users/EliavRevah/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/EliavRevah/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "closed",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 2,
    created_at: "2023-12-10T06:57:15Z",
    updated_at: "2023-12-10T09:07:48Z",
    closed_at: "2023-12-10T09:07:48Z",
    author_association: "NONE",
    active_lock_reason: null,
    body:
      "In the 3 step for creating a mesocycle after moving from one day to the other the exercises get deleted.\n" +
      "Also if you refresh the days also reset showing nothing but empty white boxes.\n" +
      "On top of that there is no edit button for previously created mesocycles.\n" +
      "\n" +
      "Thank you and have a nice day☺️",
    reactions: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/4/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/4/timeline",
    performed_via_github_app: null,
    state_reason: "completed",
  },
  {
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/3",
    repository_url: "https://api.github.com/repos/WhyAsh5114/MyFit",
    labels_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/3/labels{/name}",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/3/comments",
    events_url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/3/events",
    html_url: "https://github.com/WhyAsh5114/MyFit/issues/3",
    id: 2026055963,
    node_id: "I_kwDOJq_GQs54wykb",
    number: 3,
    title: "Mesocycle Deleted",
    user: {
      login: "EliavRevah",
      id: 152764822,
      node_id: "U_kgDOCRsBlg",
      avatar_url: "https://avatars.githubusercontent.com/u/152764822?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/EliavRevah",
      html_url: "https://github.com/EliavRevah",
      followers_url: "https://api.github.com/users/EliavRevah/followers",
      following_url:
        "https://api.github.com/users/EliavRevah/following{/other_user}",
      gists_url: "https://api.github.com/users/EliavRevah/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/EliavRevah/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/EliavRevah/subscriptions",
      organizations_url: "https://api.github.com/users/EliavRevah/orgs",
      repos_url: "https://api.github.com/users/EliavRevah/repos",
      events_url: "https://api.github.com/users/EliavRevah/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/EliavRevah/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "closed",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 2,
    created_at: "2023-12-05T12:13:39Z",
    updated_at: "2023-12-05T12:43:40Z",
    closed_at: "2023-12-05T12:43:39Z",
    author_association: "NONE",
    active_lock_reason: null,
    body:
      "A mesocycle I created has been deleted after updating, is it a result of the update? Or is it a bug?\n" +
      "On top of that before the update I could have seen my weekly stats.\n" +
      "Where can I find those?\n",
    reactions: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/3/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/3/timeline",
    performed_via_github_app: null,
    state_reason: "completed",
  },
  {
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/2",
    repository_url: "https://api.github.com/repos/WhyAsh5114/MyFit",
    labels_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/2/labels{/name}",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/2/comments",
    events_url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/2/events",
    html_url: "https://github.com/WhyAsh5114/MyFit/pull/2",
    id: 2025787124,
    node_id: "PR_kwDOJq_GQs5hJ_2t",
    number: 2,
    title: "V2",
    user: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "closed",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 1,
    created_at: "2023-12-05T09:50:25Z",
    updated_at: "2023-12-05T09:50:49Z",
    closed_at: "2023-12-05T09:50:37Z",
    author_association: "OWNER",
    active_lock_reason: null,
    draft: false,
    pull_request: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/pulls/2",
      html_url: "https://github.com/WhyAsh5114/MyFit/pull/2",
      diff_url: "https://github.com/WhyAsh5114/MyFit/pull/2.diff",
      patch_url: "https://github.com/WhyAsh5114/MyFit/pull/2.patch",
      merged_at: "2023-12-05T09:50:37Z",
    },
    body:
      "# v2 is here!\r\n" +
      "- cleanup\r\n" +
      "- better hinters\r\n" +
      "- cleaner UI\r\n" +
      "- better PWA spec\r\n" +
      "- faster and more intuitive than before",
    reactions: {
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/issues/2/reactions",
      total_count: 0,
      "+1": 0,
      "-1": 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
    timeline_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/issues/2/timeline",
    performed_via_github_app: null,
    state_reason: null,
  },
];

const commitData = [
  {
    sha: "7cfa4948c3ea36ce063e9c617f592927d33768a4",
    node_id:
      "C_kwDOJq_GQtoAKDdjZmE0OTQ4YzNlYTM2Y2UwNjNlOWM2MTdmNTkyOTI3ZDMzNzY4YTQ",
    commit: {
      author: [Object],
      committer: [Object],
      message: "added Github oauth",
      tree: [Object],
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/git/commits/7cfa4948c3ea36ce063e9c617f592927d33768a4",
      comment_count: 0,
      verification: [Object],
    },
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/commits/7cfa4948c3ea36ce063e9c617f592927d33768a4",
    html_url:
      "https://github.com/WhyAsh5114/MyFit/commit/7cfa4948c3ea36ce063e9c617f592927d33768a4",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/commits/7cfa4948c3ea36ce063e9c617f592927d33768a4/comments",
    author: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [[Object]],
  },
  {
    sha: "6b4df848d2734f9192f6ccbae0a00745c1abff37",
    node_id:
      "C_kwDOJq_GQtoAKDZiNGRmODQ4ZDI3MzRmOTE5MmY2Y2NiYWUwYTAwNzQ1YzFhYmZmMzc",
    commit: {
      author: [Object],
      committer: [Object],
      message: "added a privacy policy for the app",
      tree: [Object],
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/git/commits/6b4df848d2734f9192f6ccbae0a00745c1abff37",
      comment_count: 0,
      verification: [Object],
    },
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/commits/6b4df848d2734f9192f6ccbae0a00745c1abff37",
    html_url:
      "https://github.com/WhyAsh5114/MyFit/commit/6b4df848d2734f9192f6ccbae0a00745c1abff37",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/commits/6b4df848d2734f9192f6ccbae0a00745c1abff37/comments",
    author: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [[Object]],
  },
  {
    sha: "28d0b77576f82b9a774f5640c015f358ee0b1d04",
    node_id:
      "C_kwDOJq_GQtoAKDI4ZDBiNzc1NzZmODJiOWE3NzRmNTY0MGMwMTVmMzU4ZWUwYjFkMDQ",
    commit: {
      author: [Object],
      committer: [Object],
      message: "added typography plugin",
      tree: [Object],
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/git/commits/28d0b77576f82b9a774f5640c015f358ee0b1d04",
      comment_count: 0,
      verification: [Object],
    },
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/commits/28d0b77576f82b9a774f5640c015f358ee0b1d04",
    html_url:
      "https://github.com/WhyAsh5114/MyFit/commit/28d0b77576f82b9a774f5640c015f358ee0b1d04",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/commits/28d0b77576f82b9a774f5640c015f358ee0b1d04/comments",
    author: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [[Object]],
  },
  {
    sha: "573ecb030922e17ae9e0133965239062b9df9643",
    node_id:
      "C_kwDOJq_GQtoAKDU3M2VjYjAzMDkyMmUxN2FlOWUwMTMzOTY1MjM5MDYyYjlkZjk2NDM",
    commit: {
      author: [Object],
      committer: [Object],
      message: "Update README.md",
      tree: [Object],
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/git/commits/573ecb030922e17ae9e0133965239062b9df9643",
      comment_count: 0,
      verification: [Object],
    },
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/commits/573ecb030922e17ae9e0133965239062b9df9643",
    html_url:
      "https://github.com/WhyAsh5114/MyFit/commit/573ecb030922e17ae9e0133965239062b9df9643",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/commits/573ecb030922e17ae9e0133965239062b9df9643/comments",
    author: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [[Object]],
  },
  {
    sha: "e7f4bc781e545990a3af15cc1253ec4ee37a3e2a",
    node_id:
      "C_kwDOJq_GQtoAKGU3ZjRiYzc4MWU1NDU5OTBhM2FmMTVjYzEyNTNlYzRlZTM3YTNlMmE",
    commit: {
      author: [Object],
      committer: [Object],
      message: "added a v3 notice for current users",
      tree: [Object],
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/git/commits/e7f4bc781e545990a3af15cc1253ec4ee37a3e2a",
      comment_count: 0,
      verification: [Object],
    },
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/commits/e7f4bc781e545990a3af15cc1253ec4ee37a3e2a",
    html_url:
      "https://github.com/WhyAsh5114/MyFit/commit/e7f4bc781e545990a3af15cc1253ec4ee37a3e2a",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/commits/e7f4bc781e545990a3af15cc1253ec4ee37a3e2a/comments",
    author: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [[Object]],
  },
  {
    sha: "5017d5f9d2eaee03d9bf1f7884f4035e53cfdef7",
    node_id:
      "C_kwDOJq_GQtoAKDUwMTdkNWY5ZDJlYWVlMDNkOWJmMWY3ODg0ZjQwMzVlNTNjZmRlZjc",
    commit: {
      author: [Object],
      committer: [Object],
      message: "added a bodyweight indicator in meso creation",
      tree: [Object],
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/git/commits/5017d5f9d2eaee03d9bf1f7884f4035e53cfdef7",
      comment_count: 0,
      verification: [Object],
    },
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/commits/5017d5f9d2eaee03d9bf1f7884f4035e53cfdef7",
    html_url:
      "https://github.com/WhyAsh5114/MyFit/commit/5017d5f9d2eaee03d9bf1f7884f4035e53cfdef7",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/commits/5017d5f9d2eaee03d9bf1f7884f4035e53cfdef7/comments",
    author: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [[Object]],
  },
  {
    sha: "f80a5382888e6e6e79fac35f875b292c87918d1c",
    node_id:
      "C_kwDOJq_GQtoAKGY4MGE1MzgyODg4ZTZlNmU3OWZhYzM1Zjg3NWIyOTJjODc5MThkMWM",
    commit: {
      author: [Object],
      committer: [Object],
      message: "bugfix\nnon-BW exercises don't update userBodyweight",
      tree: [Object],
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/git/commits/f80a5382888e6e6e79fac35f875b292c87918d1c",
      comment_count: 0,
      verification: [Object],
    },
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/commits/f80a5382888e6e6e79fac35f875b292c87918d1c",
    html_url:
      "https://github.com/WhyAsh5114/MyFit/commit/f80a5382888e6e6e79fac35f875b292c87918d1c",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/commits/f80a5382888e6e6e79fac35f875b292c87918d1c/comments",
    author: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [[Object]],
  },
  {
    sha: "3ffc350a247a215d2a4d8471f1fe7e4e5b8ef5de",
    node_id:
      "C_kwDOJq_GQtoAKDNmZmMzNTBhMjQ3YTIxNWQyYTRkODQ3MWYxZmU3ZTRlNWI4ZWY1ZGU",
    commit: {
      author: [Object],
      committer: [Object],
      message: "workout view bugfix",
      tree: [Object],
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/git/commits/3ffc350a247a215d2a4d8471f1fe7e4e5b8ef5de",
      comment_count: 0,
      verification: [Object],
    },
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/commits/3ffc350a247a215d2a4d8471f1fe7e4e5b8ef5de",
    html_url:
      "https://github.com/WhyAsh5114/MyFit/commit/3ffc350a247a215d2a4d8471f1fe7e4e5b8ef5de",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/commits/3ffc350a247a215d2a4d8471f1fe7e4e5b8ef5de/comments",
    author: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [[Object]],
  },
  {
    sha: "b0f660227daca7f1424f119544833b0616b72055",
    node_id:
      "C_kwDOJq_GQtoAKGIwZjY2MDIyN2RhY2E3ZjE0MjRmMTE5NTQ0ODMzYjA2MTZiNzIwNTU",
    commit: {
      author: [Object],
      committer: [Object],
      message:
        "bugfix\n" +
        "fixed referenceWorkout comparison bug, occurs when reordering exercises",
      tree: [Object],
      url: "https://api.github.com/repos/WhyAsh5114/MyFit/git/commits/b0f660227daca7f1424f119544833b0616b72055",
      comment_count: 0,
      verification: [Object],
    },
    url: "https://api.github.com/repos/WhyAsh5114/MyFit/commits/b0f660227daca7f1424f119544833b0616b72055",
    html_url:
      "https://github.com/WhyAsh5114/MyFit/commit/b0f660227daca7f1424f119544833b0616b72055",
    comments_url:
      "https://api.github.com/repos/WhyAsh5114/MyFit/commits/b0f660227daca7f1424f119544833b0616b72055/comments",
    author: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "WhyAsh5114",
      id: 71895020,
      node_id: "MDQ6VXNlcjcxODk1MDIw",
      avatar_url: "https://avatars.githubusercontent.com/u/71895020?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/WhyAsh5114",
      html_url: "https://github.com/WhyAsh5114",
      followers_url: "https://api.github.com/users/WhyAsh5114/followers",
      following_url:
        "https://api.github.com/users/WhyAsh5114/following{/other_user}",
      gists_url: "https://api.github.com/users/WhyAsh5114/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/WhyAsh5114/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/WhyAsh5114/subscriptions",
      organizations_url: "https://api.github.com/users/WhyAsh5114/orgs",
      repos_url: "https://api.github.com/users/WhyAsh5114/repos",
      events_url: "https://api.github.com/users/WhyAsh5114/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/WhyAsh5114/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [[Object]],
  },
];

export const load = async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  let timesTakenToCloseIssue: number[] = [];
  let openIssues = 0;

  //const { data } = await octokit.request(
  //  "GET /repos/WhyAsh5114/MyFit/commits",
  //  { type: "public" }
  //);

  //const response = await octokit.request(
  //  "GET /repos/WhyAsh5114/MyFit/issues?state=all",
  //  {
  //    owner: "WhyAsh5114",
  //    repo: "MyFit",
  //    headers: {
  //      "X-GitHub-Api-Version": "2022-11-28",
  //    },
  //  }
  //);

  sampleIssues.forEach(
    (issue: {
      closed_at: string | number | Date | null;
      created_at: string | number | Date;
    }) => {
      if (issue.closed_at === null) {
        openIssues += 1;
        return;
      }
      const issueCreatedAt = Number(new Date(issue.created_at));
      const issueClosedAt = Number(new Date(issue.closed_at));
      const hoursToCompletion =
        (issueClosedAt - issueCreatedAt) / 1000 / 60 / 60;
      timesTakenToCloseIssue.push(Number(hoursToCompletion.toFixed(2)));
    }
  );

  let totalCommits = 0;
  commitData.forEach((element: { committer: { login: string } }) => {
    if (element.committer.login === "WhyAsh5114") {
      totalCommits += 1;
    }
  });

  return { totalCommits, timesTakenToCloseIssue };
};
