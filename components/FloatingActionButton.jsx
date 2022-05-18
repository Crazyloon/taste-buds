import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const FloatingActionButton = ({meals}) => {
  return (
    <Link href={{
        pathname: "/poll/create",
        query: { ...meals.filter(m => m.selected).map(m => m.id) }
      }}>
      <button className="fab fab-round">
        <FontAwesomeIcon
          icon={faChartSimple}
          size={"2x"}
          className="fab-round"
        />
      </button>
    </Link>
  );
};

export default FloatingActionButton;
