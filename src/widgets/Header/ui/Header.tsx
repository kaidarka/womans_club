import cls from './Header.module.scss';
import classNames from "classnames";
import Logo from "/public/logo.svg";
import Image from "next/image";
import { Navigation } from "@/widgets/Navigation/ui/Navigation";
import Link from "next/link";

interface IHeaderProps {
    className?: string;
}

export const Header = (props: IHeaderProps) => {
    const { className } = props;
    return (
        <header
            className={classNames(cls.Header, {}, [className])}
        >
            <Link href='/'>
                <Image className={cls.logo} height={80} src={Logo} alt=''/>
            </Link>
           	<Navigation/>
        </header>
    );
};
