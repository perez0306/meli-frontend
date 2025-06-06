import React, { useEffect, useRef } from 'react';
import styles from './index.module.css';
import { MenuOptionsProps } from '@/types';

const MenuOptions: React.FC<MenuOptionsProps> = ({
  open,
  options,
  selected,
  onSelect,
  onClose,
  anchorRef,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    if (open) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [open, onClose, anchorRef]);

  if (!open) return null;

  return (
    <div className={styles.menuOptions} ref={menuRef}>
      {options.map(opt => (
        <div
          key={opt.value}
          className={`${styles.menuOption} ${opt.value === selected ? styles.selected : ''}`}
          onClick={() => onSelect(opt.value)}
        >
          {opt.label}
        </div>
      ))}
    </div>
  );
};

export default MenuOptions;
