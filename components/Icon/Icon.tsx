import React from "react";

import { ReactComponent as CleaningSpray } from "@/assets/icons/cleaning-spray.svg";
import { ReactComponent as MopSvg } from "@/assets/icons/mop.svg";
import { ReactComponent as SecurityBadgeSvg } from "@/assets/icons/security-badge.svg";
import { ReactComponent as CleaningMenSvg } from "@/assets/icons/cleaning-men.svg";
import { ReactComponent as MenWithCleanerSvg } from "@/assets/icons/men-with-vaccum.svg";
import { ReactComponent as GlassCleanSvg } from "@/assets/icons/glass-clean.svg";
import { ReactComponent as VacuumCleanerSvg } from "@/assets/icons/vacuum-cleaner.svg";
import { ReactComponent as SprayBottleSvg } from "@/assets/icons/spray-bottle.svg";
import { ReactComponent as CarpetSvg } from "@/assets/icons/carpet.svg";
import { ReactComponent as BuildingSvg } from "@/assets/icons/building.svg";
import { ReactComponent as ClockSvg } from "@/assets/icons/clock.svg";
import { ReactComponent as BroomFillSvg } from "@/assets/icons/broom-fill.svg";
import { ReactComponent as MenuSvg } from "@/assets/icons/menu.svg";
import { ReactComponent as CrossSvg } from "@/assets/icons/cross.svg";
import { ReactComponent as ArrowSvg } from "@/assets/icons/right-arrow.svg";

type IconSvgComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

type IconType = {
  cleaningSpray: IconSvgComponent;
  mop: IconSvgComponent;
  securityBadge: IconSvgComponent;
  cleaningMen: IconSvgComponent;
  menWithCleaner: IconSvgComponent;
  glassClean: IconSvgComponent;
  vacuumCleaner: IconSvgComponent;
  sprayBottle: IconSvgComponent;
  carpet: IconSvgComponent;
  building: IconSvgComponent;
  clock: IconSvgComponent;
  broomFill: IconSvgComponent;
  menu: IconSvgComponent;
  cross: IconSvgComponent;
  arrow: IconSvgComponent;
};

// Mapping SVG component to Icon
export const ICON_MAPPING: IconType = {
  cleaningSpray: CleaningSpray,
  mop: MopSvg,
  securityBadge: SecurityBadgeSvg,
  cleaningMen: CleaningMenSvg,
  menWithCleaner: MenWithCleanerSvg,
  glassClean: GlassCleanSvg,
  vacuumCleaner: VacuumCleanerSvg,
  sprayBottle: SprayBottleSvg,
  carpet: CarpetSvg,
  building: BuildingSvg,
  clock: ClockSvg,
  broomFill: BroomFillSvg,
  menu: MenuSvg,
  cross: CrossSvg,
  arrow: ArrowSvg,
};

export type IconTypeProp =
  | "cleaningSpray"
  | "mop"
  | "securityBadge"
  | "cleaningMen"
  | "menWithCleaner"
  | "glassClean"
  | "vacuumCleaner"
  | "sprayBottle"
  | "carpet"
  | "building"
  | "clock"
  | "broomFill"
  | "menu"
  | "cross"
  | "arrow";

export type IconSizes =
  | 8
  | 16
  | 18
  | 20
  | 24
  | 26
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80;

export type IconProps = {
  ariaHidden?: boolean;
  icon: IconTypeProp;
  rotation?: number;
  size?: IconSizes;
  className?: string;
  title?: string;
  ariaLabel?: string;
  role?: string;
};

const Icon = ({
  ariaHidden = true,
  className,
  icon,
  ariaLabel,
  role,
  size = 24,
  rotation,
}: IconProps) => {
  const CodePoint = ICON_MAPPING[icon];
  if (!CodePoint) {
    return null;
  }

  const rotationDeg = rotation ? `rotate-[${rotation}deg]` : "";
  const classes = className ?? "";

  return (
    <CodePoint
      style={{ height: `${size}px`, width: `${size}px` }}
      className={`transition-transform duration-150 ease-linear ${rotationDeg} ${classes}`}
      focusable={false}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      role={role}
    />
  );
};

Icon.displayName = "Icon";

export default Icon;
