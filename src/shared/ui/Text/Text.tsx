import React, { ReactNode } from "react";
import cls from './Text.module.scss';
import classNames from "classnames";

export enum TextSize {
    S = 'small',
    M = 'medium',
    L = 'large',
    XL = 'xl',
    XXL = 'xxl',
}

export enum AsTypes {
    P = 'p',
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
}

export enum TextColor {
    PRIMARY = 'primaryColor',
    SECONDARY = 'secondaryColor',
    INVERTED = 'invertedColor',
}

interface ITextProps {
    className?: string;
	children: ReactNode | string;
    size?: TextSize;
    as?: AsTypes;
    color?: TextColor;
}

export const Text = (props: ITextProps) => {
    const {
        className,
        children,
        size = TextSize.M,
        as = AsTypes.P,
        color = TextColor.PRIMARY
    } = props;

    const Component = as;

    return (
        <Component
            className={classNames(cls.Text, {}, [className, cls[size], cls[color]])}
        >
	        {children}
        </Component>
    );
};
