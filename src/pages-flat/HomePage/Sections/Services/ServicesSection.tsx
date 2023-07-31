'use client'
import cls from './ServicesSection.module.scss';
import classNames from "classnames";
import { AsTypes, Text, TextSize } from "@/shared/ui/Text/Text";
import Image from "next/image";
import PriceIcon from "@/shared/assets/icon/propertyValuation.svg";
import BusinessPlanning from "@/shared/assets/icon/businessPlanning.svg";
import ExhibitionActivities from "@/shared/assets/icon/exhibitionActivities.svg";
import ForeignEconomic from "@/shared/assets/icon/foreignEconomic.svg";
import BusinessConsulting from "@/shared/assets/icon/businessConsulting.svg";
import Carousel from 'better-react-carousel'

interface IServicesSectionProps {
    className?: string;
}

const slides = [
    {
        icon: PriceIcon,
        text: 'Оценка имущества'
    },
    {
        icon: BusinessPlanning,
        text: 'Бизнес-планирование и финансовый аудит'
    },
    {
        icon: ExhibitionActivities,
        text: 'Выставочная деятельность'
    },
    {
        icon: ForeignEconomic,
        text: 'Внешнеэкономическая деятельность'
    },
    {
        icon: BusinessConsulting,
        text: 'Бизнес-консультирование'
    },
]

export const ServicesSection = (props: IServicesSectionProps) => {
    const { className } = props;
    return (
        <div
            className={classNames(cls.ServicesSection, {}, [className])}
        >
            <Text as={AsTypes.H2} size={TextSize.XXL} className={cls.sectionTitle}>Услуги</Text>
            <div className={cls.sectionSubtitle}>
                Нами ведется большая работа по развитию и совершенствованию услуг, предоставляемых малому и среднему
                бизнесу.
            </div>
            <div className={cls.list}>

            <Carousel cols={3} rows={1} gap={24} loop>
                {slides.map(item => (
                    <Carousel.Item key={item.text}>
                        <div className={cls.item}>
                            <Image src={item.icon} alt={'PriceIcon'} width={80}/>
                            <Text size={TextSize.S}>{item.text}</Text>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            </div>

        </div>
    );
};
