import cls from './HeroSection.module.scss';
import classNames from "classnames";
import { HeroText } from "@/pages-flat/HomePage/Sections/Hero/HeroText";
import { HeroImages } from "@/pages-flat/HomePage/Sections/Hero/HeroImages";

interface IHeroSectionProps {
    className?: string;
}

export const HeroSection = (props: IHeroSectionProps) => {
    const { className } = props;
    return (
            <div
                className={classNames(cls.HeroSection, {}, [className])}
            >
                <HeroText/>
                <HeroImages/>
            </div>
    );
};
