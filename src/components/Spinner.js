import loader from "./loading_buffer.gif";
const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Spinner;
