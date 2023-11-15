import ClipLoader from "react-spinners/ClipLoader";

const FullPageSpinner = () => {
  return (
    <div className="w-full h-full text-center flex justify-center items-center">
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

export default FullPageSpinner;
