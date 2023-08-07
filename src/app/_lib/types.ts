export type User = {
  name: string;
  email: string;
  _id: string;
};

export type Post = {
  _id: string;
  title: string;
  imageUri: string;
  tags: string[];
  createdBy: User;
  likes: number;
  comments: {
    comment?: string;
    commentBy?: User;
    createdAt?: Date;
    updatedAt?: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
};

export type Posts = Post[];
