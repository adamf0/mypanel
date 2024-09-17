function BreadCrumbItem({ title, icon = null, isLast = false }) {
  return (
    <a href="#" className="grow inline-flex items-center gap-2">
      {icon}
      <p>{title}</p>
    </a>
  );
}

export default BreadCrumbItem;
