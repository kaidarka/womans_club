import cls from './Section.module.scss';
import classNames from "classnames";
import { ReactNode } from "react";

interface ISectionProps {
    className?: string;
	children: ReactNode;
}

export const Section = (props: ISectionProps) => {
    const { className, children } = props;
    return (
        <div
            className={classNames(cls.Section, {}, [className])}
        >
	        {children}
        </div>
    );
};
