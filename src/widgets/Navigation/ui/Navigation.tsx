'use client'
import cls from './Navigation.module.scss';
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

interface INavigationProps {
	className?: string;
}

export const Navigation = (props: INavigationProps) => {
	const {className} = props;
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClickLink = () => {
		setIsOpen(false)
	}

	return (
		<>
			<label className={classNames(cls.hamburger, {[cls.open]: isOpen})}>
				<input type={cls.checkbox}/>
				<svg viewBox="0 0 32 32" onClick={() => setIsOpen(state => !state)}>
					<path className={classNames(cls.line, {}, [cls.lineTopBottom])}
					      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
					<path className={cls.line} d="M7 16 27 16"></path>
				</svg>
			</label>
			<nav
				className={classNames(cls.Navigation, {[cls.openNav]: isOpen}, [className])}
			>

				<Link className={cls.link} href='/' onClick={handleClickLink}>
					Главная
				</Link>
				<Link className={cls.link} href='/services' onClick={handleClickLink}>
					Услуги
				</Link>
				<Link className={cls.link} href='/contacts' onClick={handleClickLink}>
					Контакты
				</Link>
			</nav>
		</>
	);
};
