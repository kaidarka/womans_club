import cls from './HeroSection.module.scss';
import classNames from "classnames";
import { AsTypes, Text, TextColor, TextSize } from "@/shared/ui/Text/Text";

interface ITextInfoProps {
	className?: string;
}

export const HeroText = (props: ITextInfoProps) => {
	const {className} = props;
	return (
		<div
			className={classNames(cls.HeroText, {}, [className])}
		>
			<div>
				<Text as={AsTypes.H1} size={TextSize.XXL} color={TextColor.PRIMARY}>
					Клуб женщин предпринимателей
				</Text>
				<Text as={AsTypes.H1} size={TextSize.XXL} color={TextColor.SECONDARY}>
					founded in 2018
				</Text>
			</div>
			<div>
				<Text as={AsTypes.H2} size={TextSize.S} color={TextColor.PRIMARY}>
					Тульская региональная общественная организация <br/> содействия развития бизнеса
				</Text>
			</div>
			<div>
				<button className={cls.btn}>
					<p>Присоединиться</p>
					<svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6"
					     xmlns="http://www.w3.org/2000/svg">
						<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
					</svg>
				</button>
			</div>
		</div>
	);
};
