import BreadcrumbItem from "./BreadCrumbItem";
import { v4 as uuid } from "uuid";

function BreadCrumb({ children, list = [], message = null }) {
  if (message == null || message == "" || message == undefined) {
    message = "Belum ada data";
  }
  return (
    <div className="flex">
      <ul className="w-full flex flex-col">
        {list.length == 0
          ? message
          : list.map((item, index) => (
              <BreadCrumb.Item
                key={uuid()}
                title={item.text}
                icon={item.icon}
                isLast={index != list.length - 1}
              />
            ))}
      </ul>
      {children}
    </div>
  );
}

BreadCrumb.Item = BreadcrumbItem;

export default BreadCrumb;
