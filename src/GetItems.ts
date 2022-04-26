import ItemsRepository from "./ItemsRepository";

export default class GetItems {

	constructor (readonly repository: ItemsRepository) {
	}

	async execute (): Promise<Output[]> {
		const items = await this.repository.getItems();
		const output: Output[] = [];
		for (const item of items) {
			output.push({ description: item.description, price: parseFloat(item.price) });
		}
		return output;
	}
}

type Output = {
	description: string,
	price: number
}
