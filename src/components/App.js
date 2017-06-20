import React from "react";
import * as MD from "react-md";

const { DataTable, TableHeader, TableBody, TableColumn, TableRow } = MD;
const { Card, CardTitle, CardText } = MD;
const { IconButton } = MD;

class AppColumn extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hover: false, follow: props.item.follow };
		this.checkSwitcher = this.checkSwitcher.bind(this);
	}
	checkSwitcher() {
		this.setState({ follow: !this.state.follow });
		/*Тут redux диспатч*/
	}
	render() {
		return <div onMouseEnter={() => this.setState({ hover: true })} onMouseLeave={() => this.setState({  hover: false })}>
			{this.state.follow ?
				this.state.hover ?
					<div onClick={this.checkSwitcher} className="okMouse_element_follower noOk">Unfollow</div> :
					<i className="material-icons okGreen">&#xE86C;</i>
				:
				this.state.hover ?
					<div onClick={this.checkSwitcher} className="okMouse_element_follower yesOk">Follow</div> :
					<i className="material-icons">&#xE147;</i>
			}
		</div>
	}
}
class AppLogic extends React.Component {
	render() {
		return <TableBody>
			{this.props.data.map((item, index) => {
				let is = index % 2 === 0 ? "grayPlus" : "";
				return <TableRow key={index} className={is}>
					<TableColumn>
						<div>
							<div>
								<img src={item.img} />
							</div>
							<div className="ItemData">
								<div className="ItemData0">
									<span>{item.name}</span>
									<AppColumn key={index} item={item} />
								</div>
								<div className="ItemData1">
									<i className="material-icons">&#xE86C;</i>
									<span>{item.conters}</span>
								</div>
							</div>
						</div>
					</TableColumn>
					<TableColumn className="tabBold">{item.ides}</TableColumn>
					<TableColumn className="tabBold">{item.following}</TableColumn>
					<TableColumn className="tabBold">{item.followers}</TableColumn>
				</TableRow>;
			})}
		</TableBody>
	}
}
function App(props) {
	return <div className="app">
		<div className="title_">
			<div className="titleIcon_">
				<i className="material-icons">&#xE7FB;</i>
			</div>
			<div className="titleText_"> Peoples</div>
		</div>
		<DataTable baseId={0} plain>
			<TableHeader>
				<TableRow>
					<TableColumn>Peoples</TableColumn>
					<TableColumn>Ideas</TableColumn>
					<TableColumn>Following</TableColumn>
					<TableColumn>Followers</TableColumn>
				</TableRow>
			</TableHeader>
			<AppLogic data={props.data} />
		</DataTable>
		<div className="showMoreBTN">
			Show More
		</div>
	</div>
}
export default App;