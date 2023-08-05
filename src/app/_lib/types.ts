export type Posts = {
  _id: string;
  title: string;
  imageUri: string;
  tags: string[];
  createdBy: string;
  comments: {
    comment?: string;
    commentBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}[];
