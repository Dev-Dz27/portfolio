import React from "react";

interface TooltipProps {
  name: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ name, children }) => {
  const [visible, setVisible] = React.useState(false);

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {visible && (
        <div className="relative p-1 transition-all ease-linear">
          <span className="text-sm overflow-visible">{name}</span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
