import Header from "../dashboard/_components/Header";

const CreateCourseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default CreateCourseLayout;
