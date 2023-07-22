import classNames from "classnames";
import cls from './styles.module.scss';
import { HeroSection } from "@/pages-flat/HomePage/Sections/Hero/HeroSection";
import { Section } from "@/shared/ui/Section/Section";
import { AboutSection } from "@/pages-flat/HomePage/Sections/About/AboutSection";
import { TasksSection } from "@/pages-flat/HomePage/Sections/Tasks/TasksSection";
import { ServicesSection } from "@/pages-flat/HomePage/Sections/Services/ServicesSection";

export const HomePage = () => {
	return (
		<div
			className={classNames(cls.HomePage, {}, [])}
		>
			<Section className={cls.pageWrapper}>
				<HeroSection/>
				<AboutSection/>
				<TasksSection/>
				<ServicesSection/>


				<div>
					Сотрудничество с Общественной организацией открывает новые возможности – начиная от создания бизнеса до его развития и процветания.
				</div>
				<div>
					Миссия Клуба — объединение предпринимателей в экосистему, которая позволит каждому участнику Клуба ускорить процесс роста бизнеса, личности, а также выйти на совершенно новый уровень развития. Взаимная поддержка членов Клуба и формирование лучшего окружения.
				</div>
				<div>
					Цель Клуба — сформировать сообщество предпринимателей готовых меняться, делиться опытом, обмениваться информацией. Сообщество, в котором участники могут делиться взглядом из другой сферы на ситуацию и предлагать незамыленные варианты решения
				</div>
				<div>
					Руководство
				</div>
				<div>
					Кайдарова Светлана Александровна -основатель и руководитель Клуба, тульский региональный представитель «Союза женских сил по поддержке гражданских инициатив», национальный агент развития предпринимательства.
				</div>
			</Section>
		</div>
	);
};
