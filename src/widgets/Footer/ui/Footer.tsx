import classNames from "classnames";
import cls from './Footer.module.scss';

interface IFooterProps {
    className?: string;
}

export const Footer = (props: IFooterProps) => {
    const { className } = props;
    return (
        <footer
            className={classNames(cls.Footer, {}, [className])}
        >
            asd
        </footer>
    );
};
