import React from "react";
import MyForm from "../../components/form/MyForm";
import MyInput from "../../components/form/MyInput";
import MyTextArea from "../../components/form/MyTextArea";
import Container from "../../components/ui/Container";
import { FieldValues } from "react-hook-form";
import {
  useAddCommentsMutation,
  useGetAllCommentsQuery,
} from "../../redux/features/user/communityApi";
import { toast } from "sonner";
import { TResponse } from "../../types/global";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { useTheme } from "../../context/ThemeContaxt";

type TCommentsData = {
  _id?: string;
  name: string;
  comment: string;
};

const Community = () => {
  const [addComments] = useAddCommentsMutation();
  const { data: commentsData } = useGetAllCommentsQuery(undefined);

  const { theme } = useTheme();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Posting....");

    const commentData = {
      name: data.name,
      comment: data.comment,
    };

    try {
      const res = (await addComments(commentData)) as TResponse<TCommentsData>;
      console.log(res);

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Comment created", { id: toastId });
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <div className="mt-40 mb-10">
      <Container>
        <MyForm onSubmit={onSubmit}>
          <MyInput name="name" label="Name" type="text" />
          <MyTextArea
            name="comment"
            label="Comments"
            placeholder="Write your gratitude comment here..."
          />

          <button className="custom-btn" type="submit">
            Comment
          </button>
        </MyForm>
        <div className="bg-gray-300 p-4 mt-10 rounded-lg">
          {commentsData?.data?.map((comment: TCommentsData) => (
            <div
              key={comment._id}
              className="md:flex justify-between items-center bg-gray-100 rounded-md mt-2 md:p-4 p-2"
              style={{ background: theme.background, color: theme.text }}
            >
              <div>
                <p className="text-xl mb-2">{comment.name}</p>
                <p className="flex gap-4">{comment.comment}</p>
              </div>
              <div className="flex justify-end items-center space-x-2 md:space-x-4 md:text-2xl text-xl md:mt-0 mt-2">
                <span>
                  <LikeOutlined />
                </span>
                <span>
                  <DislikeOutlined />
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Community;
