import { Carousel } from "antd";

import SectionTitle from "../../components/ui/SectionTitle";
import Container from "../../components/ui/Container";
import { useGetAllTestimonialsQuery } from "../../redux/features/user/testimonialsApi";

// const userFeedback = [
//   {
//     id: 1,
//     name: "John Doe",
//     image:
//       "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//     feedback:
//       "Great event! Enjoyed every moment. The organizers did an excellent job of creating a vibrant atmosphere and managing everything smoothly. Looking forward to future events!",
//     jobType: "Software Engineer",
//   },
//   {
//     id: 2,
//     name: "Alice Smith",
//     image:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//     feedback:
//       "Fantastic organization! Would love to attend again. The attention to detail was impressive, and the event offered a perfect blend of entertainment and networking opportunities. Kudos to the entire team!",
//     jobType: "Marketing Specialist",
//   },
//   {
//     id: 3,
//     name: "Eva Johnson",
//     image:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
//     feedback:
//       "The event exceeded my expectations! Well done. From the engaging speakers to the interactive sessions, every aspect was meticulously planned. I appreciate the effort that went into making this event memorable.",
//     jobType: "Event Planner",
//   },
//   {
//     id: 4,
//     name: "Michael Brown",
//     image:
//       "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//     feedback:
//       "Excellent event management. Kudos to the team! The seamless coordination and thoughtful planning were evident throughout the event. It's clear that the organizers are passionate about delivering top-notch experiences.",
//     jobType: "Event Coordinator",
//   },
//   {
//     id: 5,
//     name: "Emily Davis",
//     image:
//       "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//     feedback:
//       "Impressive event! Looking forward to the next one. The variety of activities and engaging content made the event a standout experience. It's evident that a lot of thought and effort went into the planning.",
//     jobType: "Public Relations Specialist",
//   },
//   {
//     id: 6,
//     name: "Daniel White",
//     image:
//       "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//     feedback:
//       "Well-organized and enjoyable event experience. The event flowed seamlessly from one segment to another, keeping attendees engaged and entertained. Kudos to the organizers for their hard work!",
//     jobType: "Technical Support Specialist",
//   },
//   {
//     id: 7,
//     name: "Olivia Martinez",
//     image:
//       "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//     feedback:
//       "The event atmosphere was fantastic. Thumbs up! The lively ambiance and positive energy at the event were infectious. It was a joy to be a part of such a well-executed and enjoyable gathering.",
//     jobType: "Event Attendee",
//   },
//   {
//     id: 8,
//     name: "William Taylor",
//     image:
//       "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
//     feedback:
//       "Thank you for a memorable event. Truly remarkable! The event left a lasting impression, and I appreciate the effort that went into creating a memorable experience. Looking forward to future events!",
//     jobType: "Event Participant",
//   },
// ];

type TTestimonialsData = {
  description: string;
  name: string;
  title: string;
  _id: string;
};

const Testimonials = () => {
  const { data: testimonialsData } = useGetAllTestimonialsQuery(undefined);

  console.log(testimonialsData?.data);

  return (
    <Container className="mt-40 mb-10">
      <div>
        <SectionTitle heading="Testimonials" />
      </div>

      <Carousel autoplay>
        {testimonialsData?.data?.map((items: TTestimonialsData) => (
          <div
            key={items._id}
            className="primary-bg-gray rounded-lg bg-opacity-45 p-10 text-center w-full"
          >
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              className="rounded-full size-48 md:size-64 flex mx-auto"
              alt=""
            />
            <p className="text-3xl md:text-5xl font-semibold ">{items.name}</p>
            <p className="text-sm md:text-lg text-gray-500 mt-4 w-[40ch] md:w-[80ch] mx-auto">
              {items.description}
            </p>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
