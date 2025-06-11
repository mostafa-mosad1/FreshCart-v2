import { ThreeDots } from "react-loader-spinner";

interface Iprops {}
function LoaderButton({}: Iprops) {
  return (
    <>
      <ThreeDots
        visible={true}
        height="40"
        width="40"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </>
  );
}

export default LoaderButton;
