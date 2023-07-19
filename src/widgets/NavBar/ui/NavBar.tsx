import cls from './NavBar.module.scss';
import classNames from "classnames";
import Link from "next/link";

interface INavBarProps {
    className?: string;
}

export const NavBar = (props: INavBarProps) => {
    const { className } = props;
    return (
        <nav
            className={classNames(cls.NavBar, {}, [className])}
        >
            <Link href='/'>
                Главная
            </Link>
            <Link href='/services'>
                услуги
            </Link>
            <Link href='/contacts'>
                контакты
            </Link>
        </nav>
    );
};
