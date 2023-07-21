import cls from './Navigation.module.scss';
import classNames from "classnames";
import Link from "next/link";

interface INavigationProps {
    className?: string;
}

export const Navigation = (props: INavigationProps) => {
    const { className } = props;
    return (
        <nav
            className={classNames(cls.Navigation, {}, [className])}
        >
	        <Link className={cls.link} href='/'>
		        Главная
	        </Link>
	        <Link className={cls.link} href='/services'>
		        Услуги
	        </Link>
	        <Link className={cls.link} href='/contacts'>
		        Контакты
	        </Link>
        </nav>
    );
};
