import cls from './Button.module.scss';
import classNames from "classnames";

export enum ButtonType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface IButtonProps {
    className?: string;
	children: string;
    type?: ButtonType;
}

export const Button = (props: IButtonProps) => {
    const { className, children, type = ButtonType.PRIMARY } = props;
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[type]])}
        >
	        {children}
        </button>
    );
};
