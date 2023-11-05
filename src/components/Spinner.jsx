import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  return (
    <div className="w-full text-center h-52 flex justify-center items-center">
      <ClipLoader
        color={"#fff"}
        loading={true}
        cssOverride={{
          display: "block",
          margin: "0 auto",
          borderColor: "##42484D",
        }}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
