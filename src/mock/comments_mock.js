const comments_mock = [
  {
    _id: {
      $oid: "65ccc4b8ad74f83f5894360f",
    },
    content: "new comment",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ccc379ad74f83f5894360c",
    },
    createdAt: {
      $date: "2024-02-14T13:48:40.288Z",
    },
    updatedAt: {
      $date: "2024-02-14T13:48:40.288Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65ccd1e2632b8a1da09fc526",
    },
    content: "test1 comment",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ccd0e9632b8a1da09fc51f",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-14T14:44:50.501Z",
    },
    updatedAt: {
      $date: "2024-02-14T14:44:50.501Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65ccd237632b8a1da09fc52a",
    },
    content: "test2 comment",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ccd0e9632b8a1da09fc51f",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-14T14:46:15.060Z",
    },
    updatedAt: {
      $date: "2024-02-14T14:46:15.060Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65ccd319632b8a1da09fc52e",
    },
    content: "test3 comment",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ccd0e9632b8a1da09fc51f",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-14T14:50:01.941Z",
    },
    updatedAt: {
      $date: "2024-02-14T14:50:01.941Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65cce321632b8a1da09fc532",
    },
    content: "tes comment",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ccd0e9632b8a1da09fc51f",
    },
    parentComment: {
      $oid: "65ccd237632b8a1da09fc52a",
    },
    createdAt: {
      $date: "2024-02-14T15:58:25.499Z",
    },
    updatedAt: {
      $date: "2024-02-14T15:58:25.499Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65cce3d7f70732241b28b2a0",
    },
    content: "thread comment",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ccd0e9632b8a1da09fc51f",
    },
    parentComment: {
      $oid: "65ccd1e2632b8a1da09fc526",
    },
    createdAt: {
      $date: "2024-02-14T16:01:27.296Z",
    },
    updatedAt: {
      $date: "2024-02-14T16:01:27.296Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65cf5e102da71b3bc76488c4",
    },
    content: "thread33 comment",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ccd0e9632b8a1da09fc51f",
    },
    parentComment: {
      $oid: "65ccd1e2632b8a1da09fc526",
    },
    createdAt: {
      $date: "2024-02-16T13:07:28.364Z",
    },
    updatedAt: {
      $date: "2024-02-16T13:07:28.364Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65cf5f7bb639126b529677a2",
    },
    content: "threadfvf comment",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ccd0e9632b8a1da09fc51f",
    },
    parentComment: {
      $oid: "65ccd1e2632b8a1da09fc526",
    },
    createdAt: {
      $date: "2024-02-16T13:13:31.035Z",
    },
    updatedAt: {
      $date: "2024-02-16T13:13:31.035Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d1fe1baf56e84319665cef",
    },
    content: "test",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blog: {
      $oid: "65ab67ddc5c141a5f5ba089e",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-18T12:54:51.656Z",
    },
    updatedAt: {
      $date: "2024-02-18T12:54:51.656Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d1fe93af56e84319665d3a",
    },
    content: "new",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ab67ddc5c141a5f5ba089e",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-18T12:56:51.797Z",
    },
    updatedAt: {
      $date: "2024-02-18T12:56:51.797Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d20116af56e84319665d68",
    },
    content: "s",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ab67ddc5c141a5f5ba089e",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-18T13:07:34.567Z",
    },
    updatedAt: {
      $date: "2024-02-18T13:07:34.567Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d20393af56e84319665d86",
    },
    content: "reply",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ab67ddc5c141a5f5ba089e",
    },
    parentComment: {
      $oid: "65d1fe1baf56e84319665cef",
    },
    createdAt: {
      $date: "2024-02-18T13:18:11.766Z",
    },
    updatedAt: {
      $date: "2024-02-18T13:18:11.766Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d2039faf56e84319665d8c",
    },
    content: "reply reoly",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ab67ddc5c141a5f5ba089e",
    },
    parentComment: {
      $oid: "65d20393af56e84319665d86",
    },
    createdAt: {
      $date: "2024-02-18T13:18:23.102Z",
    },
    updatedAt: {
      $date: "2024-02-18T13:18:23.102Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d203a5af56e84319665d92",
    },
    content: "test",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ab67ddc5c141a5f5ba089e",
    },
    parentComment: {
      $oid: "65d20393af56e84319665d86",
    },
    createdAt: {
      $date: "2024-02-18T13:18:29.830Z",
    },
    updatedAt: {
      $date: "2024-02-18T13:18:29.830Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d203afaf56e84319665d98",
    },
    content: "hello",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ab67ddc5c141a5f5ba089e",
    },
    parentComment: {
      $oid: "65d1fe1baf56e84319665cef",
    },
    createdAt: {
      $date: "2024-02-18T13:18:39.564Z",
    },
    updatedAt: {
      $date: "2024-02-18T13:18:39.564Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d203d8af56e84319665db8",
    },
    content: "nice",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65d1da6caf56e84319665936",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-18T13:19:20.988Z",
    },
    updatedAt: {
      $date: "2024-02-18T13:19:20.988Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d203e1af56e84319665dbe",
    },
    content: "ty",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65d1da6caf56e84319665936",
    },
    parentComment: {
      $oid: "65d203d8af56e84319665db8",
    },
    createdAt: {
      $date: "2024-02-18T13:19:29.638Z",
    },
    updatedAt: {
      $date: "2024-02-18T13:19:29.638Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d206bbaf56e84319665e0a",
    },
    content: "test",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65d1da6caf56e84319665936",
    },
    parentComment: {
      $oid: "65d203d8af56e84319665db8",
    },
    createdAt: {
      $date: "2024-02-18T13:31:39.034Z",
    },
    updatedAt: {
      $date: "2024-02-18T13:31:39.034Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d21676a0b8259751772f30",
    },
    content: "hello",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blog: {
      $oid: "65ccd0e9632b8a1da09fc51f",
    },
    parentComment: {
      $oid: "65d21671a0b8259751772f2a",
    },
    createdAt: {
      $date: "2024-02-18T14:38:46.852Z",
    },
    updatedAt: {
      $date: "2024-02-18T14:38:46.852Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d23d2f138b76171deb423d",
    },
    content: "reply",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blog: {
      $oid: "65ccd0e9632b8a1da09fc51f",
    },
    parentComment: {
      $oid: "65cce321632b8a1da09fc532",
    },
    createdAt: {
      $date: "2024-02-18T17:23:59.181Z",
    },
    updatedAt: {
      $date: "2024-02-18T17:23:59.181Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d24313138b76171deb435a",
    },
    content: "reply",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blog: {
      $oid: "65d1dc06af56e84319665963",
    },
    parentComment: {
      $oid: "65d2430d138b76171deb4354",
    },
    createdAt: {
      $date: "2024-02-18T17:49:07.191Z",
    },
    updatedAt: {
      $date: "2024-02-18T17:49:07.191Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d5edaa0ec04e5afd2988df",
    },
    content: "new",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65aac21ac46e2965ed9871d1",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-21T12:33:46.760Z",
    },
    updatedAt: {
      $date: "2024-02-21T12:33:46.760Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d5f0600ec04e5afd29897b",
    },
    content: "l",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ab3a86c09eb636f61496c7",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-21T12:45:20.533Z",
    },
    updatedAt: {
      $date: "2024-02-21T12:45:20.533Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d5f08d0ec04e5afd298995",
    },
    content: "fsda",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ab3a86c09eb636f61496c7",
    },
    parentComment: {
      $oid: "65d5f0600ec04e5afd29897b",
    },
    createdAt: {
      $date: "2024-02-21T12:46:05.069Z",
    },
    updatedAt: {
      $date: "2024-02-21T12:46:05.069Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d5f09e0ec04e5afd2989af",
    },
    content: "f",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blog: {
      $oid: "65ab3a86c09eb636f61496c7",
    },
    parentComment: {
      $oid: "65d5f08d0ec04e5afd298995",
    },
    createdAt: {
      $date: "2024-02-21T12:46:22.450Z",
    },
    updatedAt: {
      $date: "2024-02-21T12:46:22.450Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d9c29ae937ce9581a16c64",
    },
    content: "john",
    user: {
      $oid: "65d35d7688276f03e897b7e3",
    },
    blog: {
      $oid: "65aab7f170d19b5e86a209cf",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-24T10:19:06.115Z",
    },
    updatedAt: {
      $date: "2024-02-24T10:19:06.115Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65db21856c49234469be6dc0",
    },
    content: "sad",
    user: {
      $oid: "65d35d7688276f03e897b7e3",
    },
    blog: {
      $oid: "65db217b6c49234469be6da9",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-25T11:16:21.549Z",
    },
    updatedAt: {
      $date: "2024-02-25T11:16:21.549Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65db21ae6c49234469be6e0e",
    },
    content: "mmm",
    user: {
      $oid: "65d35d7688276f03e897b7e3",
    },
    blog: {
      $oid: "65d1da6caf56e84319665936",
    },
    parentComment: {
      $oid: "65d203e1af56e84319665dbe",
    },
    createdAt: {
      $date: "2024-02-25T11:17:02.169Z",
    },
    updatedAt: {
      $date: "2024-02-25T11:17:02.169Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65dc650d9510ce89b557b685",
    },
    content: "test",
    user: {
      $oid: "65db3cc4fc67c818307036fc",
    },
    blog: {
      $oid: "65ab3a86c09eb636f61496c7",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-26T10:16:45.590Z",
    },
    updatedAt: {
      $date: "2024-02-26T10:16:45.590Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65dca056c301d3644fb48f39",
    },
    content: "s",
    user: {
      $oid: "65db3cc4fc67c818307036fc",
    },
    blog: {
      $oid: "65db55879e1dee7cd9ccbe08",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-02-26T14:29:42.508Z",
    },
    updatedAt: {
      $date: "2024-02-26T14:29:42.508Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e40f749a8df287663c1738",
    },
    content: "dasd",
    user: {
      $oid: "65db3cc4fc67c818307036fc",
    },
    blog: {
      $oid: "65aab7f170d19b5e86a209cf",
    },
    parentComment: {
      $oid: "65d9c29ae937ce9581a16c64",
    },
    createdAt: {
      $date: "2024-03-03T05:49:40.288Z",
    },
    updatedAt: {
      $date: "2024-03-03T05:49:40.288Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e47c54a201bd07dd52e95e",
    },
    content: "asdasd",
    user: {
      $oid: "65db3cc4fc67c818307036fc",
    },
    blog: {
      $oid: "65e47c4aa201bd07dd52e954",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-03-03T13:34:12.869Z",
    },
    updatedAt: {
      $date: "2024-03-03T13:34:12.869Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e48a5749033fd8d0908c9b",
    },
    content: "threaded comment",
    user: {
      $oid: "65e489f949033fd8d0908c84",
    },
    blog: {
      $oid: "65e47c4aa201bd07dd52e954",
    },
    parentComment: {
      $oid: "65e47c54a201bd07dd52e95e",
    },
    createdAt: {
      $date: "2024-03-03T14:33:59.511Z",
    },
    updatedAt: {
      $date: "2024-03-03T14:33:59.511Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e48e146c335d3223c81c91",
    },
    content: "new comment",
    user: {
      $oid: "65e48dce6c335d3223c81c7f",
    },
    blog: {
      $oid: "65d1da6caf56e84319665936",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-03-03T14:49:56.102Z",
    },
    updatedAt: {
      $date: "2024-03-03T14:49:56.102Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e48e2a6c335d3223c81c97",
    },
    content: "threaded comment",
    user: {
      $oid: "65e48dce6c335d3223c81c7f",
    },
    blog: {
      $oid: "65d1da6caf56e84319665936",
    },
    parentComment: {
      $oid: "65e48e146c335d3223c81c91",
    },
    createdAt: {
      $date: "2024-03-03T14:50:18.543Z",
    },
    updatedAt: {
      $date: "2024-03-03T14:50:18.543Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e48e3c6c335d3223c81ca3",
    },
    content: "ty",
    user: {
      $oid: "65e48dce6c335d3223c81c7f",
    },
    blog: {
      $oid: "65d1da6caf56e84319665936",
    },
    parentComment: {
      $oid: "65e48e146c335d3223c81c91",
    },
    createdAt: {
      $date: "2024-03-03T14:50:36.375Z",
    },
    updatedAt: {
      $date: "2024-03-03T14:50:36.375Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e490176c335d3223c81d62",
    },
    content: "new comment",
    user: {
      $oid: "65e48fd86c335d3223c81d50",
    },
    blog: {
      $oid: "65d1da6caf56e84319665936",
    },
    parentComment: null,
    createdAt: {
      $date: "2024-03-03T14:58:31.671Z",
    },
    updatedAt: {
      $date: "2024-03-03T14:58:31.671Z",
    },
    __v: 0,
  },
];


export default comments_mock;