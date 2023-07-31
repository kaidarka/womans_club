import { AsTypes, Text, TextSize } from "@/shared/ui/Text/Text";
import { Section } from "@/shared/ui/Section/Section";

export default function Contacts() {
	return (
		<Section>
			<Text size={TextSize.XXL} as={AsTypes.H1}>
				Контакты
			</Text>
			<div>
				Email: womans-club@mail.ru
			</div>
			<div>
				телефон: 89105848285, 89202721520
			</div>

		</Section>
	)
}
