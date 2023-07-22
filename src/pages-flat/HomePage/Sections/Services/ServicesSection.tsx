import cls from './ServicesSection.module.scss';
import classNames from "classnames";

interface IServicesSectionProps {
    className?: string;
}

export const ServicesSection = (props: IServicesSectionProps) => {
    const { className } = props;
    return (
        <div
            className={classNames(cls.ServicesSection, {}, [className])}
        >
            <div>
                Нами ведется большая работа по развитию и совершенствованию услуг, предоставляемых малому и среднему
                бизнесу.
            </div>
            <div>
                Мы оказываем широкий спектр услуг:
            </div>
            <ul>
                <li>Оценка имущества</li>
                <li>Бизнес-планирование и финансовый аудит</li>
                <li>Выставочная деятельность</li>
                <li>Внешнеэкономическая деятельность</li>
                <li>Бизнес- консультирование и пр</li>
            </ul>
        </div>
    );
};
