import React from "react";
import { IconProps } from "@/types/types";

interface SkillIconProps {
  component: React.ComponentType<IconProps>;
}

const SkillIcon: React.FC<SkillIconProps> = ({ component: Icon }) => {
  if (!Icon) {
    return null;
  }

  return <Icon className="size-8" />;
};

export default SkillIcon;
