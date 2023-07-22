import cls from './AboutSection.module.scss';
import classNames from "classnames";
import { AsTypes, Text, TextSize } from "@/shared/ui/Text/Text";

interface IAboutSectionProps {
    className?: string;
}

export const AboutSection = (props: IAboutSectionProps) => {
    const {className} = props;
    return (
        <div
            className={classNames(cls.AboutSection, {}, [className])}
        >
            <Text as={AsTypes.H2} size={TextSize.XL} className={cls.sectionTitle}>О нас</Text>
            <div>
                <div>
                    Организация взаимодействует с органами государственной власти Тульской области, с общественными
                    организациями регионов РФ по поддержке и развитию малого и среднего предпринимательства.
                </div>
                <div> Клуб женщин предпринимателей объединяет предпринимателей Тульской области, помогает в развитии
                    бизнеса, расширении деловых связей, поиске надежных партнеров, обучении и обмене опытом.
                </div>
                <div>
                    Клуб женщин предпринимателей-это сообщество предпринимателей, чей бизнес является основой городской
                    экономики
                </div>
            </div>
        </div>
    );
};
