import { hamburger_menu } from "../assets";

//components
import TabsContainer from "../components/TabsContainer";

function HelpPage() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="pt-5 px-5">
          <img
            src={hamburger_menu}
            alt="menu"
            style={{ width: "31px", height: "20px" }}
            className="hover:cursor-pointer"
          />
          <h2
            className=" text-center text-primaryText my-5"
            style={{
              fontSize: "22px",
              fontFamily: "LatinkaMedium",
              marginBottom: "3rem",
            }}
          >
            Help
          </h2>
        </div>
        <TabsContainer />
      </div>
    </>
  );
}

export default HelpPage;
