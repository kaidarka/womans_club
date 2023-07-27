import cls from './TasksSection.module.scss';
import classNames from "classnames";
import { AsTypes, Text, TextSize } from "@/shared/ui/Text/Text";

interface ITasksSectionProps {
    className?: string;
}

export const TasksSection = (props: ITasksSectionProps) => {
    const { className } = props;
    return (
        <div
            className={classNames(cls.TasksSection, {}, [className])}
        >
            <Text as={AsTypes.H2} size={TextSize.XXL} className={cls.sectionTitle}>Наши задачи</Text>
            <div className={cls.wrapper}>
                <div className={cls.card}>Создание площадки возможностей для оперативной коммуникации, обмена опытом и получения новых
                    знаний</div>
                <div className={cls.card}>Обеспечение поддержки и раскрытие потенциала лидеров бизнес-сообщества</div>
                <div className={cls.card}>Формирование и продвижение культуры содействия и партнёрства бизнес-сообществе</div>
                <div className={cls.card}>Расширение форматов взаимодействия лидеров бизнес-сообщества с органам публичной власти с
                    целью участия в формировании политики в сфере развития предпринимательства и устойчивого
                    развития</div>
                <div className={cls.card}>Создание устойчивого института бизнес-комьюнити как основы развития гражданского общества и
                    формирования благоприятного делового климата</div>
            </div>
        </div>
    );
};
