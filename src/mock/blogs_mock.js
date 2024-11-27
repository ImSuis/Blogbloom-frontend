const blogs_mock = [
  {
    _id: {
      $oid: "65aab7f170d19b5e86a209cf",
    },
    title: "Title",
    content: "THis sdfoj dfj ",
    user: {
      $oid: "65aaa2a78d7c6a18a33b366e",
    },
    createdAt: {
      $date: "2024-01-19T17:57:05.191Z",
    },
    updatedAt: {
      $date: "2024-03-03T05:49:40.439Z",
    },
    __v: 6,
    comments: [
      {
        $oid: "65d20571af56e84319665dd8",
      },
      {
        $oid: "65d2057aaf56e84319665dde",
      },
      {
        $oid: "65d206a6af56e84319665df8",
      },
      {
        $oid: "65d9bd72f57cee25d3cf077f",
      },
      {
        $oid: "65d9c29ae937ce9581a16c64",
      },
      {
        $oid: "65e40f749a8df287663c1738",
      },
    ],
  },
  {
    _id: {
      $oid: "65ab3a86c09eb636f61496c7",
    },
    title: "New",
    content: "http://localhost:3000/editor\r\n",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    createdAt: {
      $date: "2024-01-20T03:14:14.889Z",
    },
    updatedAt: {
      $date: "2024-02-26T10:16:45.731Z",
    },
    __v: 7,
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1708519505/blogs/tl44fkaan3dn0ob98xng.png",
    comments: [
      {
        $oid: "65d5f0600ec04e5afd29897b",
      },
      {
        $oid: "65d5f08d0ec04e5afd298995",
      },
      {
        $oid: "65d5f08d0ec04e5afd29899b",
      },
      {
        $oid: "65d5f0950ec04e5afd2989a1",
      },
      {
        $oid: "65d5f09e0ec04e5afd2989af",
      },
      {
        $oid: "65dc650d9510ce89b557b685",
      },
    ],
  },
  {
    _id: {
      $oid: "65ab7c052b2ddb513dcbd588",
    },
    title: "d",
    content: "sd",
    user: {
      $oid: "65aaa00708542d98cd85bfdf",
    },
    createdAt: {
      $date: "2024-01-20T07:53:41.696Z",
    },
    updatedAt: {
      $date: "2024-01-20T07:53:41.696Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65abd68916e264938d3130bf",
    },
    title: "Update",
    content: "update",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    createdAt: {
      $date: "2024-01-20T14:19:53.471Z",
    },
    updatedAt: {
      $date: "2024-02-21T09:11:01.326Z",
    },
    __v: 1,
    comments: [],
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1708506660/blogs/puhyvzo13s145jgfhi1e.png",
  },
  {
    _id: {
      $oid: "65af22afeef234244eee6acb",
    },
    title: "img",
    content: "img",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blogImageUrl:
      "https://th.bing.com/th/id/OIP.wMzAuHDcivlTPKsZEJtA3QHaEo?rs=1&pid=ImgDetMain",
    createdAt: {
      $date: "2024-01-23T02:21:35.576Z",
    },
    updatedAt: {
      $date: "2024-01-23T02:21:35.576Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65b098b2d36f1a067f6cadab",
    },
    title: "test",
    content: "test",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1706072241/blogs/pu7dzpejthgboaoyd8zm.png",
    createdAt: {
      $date: "2024-01-24T04:57:22.553Z",
    },
    updatedAt: {
      $date: "2024-01-24T04:57:22.553Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65b09935d36f1a067f6cadad",
    },
    title: "testnew",
    content: "testnew",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1706072373/blogs/xkgrt0ab36gwbypykdez.png",
    createdAt: {
      $date: "2024-01-24T04:59:33.609Z",
    },
    updatedAt: {
      $date: "2024-01-24T04:59:33.609Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65b5224746f17acd581b2d0e",
    },
    title: "testnewmm",
    content: "testnew",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1706369607/blogs/cgydwpj3lfrt7f8fsuwo.png",
    createdAt: {
      $date: "2024-01-27T15:33:27.680Z",
    },
    updatedAt: {
      $date: "2024-01-27T15:33:27.680Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65b5256846f17acd581b2d2e",
    },
    title: "tes",
    content: "testnew",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1706370407/blogs/l1jyjzidsao8vnwgbh35.png",
    createdAt: {
      $date: "2024-01-27T15:46:48.316Z",
    },
    updatedAt: {
      $date: "2024-01-27T15:46:48.316Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65c042670247df6539538240",
    },
    title: "tes",
    content: "testnew",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1707098726/blogs/vy3guuo05gge7dc4qjys.png",
    createdAt: {
      $date: "2024-02-05T02:05:27.597Z",
    },
    updatedAt: {
      $date: "2024-02-05T02:05:27.597Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65c044980247df6539538246",
    },
    title: "iuh  s",
    content: "srtdy",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1707099287/blogs/bjwe3glhtk4gbrglbt0h.png",
    createdAt: {
      $date: "2024-02-05T02:14:48.514Z",
    },
    updatedAt: {
      $date: "2024-02-05T02:14:48.514Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65c0449b0247df653953824c",
    },
    title: "iuh  s",
    content: "srtdy",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1707099291/blogs/zdfwdfqb4r1oivzkjhvx.png",
    createdAt: {
      $date: "2024-02-05T02:14:51.861Z",
    },
    updatedAt: {
      $date: "2024-02-05T02:14:51.861Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65ccbe5bf475909bb7e4181e",
    },
    title: "wer",
    content: "wer",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1707916891/blogs/utadijdiykfkeq0ixgqq.png",
    createdAt: {
      $date: "2024-02-14T13:21:31.995Z",
    },
    updatedAt: {
      $date: "2024-02-14T13:21:31.995Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65ccbe89f475909bb7e41829",
    },
    title: "tsets",
    content: "ses",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1707916936/blogs/trbj6zs7sbggmxoctesm.png",
    createdAt: {
      $date: "2024-02-14T13:22:17.358Z",
    },
    updatedAt: {
      $date: "2024-02-14T13:22:17.358Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65ccc379ad74f83f5894360c",
    },
    title: "comment",
    content: "comment",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1707918200/blogs/shmktjdtju2c4u1kjkpz.png",
    comments: [
      {
        $oid: "65ccc4b8ad74f83f5894360f",
      },
    ],
    createdAt: {
      $date: "2024-02-14T13:43:21.425Z",
    },
    updatedAt: {
      $date: "2024-02-14T13:48:40.436Z",
    },
    __v: 1,
  },
  {
    _id: {
      $oid: "65ccd0e9632b8a1da09fc51f",
    },
    title: "nest comment",
    content: "nest comment",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1707921641/blogs/yorevpluocyruaei4oip.png",
    comments: [
      {
        $oid: "65ccd1e2632b8a1da09fc526",
      },
      {
        $oid: "65ccd237632b8a1da09fc52a",
      },
      {
        $oid: "65ccd319632b8a1da09fc52e",
      },
      {
        $oid: "65cce321632b8a1da09fc532",
      },
      {
        $oid: "65cce3d7f70732241b28b2a0",
      },
      {
        $oid: "65cf5e102da71b3bc76488c4",
      },
      {
        $oid: "65cf5f7bb639126b529677a2",
      },
      {
        $oid: "65d1ea0caf56e84319665b22",
      },
      {
        $oid: "65d1ebf3af56e84319665b8e",
      },
      {
        $oid: "65d21202a0b8259751772dd6",
      },
      {
        $oid: "65d214aaa0b8259751772e77",
      },
      {
        $oid: "65d2162da0b8259751772efb",
      },
      {
        $oid: "65d21635a0b8259751772f01",
      },
      {
        $oid: "65d21671a0b8259751772f2a",
      },
      {
        $oid: "65d21676a0b8259751772f30",
      },
      {
        $oid: "65d23d2f138b76171deb423d",
      },
    ],
    createdAt: {
      $date: "2024-02-14T14:40:41.905Z",
    },
    updatedAt: {
      $date: "2024-02-18T17:23:59.315Z",
    },
    __v: 16,
  },
  {
    _id: {
      $oid: "65d1da6caf56e84319665936",
    },
    title: "Lorem mmm",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Feugiat vivamus at augue eget arcu dictum varius duis at. Duis at consectetur lorem donec massa sapien faucibus et. Lobortis mattis aliquam faucibus purus in. Est velit egestas dui id ornare arcu. Nec nam aliquam sem et tortor consequat. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Aliquam malesuada bibendum arcu vitae elementum. Elementum facilisis leo vel fringilla est ullamcorper. Donec et odio pellentesque diam volutpat. Arcu ac tortor dignissim convallis aenean et tortor at.\r\n\r\nSit amet porttitor eget dolor. At risus viverra adipiscing at in tellus integer. Praesent tristique magna sit amet purus gravida quis blandit turpis. Augue neque gravida in fermentum et sollicitudin ac orci. Tempus quam pellentesque nec nam aliquam sem et. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Et tortor consequat id porta nibh venenatis cras sed. Id diam maecenas ultricies mi eget. Scelerisque varius morbi enim nunc faucibus. Sed turpis tincidunt id aliquet risus feugiat in. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Est ultricies integer quis auctor elit sed vulputate mi sit. Molestie nunc non blandit massa enim nec dui nunc mattis. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Habitasse platea dictumst quisque sagittis purus sit amet.\r\n\r\nA erat nam at lectus urna duis convallis convallis. Amet massa vitae tortor condimentum lacinia quis vel. Viverra maecenas accumsan lacus vel facilisis volutpat est. Urna molestie at elementum eu facilisis sed. Cursus risus at ultrices mi tempus. Sed vulputate mi sit amet mauris commodo quis imperdiet. Id faucibus nisl tincidunt eget nullam non nisi. In nisl nisi scelerisque eu ultrices. Donec ultrices tincidunt arcu non sodales neque sodales. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna.\r\n\r\nMorbi tincidunt ornare massa eget. Fermentum odio eu feugiat pretium nibh ipsum consequat. Sed euismod nisi porta lorem mollis. Eleifend quam adipiscing vitae proin sagittis nisl. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Enim lobortis scelerisque fermentum dui faucibus in ornare. In metus vulputate eu scelerisque felis. Scelerisque purus semper eget duis at tellus. Massa tempor nec feugiat nisl pretium. Eu facilisis sed odio morbi quis. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Vel orci porta non pulvinar. Euismod lacinia at quis risus. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Eleifend donec pretium vulputate sapien nec sagittis aliquam.\r\n\r\nNetus et malesuada fames ac turpis. Fringilla phasellus faucibus scelerisque eleifend. Eget arcu dictum varius duis at consectetur. In iaculis nunc sed augue lacus viverra vitae. Erat velit scelerisque in dictum non consectetur a erat. Tellus molestie nunc non blandit massa enim. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Duis tristique sollicitudin nibh sit amet commodo nulla. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Tristique risus nec feugiat in fermentum posuere urna nec. Elit ullamcorper dignissim cras tincidunt. Rhoncus dolor purus non enim praesent elementum facilisis leo. Amet est placerat in egestas erat imperdiet sed. Diam vel quam elementum pulvinar. Sem fringilla ut morbi tincidunt.",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1708251756/blogs/vsb59tkmtgbbmfzlghhu.png",
    comments: [
      {
        $oid: "65d203d8af56e84319665db8",
      },
      {
        $oid: "65d203e1af56e84319665dbe",
      },
      {
        $oid: "65d206bbaf56e84319665e0a",
      },
      {
        $oid: "65d5c1ffa13a9ecef874b41c",
      },
      {
        $oid: "65db21ae6c49234469be6e0e",
      },
      {
        $oid: "65e48e146c335d3223c81c91",
      },
      {
        $oid: "65e48e2a6c335d3223c81c97",
      },
      {
        $oid: "65e48e356c335d3223c81c9d",
      },
      {
        $oid: "65e48e3c6c335d3223c81ca3",
      },
      {
        $oid: "65e490176c335d3223c81d62",
      },
      {
        $oid: "65e490286c335d3223c81d68",
      },
    ],
    createdAt: {
      $date: "2024-02-18T10:22:36.752Z",
    },
    updatedAt: {
      $date: "2024-03-03T14:58:48.962Z",
    },
    __v: 11,
  },
  {
    _id: {
      $oid: "65d5bd62b46902bfacdc81ff",
    },
    title: "hello",
    content: "nest comment",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1708506465/blogs/kxlkd9ylxx8zlpxewi1p.png",
    comments: [],
    createdAt: {
      $date: "2024-02-21T09:07:46.361Z",
    },
    updatedAt: {
      $date: "2024-02-21T09:07:46.361Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d5c6fba13a9ecef874b4ff",
    },
    title: "fsadfas",
    content: "dasfa",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1708508922/blogs/ommcekhnjzezuzcmn1cx.png",
    comments: [],
    createdAt: {
      $date: "2024-02-21T09:48:43.141Z",
    },
    updatedAt: {
      $date: "2024-02-21T09:48:43.141Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65d61788a635adade70eddb9",
    },
    title: "safdfsadff",
    content: "safas",
    user: {
      $oid: "65ab6199858b11aef1ee519e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1708529578/blogs/bcsbgqw5jgms7klvmknq.png",
    comments: [],
    createdAt: {
      $date: "2024-02-21T15:32:24.915Z",
    },
    updatedAt: {
      $date: "2024-02-21T15:32:59.095Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65db217b6c49234469be6da9",
    },
    title: "dsa",
    content: "sad",
    user: {
      $oid: "65d35d7688276f03e897b7e3",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1708859770/blogs/enhlwke1zlpfozhkfqak.png",
    comments: [
      {
        $oid: "65db21856c49234469be6dc0",
      },
      {
        $oid: "65db21896c49234469be6dc6",
      },
    ],
    createdAt: {
      $date: "2024-02-25T11:16:11.521Z",
    },
    updatedAt: {
      $date: "2024-02-25T11:16:26.114Z",
    },
    __v: 2,
  },
  {
    _id: {
      $oid: "65db55879e1dee7cd9ccbe08",
    },
    title: "afd",
    content: "sad",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1708873094/blogs/ri8n9mt7ujb4afble5nc.png",
    comments: [
      {
        $oid: "65dca056c301d3644fb48f39",
      },
    ],
    createdAt: {
      $date: "2024-02-25T14:58:15.391Z",
    },
    updatedAt: {
      $date: "2024-02-26T14:29:42.647Z",
    },
    __v: 1,
  },
  {
    _id: {
      $oid: "65e1d716ca6e229cb205c2ea",
    },
    title: "efe",
    content: "feee",
    user: {
      $oid: "65aaa2a78d7c6a18a33b366e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1709299477/blogs/x0isz3acynqf3ecemuir.png",
    comments: [],
    createdAt: {
      $date: "2024-03-01T13:24:38.366Z",
    },
    updatedAt: {
      $date: "2024-03-01T13:24:38.366Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e1d9a9ca6e229cb205c2f3",
    },
    title: "title",
    content: "content",
    user: {
      $oid: "65aaa2a78d7c6a18a33b366e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1709300136/blogs/imyrwvjyhwzxwazkarpj.png",
    comments: [],
    createdAt: {
      $date: "2024-03-01T13:35:37.705Z",
    },
    updatedAt: {
      $date: "2024-03-01T13:35:37.705Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e1dac7ca6e229cb205c2f5",
    },
    title: "fdsa",
    content: "fsda",
    user: {
      $oid: "65aaa2a78d7c6a18a33b366e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1709300422/blogs/wiue75mxji8bopguswi0.png",
    comments: [],
    createdAt: {
      $date: "2024-03-01T13:40:23.101Z",
    },
    updatedAt: {
      $date: "2024-03-01T13:40:23.101Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e1f23cca6e229cb205c2fe",
    },
    title: "hb",
    content: "hb",
    user: {
      $oid: "65aaa2a78d7c6a18a33b366e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1709306427/blogs/skndrorbyymca0mjwamr.png",
    comments: [],
    createdAt: {
      $date: "2024-03-01T15:20:28.139Z",
    },
    updatedAt: {
      $date: "2024-03-01T15:20:28.139Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e20195ca6e229cb205c314",
    },
    title: "title",
    content: "content",
    user: {
      $oid: "65aaa2a78d7c6a18a33b366e",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1709310356/blogs/nslvf1tpvtuwzq1nnkay.png",
    comments: [],
    createdAt: {
      $date: "2024-03-01T16:25:57.054Z",
    },
    updatedAt: {
      $date: "2024-03-01T16:25:57.054Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e40e7c9a8df287663c16fc",
    },
    title: "new",
    content: "new",
    user: {
      $oid: "658795af7db146b65e790ba8",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1709444732/blogs/rbf5ted9x6adu4dp1q3p.png",
    comments: [],
    createdAt: {
      $date: "2024-03-03T05:45:32.776Z",
    },
    updatedAt: {
      $date: "2024-03-03T05:45:32.776Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e44f794951d0cb94ee6a5c",
    },
    title: "mm",
    content: "lm",
    user: {
      $oid: "65aab8bf70d19b5e86a209d2",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1709461368/blogs/rks3elrbmjfbrswdaplk.jpg",
    comments: [],
    createdAt: {
      $date: "2024-03-03T10:22:49.469Z",
    },
    updatedAt: {
      $date: "2024-03-03T10:22:49.469Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "65e47c4aa201bd07dd52e954",
    },
    title: "dasa",
    content: "das",
    user: {
      $oid: "65db3cc4fc67c818307036fc",
    },
    blogImageUrl:
      "https://res.cloudinary.com/de7svewsu/image/upload/v1709472874/blogs/baooouurdd2ihdfmflf3.jpg",
    comments: [
      {
        $oid: "65e47c54a201bd07dd52e95e",
      },
      {
        $oid: "65e47c5aa201bd07dd52e964",
      },
      {
        $oid: "65e48a3a49033fd8d0908c95",
      },
      {
        $oid: "65e48a5749033fd8d0908c9b",
      },
      {
        $oid: "65e48a6249033fd8d0908ca1",
      },
      {
        $oid: "65e48a6649033fd8d0908ca7",
      },
    ],
    createdAt: {
      $date: "2024-03-03T13:34:02.897Z",
    },
    updatedAt: {
      $date: "2024-03-03T14:34:14.506Z",
    },
    __v: 6,
  },
];

export default blogs_mock;
