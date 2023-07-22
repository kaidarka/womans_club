import classNames from "classnames";
import cls from './styles.module.scss';
import { HeroSection } from "@/pages-flat/HomePage/Sections/Hero/HeroSection";
import { Section } from "@/shared/ui/Section/Section";

export const HomePage = () => {
	return (
		<div
			className={classNames(cls.HomePage, {}, [])}
		>
			<Section>
				<HeroSection/>
			</Section>
		</div>
	);
};
