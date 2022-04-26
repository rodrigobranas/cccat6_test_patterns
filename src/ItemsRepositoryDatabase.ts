import Connection from "./Connection";
import ItemsRepository from "./ItemsRepository";

export default class ItemsRepositoryDatabase implements ItemsRepository {
	connection: Connection;

	constructor () {
		this.connection = new Connection();
	}

	async getItems () {
		console.log("indo no banco de dados");
		const items = await this.connection.query("select * from ccca.item", []);
		return items;
	}
}
