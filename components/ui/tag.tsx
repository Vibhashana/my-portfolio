import { IconType } from "react-icons/lib";

const Tag = ({ text, icon: Icon }: { text: string; icon?: IconType }) => {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-xs text-primary/80 transition-transform hover:scale-110">
      {Icon && <Icon className="h-4 w-4" />}
      {text}
    </span>
  );
};

export default Tag;
