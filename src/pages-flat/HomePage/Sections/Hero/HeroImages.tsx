import cls from './HeroSection.module.scss';
import Image from "next/image";

export const HeroImages = () => {
	return (
		<div className={cls.HeroImages}>
			<div className={cls.grid1}>
				<Image className={cls.HeroImage} src='/hero1.png' width={288} height={439} alt='' priority/>
			</div>
			<div className={cls.grid2}>
				<Image className={cls.HeroImage} src='/hero2.png' width={413} height={216} alt='' priority/>
			</div>
			<div className={cls.grid3}>
				<Image className={cls.HeroImage} src='/hero3.png' width={336} height={199} alt='' priority/>
			</div>
		</div>
	);
};

