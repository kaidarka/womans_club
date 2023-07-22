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
            <Text as={AsTypes.H2} size={TextSize.XXL} className={cls.sectionTitle}>О нас</Text>
            <div className={cls.aboutList}>
                <div className={classNames(cls.item1, {}, [cls.item])}>
                    <span className={cls.itemNumber}>1</span>
                    <Text as={AsTypes.P} size={TextSize.M} className={cls.itemText}>
                        Организация взаимодействует с органами государственной власти Тульской области, с общественными
                        организациями регионов РФ по поддержке и развитию малого и среднего предпринимательства.
                    </Text>
                </div>
                <div className={classNames(cls.item2, {}, [cls.item])}>
                    <span className={cls.itemNumber}>2</span>
                    <Text as={AsTypes.P} size={TextSize.M} className={cls.itemText}>
                        Клуб женщин предпринимателей объединяет предпринимателей Тульской области, помогает в развитии
                        бизнеса, расширении деловых связей, поиске надежных партнеров, обучении и обмене опытом.
                    </Text>
                </div>
                <div className={classNames(cls.item3, {}, [cls.item])}>
                    About<span>.</span>
                </div>
                <div className={classNames(cls.item4, {}, [cls.item])}>
                    <span className={cls.itemNumber}>3</span>
                    <Text as={AsTypes.P} size={TextSize.M} className={cls.itemText}>
                        Клуб женщин предпринимателей-это сообщество предпринимателей, чей бизнес является основой
                        городской экономики.
                    </Text>
                </div>
            </div>
        </div>
    );
};
