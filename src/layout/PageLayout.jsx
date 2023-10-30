const PageLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen w-screen">
      <div className="min-h-screen w-screen sm:min-h-full sm:h-[calc(100vh-2rem)] sm:w-[calc(100vw-2rem)] overflow-hidden bg-[#2d3439]">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
