import React from "react";

const commentsData = [
  {
    name: "Rajesh",
    text: "This is a great product!",
    replies: [],
  },
  {
    name: "Rajesh",
    text: "This is a great product!",
    replies: [],
  },
  {
    name: "Rajesh",
    text: "This is a great product!",
    replies: [
      {
        name: "Rajesh",
        text: "This is a great product!",
        replies: [
          {
            name: "Rajesh",
            text: "This is a great product!",
            replies: [
              {
                name: "Rajesh",
                text: "This is a great product!",
                replies: [
                  {
                    name: "Rajesh",
                    text: "This is a great product!",
                    replies: [
                      {
                        name: "Rajesh",
                        text: "This is a great product!",
                        replies: [
                          {
                            name: "Rajesh",
                            text: "This is a great product!",
                            replies: [
                              {
                                name: "Rajesh",
                                text: "This is a great product!",
                                replies: [
                                  {
                                    name: "Rajesh",
                                    text: "This is a great product!",
                                    replies: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rajesh",
    text: "This is a great product!",
    replies: [
      {
        name: "Rajesh",
        text: "This is a great product!",
        replies: [
          {
            name: "Rajesh",
            text: "This is a great product!",
            replies: [
              {
                name: "Rajesh",
                text: "This is a great product!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rajesh",
    text: "This is a great product!",
    replies: [
      {
        name: "Rajesh",
        text: "This is a great product!",
        replies: [
          {
            name: "Rajesh",
            text: "This is a great product!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Rajesh",
    text: "This is a great product!",
    replies: [
      {
        name: "Rajesh",
        text: "This is a great product!",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
        alt="user"
      />
      <div className="px-3">
        <p className="font-semibold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
