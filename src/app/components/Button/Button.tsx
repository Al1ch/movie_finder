"use client";
import React, { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

type Props = ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  backgroundColor?: "primary" | "secondary" | "transparent";
  radius?: "rounded" | "normal";
};

const Button = ({
  children,
  size = "md",
  radius = "normal",
  backgroundColor,
  disabled = false,
  ...props
}: Props) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        styles.container,
        size && styles[size],
        radius && styles[radius],
        backgroundColor && styles[backgroundColor],
        { [styles.disabled]: disabled }
      )}
      {...props}
    >
      <span className={styles.link}>{children}</span>
    </button>
  );
};

export default Button;
