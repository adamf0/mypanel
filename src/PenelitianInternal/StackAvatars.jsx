import { cn } from "../utils/cn";
import { v4 as uuid } from "uuid";

const getInitial = (name) => {
  const nameParts = name.trim().split(" ");
  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  return nameParts.length > 1
    ? nameParts[0].charAt(0).toUpperCase() +
        nameParts[1].charAt(0).toUpperCase()
    : "-";
};
const getRandomColor = () => {
  const colors = [
    "bg-red-800",
    "bg-green-800",
    "bg-purple-800",
    "bg-orange-800",
    "bg-blue-800",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

function avatarRender(list = []) {
  let content = [];

  list.slice(0, list.length > 3 ? 3 : list.length).map((item, index) => {
    content.push(
      <div
        key={uuid()}
        className={cn(
          "inline-flex items-center justify-center w-8 [aspect-ratio:1/1] text-md text-white rounded-[100vmax] -mr-3",
          getRandomColor()
        )}
      >
        {getInitial(item.nama)}
      </div>
    );
  });

  if (list.length > 3) {
    content.push(
      <span
        key="extra"
        className="inline-flex items-center justify-center w-8 [aspect-ratio:1/1] bg-white text-xs text-gray-800 font-semibold border-2 border-gray-200 rounded-full"
      >
        +{list.length - 3}
      </span>
    );
  }

  return content;
}

function StackAvatars({ list = [], message = null }) {
  if (message == null || message == "" || message == undefined) {
    message = "Belum ada data";
  }

  return list.length == 0 ? (
    <p className="grow">{message}</p>
  ) : (
    <div className="inline-flex">{avatarRender(list)}</div>
  );
}
export default StackAvatars;
