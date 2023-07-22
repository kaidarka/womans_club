import cls from './HeroSection.module.scss';
import classNames from "classnames";
import { AsTypes, Text, TextColor, TextSize } from "@/shared/ui/Text/Text";
import { Button, ButtonType } from "@/shared/ui/Button/Button";

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
				<Button type={ButtonType.PRIMARY}>
					Присоединиться
				</Button>
			</div>
		</div>
	);
};
