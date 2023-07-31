import cls from './Header.module.scss';
import classNames from "classnames";
import Logo from "@/shared/assets/icon/logo.svg";
import Image from "next/image";
import { Navigation } from "@/widgets/Navigation/ui/Navigation";
import Link from "next/link";
import { Section } from "@/shared/ui/Section/Section";

interface IHeaderProps {
    className?: string;
}

export const Header = (props: IHeaderProps) => {
    const { className } = props;
    // TODO add margin
    return (
        <Section>
            <header
                className={classNames(cls.Header, {}, [className])}
            >
                <Link href='/'>
                    <Image className={cls.logo} height={80} src={Logo} alt=''/>
                </Link>
                <Navigation/>
            </header>
        </Section>
    );
};
